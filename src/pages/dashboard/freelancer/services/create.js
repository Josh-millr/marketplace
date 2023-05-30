import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  Textarea,
  Select,
  Stack,
  Flex,
  Button,
} from '@mantine/core';

import { RichTextEditor, Link } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';

import { NewFaqInputForm } from '@/shared/components/NewFaqInputForm';
import { NewServiceCreator } from '@/shared/utils/NewServiceCreator';
import { PageContainer } from '@/shared/components/PageContainer';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardNewfaqCard } from '@/shared/components/DashboardNewfaqCard';
import { NewRequirementInputForm } from '@/shared/components/NewRequirementInputForm';
import { DashboardNewRequirementCard } from '@/shared/components/DashboardNewRequirementCard';

const content =
  '<h2 style="text-align: center;">Welcome to Mantine rich text editor</h2><p><code>RichTextEditor</code> component focuses on usability and is designed to be as simple as possible to bring a familiar editing experience to regular users. <code>RichTextEditor</code> is based on <a href="https://tiptap.dev/" rel="noopener noreferrer" target="_blank">Tiptap.dev</a> and supports all of its features:</p><ul><li>General text formatting: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike-through</s> </li><li>Headings (h1-h6)</li><li>Sub and super scripts (<sup>&lt;sup /&gt;</sup> and <sub>&lt;sub /&gt;</sub> tags)</li><li>Ordered and bullet lists</li><li>Text align&nbsp;</li><li>And all <a href="https://tiptap.dev/extensions" target="_blank" rel="noopener noreferrer">other extensions</a></li></ul>';

export default function CreateService() {
  const [showFaqInputForm, setShowFaqInputForm] = useState(false);
  const [showRequirementInputForm, setShowRequirementInputForm] =
    useState(false);
  const newService = new NewServiceCreator();

  const form = useForm({
    initialValues: { ...newService },
  });

  console.log(form.values);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });

  return (
    <PageContainer.Dashboard>
      <DashboardPageHeader
        showButton
        btnLabel="Save & Publish"
        title="Create new service"
        action={() => {}} // Create new service
      />
      <DashboardSectionCard title="Basic Information">
        <Stack spacing="xl">
          <Textarea
            autosize
            minRows={2}
            maxRows={4}
            withAsterisk
            label="Service Title"
            placeholder="I will create..."
            {...form.getInputProps('title')}
          />
          <Flex w="100%" gap="xl">
            <Select
              w="100%"
              label="Category"
              placeholder="eg. Graphics design"
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
              ]}
            />
            <Select
              w="100%"
              label="Sub category"
              placeholder="eg. User interface design"
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
              ]}
            />
          </Flex>
        </Stack>
      </DashboardSectionCard>

      <DashboardSectionCard title="Description">
        <RichTextEditor editor={editor}>
          <RichTextEditor.Toolbar sticky stickyOffset={60}>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Highlight />
              <RichTextEditor.Code />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Blockquote />
              <RichTextEditor.Hr />
              <RichTextEditor.BulletList />
              <RichTextEditor.OrderedList />
              <RichTextEditor.Subscript />
              <RichTextEditor.Superscript />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Link />
              <RichTextEditor.Unlink />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.AlignLeft />
              <RichTextEditor.AlignCenter />
              <RichTextEditor.AlignJustify />
              <RichTextEditor.AlignRight />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>

          <RichTextEditor.Content />
        </RichTextEditor>
      </DashboardSectionCard>

      <DashboardSectionCard title="Frequently asked questions" contentFullWidth>
        {form.values.faq.length > 0 &&
          form.values.faq.map((faq) => (
            <DashboardNewfaqCard
              id={faq.id}
              key={faq.id}
              title={faq.title}
              description={faq.description}
              deleteFaq={(id) => {
                // Delete an FAQ by id
                const filteredFaq = form.values.faq.filter(
                  (faqItem) => faqItem.id !== id
                );

                form.setFieldValue('faq', filteredFaq);
              }}
            />
          ))}
        {showFaqInputForm && (
          <NewFaqInputForm
            close={() => setShowFaqInputForm(false)}
            storeInput={(value) => {
              const prevFaqValues = form.values.faq;
              const newFaqValues = [...prevFaqValues, value];
              form.setFieldValue('faq', newFaqValues);
            }}
          />
        )}
        <Button onClick={() => setShowFaqInputForm(true)}>Add new</Button>
      </DashboardSectionCard>

      <DashboardSectionCard title="Requirement" contentFullWidth>
        {form.values.requirement.length > 0 &&
          form.values.requirement.map(
            ({ selectedType, options, question }, index) => (
              <DashboardNewRequirementCard
                key={index}
                type={selectedType}
                question={question}
                options={options}
              />
            )
          )}

        {showRequirementInputForm && (
          <NewRequirementInputForm
            storeRequirement={(value) => {
              const prevRequirementValues = form.values.requirement;
              const newRequirementValues = [...prevRequirementValues, value];
              form.setFieldValue('requirement', newRequirementValues);
            }}
            close={() => setShowRequirementInputForm(false)}
            storeInput={(value) => {
              const prevFaqValues = form.values.requirement;
              const newFaqValues = [...prevFaqValues, value];
              form.setFieldValue('faq', newFaqValues);
            }}
          />
        )}
        <Button onClick={() => setShowRequirementInputForm(true)}>
          Add new
        </Button>
      </DashboardSectionCard>

      <DashboardSectionCard title="scope and pricing">
        {/* Add form inputs... */}
      </DashboardSectionCard>

      <DashboardSectionCard title="add extra services">
        {/* Add form inputs... */}
      </DashboardSectionCard>

      <DashboardSectionCard title="Attachment">
        {/* Add form inputs... */}
      </DashboardSectionCard>
    </PageContainer.Dashboard>
  );
}
