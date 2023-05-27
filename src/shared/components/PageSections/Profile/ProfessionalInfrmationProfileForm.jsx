import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Divider,
  Select,
  TextInput,
  SimpleGrid,
  Textarea,
} from '@mantine/core';

export function ProfessionallInformationProfileFoem() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [occupation, setOccupation] = useState('');
  const [professtionaTitle, setprofesstionalTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [description, setDescription] = useState('');
  const [portfolio, setPortfolio] = useState('https://');
  const handleSkillsChange = (value) => {
    setSkills(value);
  };
  return (
    <>
      <div>
        <SimpleGrid cols={1} spacing="xl" mt={{ md: 50 }}>
          <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
            <Select
              label="Occupational"
              placeholder="Occupational Field"
              data={['Frontend', 'Backend', 'Cloud', 'Devops', 'Other']}
              value={user.occupation}
              onChange={(value) => setOccupation(value)}
              style={{ marginBottom: '1rem' }}
            />
            <div style={{ marginTop: '1.5rem' }}>
              <Select
                label=""
                placeholder="Professional Title"
                data={['Developer', 'Engineer']}
                value={user.professionalTitle}
                onChange={(value) => setprofesstionalTitle(value)}
                style={{ marginBottom: '1rem' }}
              />
            </div>
          </SimpleGrid>

          <SimpleGrid cols={1}>
            <Select
              searchable
              multiple
              label="Skills"
              placeholder="Select skills"
              data={[
                'JavaScript',
                'TypeScript',
                'Python',
                'ReactJs',
                'NextJs',
                'NodeJs',
              ]}
              value={user.skills}
              onChange={handleSkillsChange}
              filter={(value, query) =>
                value && value.toLowerCase().includes(query.toLowerCase())
              }
            />
          </SimpleGrid>

          <Textarea
            type="description"
            label="Professional Description"
            placeholder="Start typing ...."
            value={user.description}
            onChange={(event) => setDescription(event.currentTarget.value)}
            style={{ marginBottom: '1rem' }}
            size="md"
          />

          <TextInput
            label="Your Personal website / Portfolio"
            value={user.portfolio}
            onChange={({ currentTarget: { value } }) => {
              if (!value.startsWith('https://')) {
                setPortfolio(`https://${value}`);
              } else {
                setPortfolio(value);
              }
            }}
            style={{ marginBottom: '1rem' }}
          />
        </SimpleGrid>
      </div>
    </>
  );
}
