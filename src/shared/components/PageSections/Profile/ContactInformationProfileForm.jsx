import { useState } from 'react';
import { Container, Paper, TextInput, Text, Grid, Group } from '@mantine/core';

import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitterFilled,
} from '@tabler/icons-react';
import { useDispatch, useSelector } from 'react-redux';

export function ContactInformationProfileForm() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const social = user.social || [];
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [twitter, setTwitter] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('+234');

  return (
    <div>
      <Text
        variant="h2"
        size="md"
        style={{
          textAlign: 'left',
          marginBottom: '0.5rem',
          marginTop: '1em',
          fontWeight: 'bold',
        }}
      >
        Phone number
      </Text>
      <Text
        variant="h2"
        size="md"
        style={{ textAlign: 'left', marginBottom: '0.5rem' }}
      >
        We need your phone number to keep your account safe. We&apos;ll never
        share your phone number.
      </Text>
      <Grid>
        <Grid.Col>
          <TextInput
            value={user.phoneNumber}
            placeholder="Enter phone number"
            onChange={({ currentTarget: { value } }) => {
              if (!value.startsWith('+234')) {
                setPhoneNumber(`+234${value}`);
              } else {
                setPhoneNumber(value);
              }
            }}
            style={{ width: '50%', marginBottom: '1rem' }}
          />
        </Grid.Col>
      </Grid>

      <Group>
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
                value={social.facebook}
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
                value={social.instagram}
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
                value={social.twitter}
                placeholder="@username"
                onChange={(event) => setTwitter(event.currentTarget.value)}
                style={{ flex: 1, marginBottom: '1rem' }}
              />
            </div>
          </Grid.Col>
        </Grid>
      </Group>
    </div>
  );
}
