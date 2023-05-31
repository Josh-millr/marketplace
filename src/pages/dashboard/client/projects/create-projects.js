/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, isNotEmpty } from '@mantine/form';
import {
  TextInput,
  Grid,
  Textarea,
  Group,
  Select,
  NumberInput,
  Center,
  FileInput,
} from '@mantine/core';
import { UploadSquare } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { HamzryAPI } from '@/config/api/HamzryAPI';
import { generalActions } from '@/state/general/generalReducer';
import { PageContainer } from '@/shared/components/PageContainer';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardSectionTitle } from '@/shared/components/DashboardSectionTitle';
import { notificationFactory } from '@/shared/utils/notificationFactory';
import { CatchError } from '@/shared/utils/CatchError';

function Value({ file }) {
  return (
    <Center
      inline
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[1],
        fontSize: theme.fontSizes.xs,
        padding: '3px 7px',
        borderRadius: theme.radius.sm,
      })}
    >
      <span
        style={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          maxWidth: 200,
          display: 'inline-block',
        }}
      >
        {file.name}
      </span>
    </Center>
  );
}

const ValueComponent = ({ value }) => {
  if (Array.isArray(value)) {
    return (
      <Group spacing="sm" py="xs">
        {value.map((file, index) => (
          <Value file={file} key={index} />
        ))}
      </Group>
    );
  }

  return <Value file={value} />;
};

function CreateProject() {
  const { category } = useSelector((state) => state.general);

  const dispatch = useDispatch();

  const form = useForm({
    initialValues: {
      title: '',
      description: '',
      priceType: 'fixed',
      budget: 0,
      projectedDuration: 0,
      experienceLevel: '',
      category: {
        main: '',
        sub: '',
        sub_sub: '',
      },
      attachments: [],
    },
    validate: {
      title: isNotEmpty('Title should not be empty'),
      budget: isNotEmpty('Budget should not be empty'),
      description: isNotEmpty('Description should not be empty'),
      priceType: isNotEmpty('Budget Type should should not be empty'),
      experienceLevel: isNotEmpty('Experience level should not be empty'),
      projectedDuration: isNotEmpty('Project duration should not be empty'),
      category: {
        sub: isNotEmpty('Subcategoy should not be empty'),
        main: isNotEmpty('Main categoy should not be empty'),
        sub_sub: isNotEmpty('Sub-subcategoy should not be empty'),
      },
    },
  });

  console.log('Selected files', form.values.attachments);

  // Filters out the names of the main category from the `category` list
  const mainCategories = useMemo(() => {
    return category?.map(({ name }) => name);
  }, [category]);

  // Filters out the names of the sub categories from the `category` list
  const selectedCategories = useMemo(() => {
    const catigFilter = (catig) => catig.name === form.values.category.main;
    const selectedCategory = category?.find(catigFilter);

    return selectedCategory?.subCategories?.map(({ name }) => name);
  }, [form.values.category.main]);

  // Filters out the names of the sub_sub categories from the `category` list
  const subSubCategories = useMemo(() => {
    const catigFilter = (catig) => catig.name === form.values.category.main;
    const mainCategory = category?.find(catigFilter);

    const subCatigFilter = (cat) => cat.name === form.values.category.sub;
    const subCategory = mainCategory?.subCategories?.find(subCatigFilter);

    return subCategory?.navigationItems?.map(({ name }) => name);
  }, [form.values.category.main, form.values.category.sub]);

  const submitForm = form.onSubmit(async (values) => {
    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    try {
      dispatch(generalActions.startLoading());

      const response = await HamzryAPI.post('/api/projects', values);

      dispatch(generalActions.stopLoading());
    } catch (error) {
      dispatch(generalActions.stopLoading());

      const checkError = new CatchError(error);
      notificationFactory(checkError.network());
    }
  });

  return (
    <PageContainer.Marketplace>
      <DashboardPageHeader
        showButton
        btnLabel="Save & Publish"
        // action={submitForm}
        title="Create Project"
        descr={`Create a project and get matched with top Freelancers on the 
        marketplace. Simply fill out the form inputs with details about your project`}
      />

      <DashboardSectionCard>
        {/* Basic Information */}
        <DashboardSectionTitle title="Basic Information" />

        <form>
          <Grid gap="xl" py="xl" px={{ base: 0, md: 'xl' }} maw={800}>
            <Grid.Col span={12}>
              <TextInput
                required
                radius="md"
                size="md"
                label="Project Title"
                placeholder="eg. Content Writing for a Blog on Health and Wellness"
                {...form.getInputProps('title')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={4}>
              <Select
                clearable
                required
                label="Main Category"
                placeholder="select"
                size="md"
                data={mainCategories}
                {...form.getInputProps('category.main')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={4}>
              <Select
                clearable
                required
                disabled={form.values.category.main === ''}
                label="Subcategory"
                placeholder="select"
                size="md"
                data={selectedCategories ?? []}
                {...form.getInputProps('category.sub')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={4}>
              <Select
                clearable
                required
                disabled={form.values.category.sub === ''}
                label="Sub Subcategory"
                placeholder="choose"
                size="md"
                data={subSubCategories ?? []}
                {...form.getInputProps('category.sub_sub')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={6}>
              <Select
                required
                label="Budget Type"
                placeholder="choose"
                size="md"
                data={[{ value: 'fixed', label: 'Fixed' }]}
                {...form.getInputProps('priceType')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={6}>
              <NumberInput
                label="Budget"
                defaultValue={0}
                parser={(value) => value.replace(/₦\s?|(,*)/g, '')}
                formatter={(value) => {
                  const regExp = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
                  return !Number.isNaN(parseFloat(value))
                    ? `₦ ${value}`.replace(regExp, ',')
                    : '₦ ';
                }}
                {...form.getInputProps('budget')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={6}>
              <NumberInput
                size="md"
                label="Project Duration (In days)"
                defaultValue={0}
                {...form.getInputProps('projectedDuration')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={6}>
              <Select
                required
                label="Minimum Experience Level"
                placeholder="choose"
                size="md"
                data={[
                  { value: 'beginner', label: 'Beginner' },
                  { value: 'intermediate', label: 'Intermediate' },
                  { value: 'expert', label: 'Expert' },
                ]}
                {...form.getInputProps('experienceLevel')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                required
                placeholder="start typing"
                label="Project Description"
                // eslint-disable-next-line react/jsx-no-duplicate-props
                minRows={4}
                maxRows={4}
                {...form.getInputProps('description')}
              />
            </Grid.Col>
          </Grid>
        </form>
      </DashboardSectionCard>

      <DashboardSectionCard title="Upload attachment" padSection withTitle>
        {/* File Attachment goes here */}
        {/* <UploadAttachmentCard /> */}
        <FileInput
          multiple
          placeholder="Pick file"
          label="Upload"
          valueComponent={ValueComponent}
          icon={iconCreator({ icon: UploadSquare })}
          {...form.getInputProps('attachments')}
        />
      </DashboardSectionCard>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default CreateProject;
