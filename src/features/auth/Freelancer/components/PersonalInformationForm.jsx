import { useState } from "react";
import {
  Paper,
  TextInput,
  Select,
  SimpleGrid,
  Divider,
  Button,
  Avatar,
  Text,
} from "@mantine/core";
import { IconPhotoPlus } from "@tabler/icons-react";
import { useSelector } from "react-redux";

import { PageContainer } from "@/shared/components/PageContainer";

export function PersonalInformationForm() {
  const { user } = useSelector((state) => state.user);

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

  // const handleLanguageChange = (value) => {
  //   setLanguages(value);
  // };

  const handleLanguageChange = (newLanguages) => {
    setLanguages(newLanguages);
  };

  // const handleRemoveLanguage = (index) => {
  //   const updatedLanguages = [...languages];
  //   updatedLanguages.splice(index, 1);
  //   setLanguages(updatedLanguages);
  // };

  return (
    <PageContainer layout="marketplace">
      <PageContainer.Marketplace>
        <Paper>
          <Text
            variant="h1"
            size="lg"
            style={{
              textAlign: "left",
              marginBottom: "1rem",
              marginTop: "2rem",
            }}
          >
            Personal Information
          </Text>
          <Text
            variant="h2"
            size="md"
            style={{ textAlign: "left", marginBottom: "1rem" }}
          >
            Tell us a bit about yourself. This information will appear on your
            public profile, so that potential buyers can get to know you better.
          </Text>

          <Divider style={{ margin: "1rem 0" }} />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            <div>
              <Text
                variant="h1"
                size="lg"
                style={{ textAlign: "left", marginBottom: "1rem" }}
              >
                Profile Picture
              </Text>
              <Text
                variant="h2"
                size="md"
                style={{ textAlign: "left", marginBottom: "1rem" }}
              >
                Add a profile picture of yourself so customers will know exactly
                who they’ll be working with.
              </Text>
              <Button
                variant="filled"
                component="label"
                leftIcon={<IconPhotoPlus />}
                style={{
                  marginRight: "1rem",
                  backgroundColor: "rgba(76, 175, 80, 0.5)",
                  color: "green",
                }}
              >
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePictureUpload}
                  style={{ display: "none" }}
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
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  backgroundColor: "gray",
                  marginRight: "1rem",
                  marginLeft: "7rem",
                }}
              />
            )}
          </div>

          <Divider style={{ margin: "1rem 0" }} />

          <SimpleGrid
            cols={1}
            spacing="xl"
            mt={{ md: 50 }}
            // breakpoints={[{ minWidth: 'md', cols: 2 }]}
          >
            <SimpleGrid cols={1} breakpoints={[{ minWidth: "md", cols: 2 }]}>
              <TextInput
                label="First Name"
                required
                value={user.firstname}
                style={{ marginBottom: "1rem" }}
              />
              <TextInput
                label="Last Name"
                required
                value={user.lastname}
                style={{ marginBottom: "1rem" }}
              />
            </SimpleGrid>

            <Divider style={{ margin: "1rem 0" }} />

            <SimpleGrid cols={1} breakpoints={[{ minWidth: "md", cols: 2 }]}>
              <Select
                label="Gender"
                placeholder="choose gender"
                data={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
                value={user.gender}
                style={{ marginBottom: "1rem" }}
              />
              <Select
                label="Account Type"
                placeholder="Select account type"
                data={[
                  { value: "individual", label: "Individual" },
                  { value: "business", label: "Business" },
                ]}
                value={user.accounttype}
                style={{ marginBottom: "1rem" }}
              />
            </SimpleGrid>

            <Divider style={{ margin: "1rem 0" }} />

            <SimpleGrid cols={1} breakpoints={[{ minWidth: "md", cols: 2 }]}>
              <TextInput
                type="email"
                label="Email"
                required
                value={user.email}
                style={{ marginBottom: "1rem" }}
              />
              <TextInput
                label="Country"
                required
                value={user.location}
                style={{ marginBottom: "1rem" }}
              />
            </SimpleGrid>

            <Divider style={{ margin: "1rem 0" }} />

            <SimpleGrid cols={1} breakpoints={[{ minWidth: "md", cols: 2 }]}>
              <TextInput
                label="Username"
                description=" Use 3 to 15 characters, letters, numbers, and underscores only,
            eg. ola_mike."
                required
                value={user.username}
                style={{ marginBottom: "1rem" }}
              />
              <TextInput
                label="Country"
                description="We’re currently rolling out a few countries, visit our country roll-out plan for more into"
                required
                value={user.location}
                style={{ marginBottom: "1rem" }}
              />
            </SimpleGrid>

            <Divider style={{ margin: "1rem 0" }} />
          </SimpleGrid>

          <SimpleGrid cols={1}>
            <Select
              searchable
              multiple
              label="Select languages"
              description="Use 3 to 15 characters, letters, numbers, and underscores only, eg. ola_mike"
              placeholder="Select languages"
              data={[
                { value: "english", label: "English" },
                { value: "spanish", label: "Spanish" },
                { value: "french", label: "French" },
                { value: "german", label: "German" },
                { value: "italian", label: "Italian" },
                { value: "japanese", label: "Japanese" },
              ]}
              value={languages}
              onChange={handleLanguageChange}
              filter={(value, item) =>
                item.label.toLowerCase().includes(value.toLowerCase().trim())
              }
            />
          </SimpleGrid>
          <Divider style={{ margin: "1rem 0" }} />
        </Paper>
      </PageContainer.Marketplace>
    </PageContainer>
  );
}
