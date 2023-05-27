import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Group,
  Text,
  Avatar,
  Divider,
  Button,
  Select,
  TextInput,
  SimpleGrid,
} from '@mantine/core';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { IconCirclePlus } from '@tabler/icons-react';

export function PersonalInformationProfileFoem() {
  const dispatch = useDispatch();
  const [languages, setLanguages] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [profilePicture, setProfilePicture] = useState(null);
  const handleLanguageChange = (newLanguages) => {
    setLanguages(newLanguages);
  };

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

  return (
    <>
      <Group
        style={{
          alignItems: 'center',
          marginLeft: '1rem',
          marginRight: '1rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            {profilePicture ? (
              <Avatar
                size={180}
                radius="xl"
                src={useer.profilePicture}
                alt="Profile Picture"
              />
            ) : (
              <div
                style={{
                  width: '180px',
                  height: '180px',
                  borderRadius: '50%',
                  backgroundColor: 'gray',
                }}
              />
            )}
            <Button
              variant="Subtle"
              style={{
                position: 'absolute',
                bottom: '8px',
                right: '2px',
              }}
            >
              <IconCirclePlus size={30} />
              <input
                type="file"
                accept="image/*"
                onChange={handlePictureUpload}
                style={{ display: 'none' }}
              />
            </Button>
          </div>
          <div style={{ marginLeft: '1rem' }}>
            <Text variant="h4" style={{ marginBottom: '0.5rem' }}>
              Profile Picture
            </Text>
            <Text variant="body2" style={{ marginBottom: '1rem' }}>
              Max file size is 1MB, Minimum dimension: 330x200 and suitable file
              size are .jpg & .png
            </Text>
          </div>
        </div>
      </Group>

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
            value={user.firstname}
            style={{ marginBottom: '1rem' }}
          />
          <TextInput
            label="Last Name"
            required
            value={user.lastname}
            style={{ marginBottom: '1rem' }}
          />
        </SimpleGrid>

        <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
          <Select
            label="Gender"
            placeholder="choose gender"
            data={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
            value={user.gender}
            style={{ marginBottom: '1rem' }}
            disabled
          />
          <Select
            label="Account Type"
            placeholder="Select account type"
            data={[
              { value: 'individual', label: 'Individual' },
              { value: 'business', label: 'Business' },
            ]}
            value={user.accounttype}
            style={{ marginBottom: '1rem' }}
          />
        </SimpleGrid>

        <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
          <TextInput
            label="Username"
            required
            value={user.username}
            style={{ marginBottom: '1rem' }}
            disabled
          />
          <TextInput
            type="email"
            label="Email Address"
            required
            value={user.email}
            style={{ marginBottom: '1rem' }}
          />
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid cols={1} breakpoints={[{ minWidth: 'md', cols: 2 }]}>
        <Select
          searchable
          multiple
          label="Select languages"
          placeholder="Select languages"
          data={[
            { value: 'english', label: 'English' },
            { value: 'spanish', label: 'Spanish' },
            { value: 'french', label: 'French' },
            { value: 'german', label: 'German' },
            { value: 'italian', label: 'Italian' },
            { value: 'japanese', label: 'Japanese' },
          ]}
          value={languages}
          onChange={handleLanguageChange}
          filter={(value, item) =>
            item.label.toLowerCase().includes(value.toLowerCase().trim())
          }
        />
        <TextInput
          label="Country"
          required
          value={user.location}
          style={{ marginBottom: '1rem' }}
        />
      </SimpleGrid>
    </>
  );
}
