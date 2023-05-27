import React, { useState } from 'react';
import {
  Text,
  Button,
  ActionIcon,
  Paper,
  TextInput,
  SimpleGrid,
  Group,
} from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  IconArrowUpRight,
  IconCalendar,
  IconPencil,
  IconX,
} from '@tabler/icons-react';
import { DateInput } from '@mantine/dates';

// import { updateUser } from './actions/userActions';

export function ExperienceInformationProfileForm() {
  const { user } = useSelector((state) => state.user);
  const experiences = user.certificates || [];
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState(null);
  const [credentialId, setCredentialId] = useState('');
  const [credentialUrl, setCredentialUrl] = useState('https://');
  const [certificates, setCertificates] = useState(experiences);
  const [editIndex, setEditIndex] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleDeleteExperience = (index) => {
    setCertificates((prevCertificates) =>
      prevCertificates.filter((_, i) => i !== index)
    );
  };

  const handleEditExperience = (index) => {
    setEditIndex(index);
    const experience = certificates[index];
    setTitle(experience.title);
    setIssuer(experience.issuer);
    setIssueDate(new Date(experience.issueDate));
    setCredentialId(experience.credentialId);
    setCredentialUrl(experience.credentialUrl);
  };

  const handleUpdateExperience = (index, updatedExperience) => {
    setCertificates((prevCertificates) => {
      const updatedCertificates = [...prevCertificates];
      updatedCertificates[index] = updatedExperience;
      return updatedCertificates;
    });
    setEditIndex(null);
  };

  const handleAddExperience = () => {
    if (title && issuer && issueDate && credentialId && credentialUrl) {
      const newExperience = {
        title,
        issuer,
        issueDate: issueDate.toLocaleDateString(),
        credentialId,
        credentialUrl,
      };
      setCertificates((prevCertificates) => [
        ...prevCertificates,
        newExperience,
      ]);
      setShowAddForm(false);
      setTitle('');
      setIssuer('');
      setIssueDate(null);
      setCredentialId('');
      setCredentialUrl('https://');
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  const handleCancelAddExperience = () => {
    setTitle('');
    setIssuer('');
    setIssueDate(null);
    setCredentialId('');
    setCredentialUrl('https://');
    setShowAddForm(false);
  };

  const handleShowAddForm = () => {
    setShowAddForm(true);
  };

  const handleSaveChanges = () => {
    dispatch(updateUser({ certificates }));
    // You can dispatch an action to update the Redux store with the updated certificates
  };

  return (
    <div>
      {certificates.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          {certificates.map((experience, index) => (
            <Paper
              key={index}
              padding="md"
              style={{
                display: 'flex-row',
                border: '1px solid #e3e8ee',
                borderRadius: '4px',
                padding: '0.5em',
              }}
            >
              <div>
                <Text>
                  <strong>{experience.title}</strong>
                </Text>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Group>
                    <Text>{experience.issuer}</Text>
                    <div
                      color="gray"
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '80%',
                        backgroundColor: 'black',
                      }}
                    />
                    <Text>{experience.issueDate}</Text>
                  </Group>
                  <Group>
                    <Button
                      variant="hover"
                      color="teal"
                      size="sm"
                      onClick={() => handleEditExperience(index)}
                    >
                      <IconPencil />
                    </Button>
                    <span>|</span>
                    <ActionIcon
                      variant="hover"
                      color="red"
                      radius="xl"
                      style={{ marginLeft: '0.5rem' }}
                      onClick={() => handleDeleteExperience(index)}
                    >
                      <IconX color="red" />
                    </ActionIcon>
                  </Group>
                </div>
              </div>
            </Paper>
          ))}
        </div>
      )}

      {!showAddForm && (
        <div>
          <Button
            variant="light"
            color="teal"
            size="sm"
            onClick={handleShowAddForm}
          >
            Add more
          </Button>
        </div>
      )}

      {showAddForm && (
        <div>
          <div style={{ backgroundColor: '#EFEFEF', padding: '2em' }}>
            <SimpleGrid
              cols={1}
              spacing="xl"
              // breakpoints={[{ minWidth: 'md', cols: 2 }]}
            >
              <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
                <TextInput
                  label="Certificate Title"
                  placeholder="Certificate or Award"
                  value={title}
                  required
                  onChange={(event) => setTitle(event.currentTarget.value)}
                />

                <TextInput
                  label="Issuer"
                  placeholder="(eg Adobe, google...)"
                  value={issuer}
                  required
                  onChange={(event) => setIssuer(event.currentTarget.value)}
                />
              </SimpleGrid>

              <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
                <DateInput
                  label="Issue Date"
                  placeholder="(eg. May 25, 2023)"
                  valueFormat="DD/MM/YYYY"
                  value={issueDate}
                  onChange={setIssueDate}
                  rightSection={<IconCalendar />}
                  required
                />

                <TextInput
                  label="Credential ID"
                  placeholder="(eg. 12631SSDJs3)"
                  value={credentialId}
                  required
                  onChange={(event) =>
                    setCredentialId(event.currentTarget.value)
                  }
                />
              </SimpleGrid>

              <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
                <TextInput
                  label="Credential URL"
                  value={credentialUrl}
                  required
                  onChange={({ currentTarget: { value } }) => {
                    if (!value.startsWith('https://')) {
                      setCredentialUrl(`https://${value}`);
                    } else {
                      setCredentialUrl(value);
                    }
                  }}
                />
              </SimpleGrid>
            </SimpleGrid>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'left',
              marginTop: '2em',
              marginBottom: '3em',
            }}
          >
            <Button
              variant="subtle"
              color="teal"
              onClick={handleCancelAddExperience}
            >
              Cancel
            </Button>

            <Button
              color="teal"
              size="sm"
              variant="outline"
              onClick={handleAddExperience}
            >
              Add
            </Button>
          </div>
        </div>
      )}

      {/* {editIndex !== null && (
        <div>
          <Button
            color="teal"
            size="sm"
            variant="outline"
            onClick={handleSaveChanges}
          >
            Save Changes
          </Button>
        </div>
      )} */}
    </div>
  );
}
