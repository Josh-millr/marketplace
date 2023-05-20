import { useState } from 'react';
import {
  Container,
  Paper,
  TextInput,
  Select,
  SimpleGrid,
  Divider,
  Button,
  Avatar,
  Text,
} from '@mantine/core';
import { IconPhotoPlus } from '@tabler/icons-react';

export function PersonalInformationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [accountType, setAccountType] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [userName, setUserName] = useState('');
  const [languages, setLanguages] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);

  const handlePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleLanguageChange = (value) => {
    setLanguages(value);
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center' }}>
      <Paper>
        <Text
          variant="h1"
          size="lg"
          style={{ textAlign: 'left', marginBottom: '1rem', marginTop: '2rem' }}
        >
          Personal Information
        </Text>
        <Text
          variant="h2"
          size="md"
          style={{ textAlign: 'left', marginBottom: '1rem' }}
        >
          Tell us a bit about yourself. This information will appear on your
          public profile, so that potential buyers can get to know you better.
        </Text>

        <Divider style={{ margin: '1rem 0' }} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
            marginBottom: '1rem',
          }}
        >
          <div>
            <Text
              variant="h1"
              size="lg"
              style={{ textAlign: 'left', marginBottom: '1rem' }}
            >
              Profile Picture
            </Text>
            <Text
              variant="h2"
              size="md"
              style={{ textAlign: 'left', marginBottom: '1rem' }}
            >
              Add a profile picture of yourself so customers will know exactly
              who they’ll be working with.
            </Text>
            <Button
              variant="filled"
              component="label"
              leftIcon={<IconPhotoPlus />}
              style={{
                marginRight: '1rem',
                backgroundColor: 'rgba(76, 175, 80, 0.5)',
                color: 'green',
              }}
            >
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handlePictureUpload}
                style={{ display: 'none' }}
              />
            </Button>
          </div>
          {profilePicture ? (
            <Avatar
              size={180}
              radius={180}
              mx="auto"
              src={profilePicture}
              alt="Profile Picture"
            />
          ) : (
            <div
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                backgroundColor: 'gray',
                marginRight: '1rem',
                marginLeft: '7rem',
              }}
            />
          )}
        </div>

        <Divider style={{ margin: '1rem 0' }} />

        <SimpleGrid
          cols={1}
          spacing="xl"
          mt={{ md: 50 }}
          // breakpoints={[{ minWidth: 'md', cols: 2 }]}
        >
          <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
            <TextInput
              label="First Name"
              required
              value={firstName}
              onChange={(event) => setFirstName(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
            />
            <TextInput
              label="Last Name"
              required
              value={lastName}
              onChange={(event) => setLastName(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
            />
          </SimpleGrid>

          <Divider style={{ margin: '1rem 0' }} />

          <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
            <Select
              label="Gender"
              placeholder="Select gender"
              data={['Male', 'Female', 'Other']}
              value={gender}
              onChange={(value) => setGender(value)}
              style={{ marginBottom: '1rem' }}
            />
            <Select
              label="Account Type"
              placeholder="Select account type"
              data={['Individual', 'Company']}
              value={accountType}
              onChange={(value) => setAccountType(value)}
              style={{ marginBottom: '1rem' }}
            />
          </SimpleGrid>

          <Divider style={{ margin: '1rem 0' }} />

          <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
            <TextInput
              type="email"
              label="Email"
              required
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
            />
            <TextInput
              label="Country"
              required
              value={country}
              onChange={(event) => setCountry(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
            />
          </SimpleGrid>

          <Divider style={{ margin: '1rem 0' }} />

          <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
            <TextInput
              label="Username"
              description=" Use 3 to 15 characters, letters, numbers, and underscores only,
            eg. ola_mike."
              required
              value={userName}
              onChange={(event) => setUserName(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
            />
            <TextInput
              label="Country"
              description="We’re currently rolling out a few countries, visit our country roll-out plan for more into"
              required
              value={country}
              onChange={(event) => setCountry(event.currentTarget.value)}
              style={{ marginBottom: '1rem' }}
            />
          </SimpleGrid>

          <Divider style={{ margin: '1rem 0' }} />
        </SimpleGrid>

        <SimpleGrid cols={1}>
          <Select
            searchable
            multiple
            label="Select languages"
            description="Use 3 to 15 characters, letters, numbers, and underscores only, eg. ola_mike"
            placeholder="Select languages"
            data={[
              'English',
              'Spanish',
              'French',
              'German',
              'Italian',
              'Japanese',
            ]}
            value={languages}
            onChange={handleLanguageChange}
            filter={(value, query) =>
              value && value.toLowerCase().includes(query.toLowerCase())
            }
          />
        </SimpleGrid>
        <Divider style={{ margin: '1rem 0' }} />
      </Paper>
    </Container>
  );
}
