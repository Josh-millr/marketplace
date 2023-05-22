import { useState } from 'react';
import {
  Container,
  Paper,
  TextInput,
  Divider,
  Text,
  Button,
  ActionIcon,
  SimpleGrid,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconCalendar, IconX } from '@tabler/icons-react';

export function ExperienceInformationForm() {
  const [certificates, setCertificates] = useState([]);
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState(null);

  const [credentialId, setCredentialId] = useState('');
  const [credentialUrl, setCredentialUrl] = useState('https://');

  const handleAddCertificate = () => {
    if (title && issuer && issueDate && credentialId && credentialUrl) {
      const newCertificate = {
        title,
        issuer,
        issueDate,
        credentialId,
        credentialUrl,
      };
      setCertificates((prevCertificates) => [
        ...prevCertificates,
        newCertificate,
      ]);
      setTitle('');
      setIssuer('');
      setIssueDate('');
      setCredentialId('');
      setCredentialUrl('');
    } else {
      alert('Please fill in all the required fields.');
    }
  };
  const handleCancel = () => {
    setTitle('');
    setIssuer('');
    setIssueDate('');
    setCredentialId('');
    setCredentialUrl('');
  };

  const handleDeleteCertificate = (index) => {
    setCertificates((prevCertificates) =>
      prevCertificates.filter((certificate, i) => i !== index)
    );
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper>
        <Text
          variant="h1"
          size="lg"
          style={{ textAlign: 'left', marginTop: '1em', marginBottom: '1rem' }}
        >
          Experience Information
        </Text>
        <Text
          variant="h2"
          size="md"
          style={{ textAlign: 'left', marginTop: '1em', marginBottom: '1rem' }}
        >
          Showcase your qualifications and proof of expertise. This will improve
          your chances of getting more jobs and overall increases your chances
          of success on Hamzry
        </Text>

        <Divider style={{ margin: '1rem 0' }} />

        <Text
          variant="h1"
          size="lg"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          Certificate or Awards
        </Text>

        <Text
          variant="h1"
          size="lg"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          Include any certificates or awards that are relevant to the services
          you&apos;re offering.
        </Text>

        {certificates.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            {certificates.map((certificate, index) => (
              <Paper
                key={index}
                padding="md"
                style={{
                  marginTop: '1rem',
                  display: 'flex-row',
                  alignItems: 'center',
                  border: '1px solid #e3e8ee',
                  borderRadius: '4px',
                  padding: '1em',
                }}
              >
                <Text>
                  <strong>{certificate.title}</strong>
                </Text>
                <div
                  style={{
                    display: 'flex-row',
                    gap: '1em',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'left',
                      gap: '1em',
                    }}
                  >
                    <p>{certificate.issuer}</p>

                    <div
                      color="gray"
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '80%',
                        backgroundColor: 'black',
                        marginTop: '0.5em',
                      }}
                    />
                    <p>{certificate.issueDate}</p>
                  </div>

                  <ActionIcon
                    variant="hover"
                    color="red"
                    radius="xl"
                    onClick={() => handleDeleteCertificate(index)}
                    style={{ marginLeft: 'auto' }}
                  >
                    <IconX color="red" />
                  </ActionIcon>
                </div>
              </Paper>
            ))}
          </div>
        )}

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
                onChange={(event) => setCredentialId(event.currentTarget.value)}
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
          <Button variant="subtle" color="teal" onClick={handleCancel}>
            Cancel
          </Button>

          <Button
            color="teal"
            size="sm"
            variant="outline"
            onClick={handleAddCertificate}
          >
            Add
          </Button>
        </div>
      </Paper>
    </Container>
  );
}
