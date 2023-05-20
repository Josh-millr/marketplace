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
  Group,
} from '@mantine/core';
import { IconTrash, IconCalendar } from '@tabler/icons-react';

export function ExperienceInformationForm() {
  const [certificates, setCertificates] = useState([]);
  const [title, setTitle] = useState('');
  const [issuer, setIssuer] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [credentialId, setCredentialId] = useState('');
  const [credentialUrl, setCredentialUrl] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleAddCertificate = () => {
    const newCertificate = {
      title,
      issuer,
      issueDate,
      credentialId,
      credentialUrl,
    };
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

  setCertificates((prevCertificates) => [...prevCertificates, newCertificate]);

  const handleDeleteCertificate = (index) => {
    setCertificates((prevCertificates) =>
      prevCertificates.filter((_, i) => i !== index)
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
        <Group direction="column" spacing="lg">
          <TextInput
            label="Certificate Title"
            placeholder="Enter certificate title"
            value={title}
            onChange={(event) => setTitle(event.currentTarget.value)}
          />

          <TextInput
            label="Issuer"
            placeholder="Enter issuer"
            value={issuer}
            onChange={(event) => setIssuer(event.currentTarget.value)}
          />

          <TextInput
            label="Issue Date"
            placeholder="Enter issue date"
            value={issueDate}
            onChange={(event) => setIssueDate(event.currentTarget.value)}
            icon={<IconCalendar />}
            iconPosition="right"
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
            onChange={(event) => setCredentialId(event.currentTarget.value)}
          />

          <TextInput
            label="Credential URL"
            placeholder="Enter credential URL"
            value={credentialUrl}
            onChange={(event) => setCredentialUrl(event.currentTarget.value)}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleAddCertificate}>Add Certificate</Button>
          </div>
        </Group>

        {certificates.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <Text variant="h3">Added Certificates:</Text>

            {certificates.map((certificate, index) => (
              <Paper
                key={index}
                padding="md"
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Text>
                  <strong>Title:</strong> {certificate.title}
                </Text>
                <Text style={{ marginLeft: '1rem' }}>
                  <strong>Issuer:</strong> {certificate.issuer}
                  <strong>Date:</strong> {certificate.issueDate}
                </Text>

                <ActionIcon
                  variant="hover"
                  color="red"
                  radius="xl"
                  onClick={() => handleDeleteCertificate(index)}
                  style={{ marginLeft: 'auto' }}
                >
                  <IconTrash />
                </ActionIcon>
              </Paper>
            ))}
          </div>
        )}
      </Paper>
    </Container>
  );
}
