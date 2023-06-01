import { useState } from "react";
import {
  Paper,
  Grid,
  Stack,
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
            <Grid gutter="2xl" py="2xl">
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
                        style={{ display: "none" }}
                        onChange={handlePictureUpload}
                      />
                    </Button>
                  </div>
                </Stack>
              </Grid.Col>
            </Grid>

            <Stack spacing="2xl" w="100%">
              <Flex
                w="100%"
                gap={{ base: "2xl", sm: "lg" }}
                direction={{ base: "column", sm: "row" }}
              >
                {/* Firstname input */}
                <TextInput
                  w="100%"
                  disabled
                  required
                  label="First Name"
                  value={user.firstname}
                />

                {/* Lastname input */}
                <TextInput
                  w="100%"
                  disabled
                  required
                  label="Last Name"
                  value={user.lastname}
                />
              </Flex>

              <Divider />

              <Flex
                w="100%"
                gap={{ base: "2xl", sm: "lg" }}
                direction={{ base: "column", sm: "row" }}
              >
                {/* Gender input */}
                <Select
                  disabled
                  w="100%"
                  label="Gender"
                  placeholder="choose gender"
                  value={user.gender}
                  data={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />

                {/* Account type input */}
                <Select
                  w="100%"
                  disabled
                  label="Account Type"
                  placeholder="Select account type"
                  value={user.accounttype}
                  data={[
                    { value: "individual", label: "Individual" },
                    { value: "business", label: "Business" },
                  ]}
                />
              </Flex>

              <Divider />

              <Flex
                w="100%"
                gap={{ base: "2xl", sm: "lg" }}
                direction={{ base: "column", sm: "row" }}
              >
                {/* Email Address */}
                <TextInput
                  w="100%"
                  disabled
                  type="email"
                  label="Email"
                  required
                  value={user.email}
                />

                {/* Username input */}
                <TextInput
                  w="100%"
                  disabled
                  required
                  label="Username"
                  value={user.username}
                />
              </Flex>

              <Divider />

              <Flex
                w="100%"
                gap={{ base: "2xl", sm: "lg" }}
                direction={{ base: "column", sm: "row" }}
              >
                {/* Language list */}
                <Select
                  w="100%"
                  searchable
                  multiple
                  label="Select languages"
                  placeholder="Select languages"
                  // TODO: Fetch language list from language API
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
                    item.label
                      .toLowerCase()
                      .includes(value.toLowerCase().trim())
                  }
                />

                {/* Country */}
                <TextInput
                  disabled
                  required
                  w="100%"
                  label="Country"
                  value={user.location}
                />
              </Flex>
            </Stack>
          </Grid.Col>
        </Grid>
      </PageContainer.Marketplace>
    </PageContainer>
  );
}
