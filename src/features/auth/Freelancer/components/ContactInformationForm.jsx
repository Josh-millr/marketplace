import { useState } from 'react';
import {
  Container,
  Paper,
  TextInput,
  Divider,
  Text,
  Grid,
} from '@mantine/core';

import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitterFilled,
} from '@tabler/icons-react';

export function ContactInformationForm() {
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+234');

  return (
    <Container
      style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}
    >
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
          style={{ textAlign: 'left', marginBottom: '1rem', marginTop: '1em' }}
        >
          Social media accounts
        </Text>
        <Grid>
          <Grid.Col>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconBrandFacebookFilled
                style={{ color: 'blue', marginRight: '0.5rem' }}
              />
              <TextInput
                iconColor="blue"
                iconPosition="left"
                placeholder="@username"
                value={facebook}
                onChange={(event) => setFacebook(event.currentTarget.value)}
                style={{ flex: 1, marginBottom: '1rem' }}
              />
            </div>
          </Grid.Col>
          <Grid.Col>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconBrandInstagram style={{ marginRight: '0.5rem' }} />
              <TextInput
                iconColor="purple"
                iconPosition="left"
                placeholder="@username"
                value={instagram}
                onChange={(event) => setInstagram(event.currentTarget.value)}
                style={{ flex: 1, marginBottom: '1rem' }}
              />
            </div>
          </Grid.Col>

          <Grid.Col>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconBrandTwitterFilled
                style={{ color: 'blue', marginRight: '0.5rem' }}
              />
              <TextInput
                iconPosition="left"
                value={twitter}
                placeholder="@username"
                onChange={(event) => setTwitter(event.currentTarget.value)}
                style={{ flex: 1, marginBottom: '1rem' }}
              />
            </div>
          </Grid.Col>
        </Grid>

        <Divider style={{ margin: '1rem 0' }} />

        <Text
          variant="h2"
          size="md"
          style={{ textAlign: 'left', marginBottom: '1rem', marginTop: '1em' }}
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
          value={phoneNumber}
          placeholder="Enter phone number"
          onChange={({ currentTarget: { value } }) => {
            if (!value.startsWith('+234')) {
              setPhoneNumber(`+234${value}`);
            } else {
              setPhoneNumber(value);
            }
          }}
          style={{ marginBottom: '1rem' }}
        />
        <Divider style={{ margin: '1rem 0' }} />
      </Paper>
    </Container>
  );
}
