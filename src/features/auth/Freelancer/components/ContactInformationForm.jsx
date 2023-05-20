import { useState } from 'react';
import {
  Container,
  Paper,
  TextInput,
  Divider,
  Text,
  Grid,
} from '@mantine/core';

import { IconFacebook, IconInstagram, IconTwitter } from '@tabler/icons-react';

export function ContactInformationForm() {
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+234');

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper>
        <Text
          variant="h1"
          size="lg"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          Contact Information
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

        <Text
          variant="h2"
          size="md"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          Social media accounts
        </Text>
        <form>
          {/* <Grid gutter="md">
            <TextInput
              icon={<IconFacebook />}
              iconPosition="left"
              placeholder="@username"
              value={facebook}
              onChange={(event) => setFacebook(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
            />

            <TextInput
              icon={<IconInstagram />}
              iconPosition="left"
              placeholder="@username"
              value={instagram}
              onChange={(event) => setInstagram(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
            />

            <TextInput
              icon={<IconTwitter />}
              iconPosition="left"
              value={twitter}
              placeholder="@username"
              onChange={(event) => setTwitter(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
            />
          </Grid> */}

          <button type="submit">Submit</button>
        </form>

        {/* <Divider style={{ margin: '1rem 0' }} />

        <Text
          variant="h2"
          size="md"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          Phone number
        </Text>
        <Text
          variant="h2"
          size="md"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          We need your phone number to keep your account safe. We&apos;ll never
          share your phone number.
        </Text>
        <TextInput
          icon={<IconTwitter />}
          iconPosition="left"
          value={phoneNumber}
          placeholder="Enter phone number"
          onChange={(event) =>
            setPhoneNumber(`+234${event.currentTarget.value}`)
          }
          style={{ marginBottom: '1rem' }}
        />
        <Divider style={{ margin: '1rem 0' }} /> */}
      </Paper>
    </Container>
  );
}
