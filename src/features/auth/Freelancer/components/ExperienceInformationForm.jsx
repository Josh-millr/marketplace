import { useState } from 'react';
import {
  Container,
  Paper,
  TextInput,
  Calendar,
  Divider,
  Text,
  Button,
  ActionIcon,
  Badge,
  Group,
  SimpleGrid,
} from '@mantine/core';
import { IconTrash, IconCalendar, IconWifi0, IconX } from '@tabler/icons-react';

export function ExperienceInformationForm() {
  const [certificates, setCertificates] = useState([]);
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [credentialId, setCredentialId] = useState('');
  const [credentialUrl, setCredentialUrl] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

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

  const handleCalendarChange = (value) => {
    setIssueDate(value);
    setShowCalendar(false);
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
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          Experience Information
        </Text>
        <Text
          variant="h2"
          size="md"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
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

        <SimpleGrid
          cols={1}
          spacing="xl"
          mt={{ md: 50 }}
          // breakpoints={[{ minWidth: 'md', cols: 2 }]}
        >
          <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
            <TextInput
              label="Certificate Title"
              placeholder="Enter certificate title"
              value={title}
              required
              onChange={(event) => setTitle(event.currentTarget.value)}
            />

            <TextInput
              label="Issuer"
              placeholder="Enter issuer"
              value={issuer}
              required
              onChange={(event) => setIssuer(event.currentTarget.value)}
            />
          </SimpleGrid>

          <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
            <TextInput
              label="Issue Date"
              placeholder="Enter issue date"
              value={issueDate}
              onChange={(event) => setIssueDate(event.currentTarget.value)}
              icon={<IconCalendar />}
              iconPosition="right"
              required
              onIconClick={() => setShowCalendar(true)}
            />
            {showCalendar && (
              <Calendar
                style={{ position: 'absolute', zIndex: 1 }}
                value={issueDate}
                onChange={handleCalendarChange}
                withSelect
              />
            )}

            <TextInput
              label="Credential ID"
              placeholder="Enter credential ID"
              value={credentialId}
              required
              onChange={(event) => setCredentialId(event.currentTarget.value)}
            />
          </SimpleGrid>

          <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
            <TextInput
              label="Credential URL"
              placeholder="Enter credential URL"
              value={credentialUrl}
              required
              onChange={(event) => setCredentialUrl(event.currentTarget.value)}
            />
          </SimpleGrid>
        </SimpleGrid>
        <div
          style={{
            display: 'flex',
            justifyContent: 'left',
            padding: '4em',
            marginTop: '2em',
          }}
        >
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAddCertificate}>Add Certificate</Button>
        </div>
      </Paper>
    </Container>
  );
}
