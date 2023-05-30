import { useState } from 'react';
import { Cancel } from 'iconoir-react';
import { v4 as uuid } from 'uuid';
import {
  Grid,
  Flex,
  Paper,
  Stack,
  Button,
  Select,
  Textarea,
  Checkbox,
  TextInput,
  ActionIcon,
} from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

const responseTypeOptions = [
  { value: 'freeForm', label: 'Freeform' },
  { value: 'attachment', label: 'Attachment' },
  { value: 'multipleChoice', label: 'Multiple Choice' },
];

function MultipleChoiceInput({ options, setOptions }) {
  const addNewOption = () => {
    const itemId = uuid();

    const optionObj = { id: itemId, option: '' };
    const newOptions = [...options, optionObj];
    setOptions(newOptions);
  };

  const removeOption = (id) => {
    const updatedOptions = options.filter((option) => option.id !== id);
    setOptions(updatedOptions);
  };

  const setOption = async (value, id) => {
    const updatedOptions = options.map((option) => {
      if (option.id === id) {
        return { ...option, option: value };
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  return (
    <Stack spacing="sm" w="100%">
      {options.map(({ id, option }) => (
        <Flex align="center" gap="md" key={id} w="100%">
          <TextInput
            w="100%"
            defaultValue={option}
            onChange={(event) => {
              setOption(event.currentTarget.value, id);
            }}
            placeholder="Add option"
          />
          <ActionIcon onClick={() => removeOption(id)}>
            {iconCreator({ icon: Cancel })}
          </ActionIcon>
        </Flex>
      ))}
      <Button variant="outline" onClick={() => addNewOption()}>
        Add new option
      </Button>
    </Stack>
  );
}

export function NewRequirementInputForm({ storeRequirement, close }) {
  const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState('');
  const [selectMulipleOptions, setSelectMultipleOptions] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const submitForm = () => {
    storeRequirement({
      selectedType,
      question,
      selectMulipleOptions,
      options,
    });
  };

  return (
    <Paper p="lg" bg="neutral.3" w="100%">
      <Stack spacing="xl" w="100%">
        <Textarea
          autosize
          maxRows={6}
          minRows={4}
          label="Add a question"
          placeholder="Start typing..."
          value={question}
          onChange={(event) => setQuestion(event.currentTarget.value)}
        />

        <Grid>
          <Grid.Col span={12} md={3}>
            <Select
              label="Response Type:"
              placeholder="Choose"
              data={responseTypeOptions}
              value={selectedType}
              onChange={setSelectedType}
            />
          </Grid.Col>
          <Grid.Col span={12} md={9}>
            <Flex align="end" justify="flex-end" w="100%" h="100%">
              {selectedType === 'multipleChoice' && (
                <Checkbox
                  label="Enable to choose more than 1 option"
                  checked={selectMulipleOptions}
                  onChange={(event) => {
                    setSelectMultipleOptions(event.currentTarget.checked);
                  }}
                />
              )}
            </Flex>
          </Grid.Col>
          <Grid.Col span={12}>
            {selectedType === 'multipleChoice' && (
              <MultipleChoiceInput options={options} setOptions={setOptions} />
            )}
          </Grid.Col>
        </Grid>

        <Flex w="100%" gap="lg" justify="flex-end">
          <Button variant="outline" onClick={() => close()}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => submitForm()}>
            Add
          </Button>
        </Flex>
      </Stack>
    </Paper>
  );
}
