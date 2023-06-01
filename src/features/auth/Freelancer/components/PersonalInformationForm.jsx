import { useState } from "react";
import {
  Paper,
  Grid,
  Stack,
  FileInput,
  Flex,
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

import { useStyles } from "../styles/style.PersonalInformationForm";

export function PersonalInformationForm() {
  const { user } = useSelector((state) => state.user);

  const { classes } = useStyles();

  const [languages, setLanguages] = useState([]);
  const [profilePicture, setProfilePicture] = useState(null);

  // This function is called by the upload button
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

  <Paper>
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
  </Paper>;

  return (
    <PageContainer layout="marketplace">
      <PageContainer.Marketplace>
        <Grid>
          {/* Column 1 */}
          <Grid.Col span={12} md={5} orderMd={2}>
            <div className={classes.pageHeadingWrapper}>
              <Stack spacing="lg" py="2xl">
                <Text className="h1">Personal Information</Text>
                <Text className="body-md" c="neutral.6">
                  Tell us a bit about yourself. This information will appear on
                  your public profile, so that potential buyers can get to know
                  you better.
                </Text>
              </Stack>
            </div>
          </Grid.Col>

          {/* Column 2 */}
          <Grid.Col span={12} md={7} orderMd={1}>
            <Grid gutter="2xl">
              <Grid.Col span={12} orderSm={2} sm="content">
                <Flex justify={{ base: "flex-start", sm: "flex-end" }} w="100%">
                  <Avatar
                    size={126}
                    radius={9999}
                    variant="filled"
                    alt="Profile Picture"
                    src={profilePicture || ""}
                  />
                </Flex>
              </Grid.Col>

              <Grid.Col span={12} orderSm={1} sm="auto">
                <Stack spacing="lg">
                  <Stack spacing="xs">
                    <Text className="label-lg" fw={"500!important"}>
                      Profile Picture
                    </Text>
                    <Text className="body-sm" c="neutral.6">
                      Add a profile picture of yourself so customers will know
                      exactly who they’ll be working with.
                    </Text>
                  </Stack>
                  <div>
                    <Button component="label" leftIcon={<IconPhotoPlus />}>
                      Upload Photo
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePictureUpload}
                        style={{ display: "none" }}
                      />
                    </Button>
                  </div>
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </PageContainer.Marketplace>
    </PageContainer>
  );
}
