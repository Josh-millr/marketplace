import { useState } from 'react';
import {
  Container,
  Paper,
  TextInput,
  Select,
  SimpleGrid,
  Divider,
  Text,
  Textarea,
} from '@mantine/core';

export function ProfessionalInformationForm() {
  const [occupation, setOccupation] = useState('');
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const [portfolio, setPortfolio] = useState('https://');

  const handleSkillsChange = (value) => {
    setSkills(value);
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper>
        <Text
          variant="h1"
          size="lg"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          Professional Information
        </Text>
        <Text
          variant="h2"
          size="md"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          This is your time to shine. Let potential buyers know what you do best
          and how you gained your skills, certifications and experience.
        </Text>

        <Divider style={{ margin: '1rem 0' }} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        >
          <SimpleGrid cols={1} spacing="xl" mt={{ md: 50 }}>
            <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
              <Select
                label="Occupational"
                placeholder="Occupational Field"
                data={['Frontend', 'Backend', 'Cloud', 'Devops', 'Other']}
                value={occupation}
                onChange={(value) => setOccupation(value)}
                style={{ marginBottom: '1rem' }}
              />
              <div style={{ marginTop: '1.5rem' }}>
                <Select
                  label=""
                  placeholder="Professional Title"
                  data={['Developer', 'Engineer']}
                  value={title}
                  onChange={(value) => setTitle(value)}
                  style={{ marginBottom: '1rem' }}
                />
              </div>
            </SimpleGrid>

            <Divider style={{ margin: '1rem 0' }} />

            <SimpleGrid cols={1}>
              <Select
                searchable
                multiple
                label="Skills"
                description="List the skills related to the services you're offering and add your experience level."
                placeholder="Select skills"
                data={[
                  'JavaScript',
                  'TypeScript',
                  'Python',
                  'ReactJs',
                  'NextJs',
                  'NodeJs',
                ]}
                value={skills}
                onChange={handleSkillsChange}
                filter={(value, query) =>
                  value && value.toLowerCase().includes(query.toLowerCase())
                }
              />
            </SimpleGrid>

            <Divider style={{ margin: '1rem 0' }} />

            <Textarea
              type="description"
              label="Professional Description"
              description="A professional description is a detailed written statement that summarizes your skills, experience, and qualifications, it should be clear, concise, and persuasive."
              placeholder="Start typing ...."
              value={description}
              onChange={(event) => setDescription(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
              size="md"
            />

            <Divider style={{ margin: '1rem 0' }} />

            <TextInput
              label="Your Personal website / Portfolio"
              description="Include a link to your personal website or portfolio with your work samples."
              value={portfolio}
              onChange={({ currentTarget: { value } }) => {
                if (!value.startsWith('https://')) {
                  setPortfolio(`https://${value}`);
                } else {
                  setPortfolio(value);
                }
              }}
              style={{ marginBottom: '1rem' }}
            />

            <Divider style={{ margin: '1rem 0' }} />
          </SimpleGrid>
        </div>
      </Paper>
    </Container>
  );
}
