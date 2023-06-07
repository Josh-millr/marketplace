import { useState, useContext, useEffect } from "react";
import { useForm, isNotEmpty } from "@mantine/form";
import {
  Grid,
  Flex,
  Text,
  Stack,
  Avatar,
  FileInput,
  Select,
  Button,
  Divider,
  TextInput,
  FileButton,
  MultiSelect,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { IconPhotoPlus } from "@tabler/icons-react";

import { getLanguageListApi } from "@/shared/services/getLanguageListApi";
import { FormDataContext } from "@/shared/providers/FormDataProvider";

import { FormSectionHeader } from "./Elements/FormSectionHeader";

const GENDER_SET = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const ACCOUNTTYPE_SET = [
  { value: "individual", label: "Individual" },
  { value: "business", label: "Business" },
];

export function PersonalInformationForm({ goNextStep }) {
  const [img, setImg] = useState(null);
  const [languageList, setLanguageList] = useState([]);

  const { user } = useSelector((state) => state.user);
  const { storeData } = useContext(FormDataContext);

  useEffect(() => {
    const getLanguages = async () => {
      const list = await getLanguageListApi();
      setLanguageList(list);
    };

    getLanguages();
  }, []);

  const form = useForm({
    initialValues: {
      languages: [],
      img: {},
    },

    validate: {
      languages: isNotEmpty("Select atleast one proficient language"),
    },
  });

  console.log("Form image values:", form.values);

  const handlePictureUpload = async (e) => {
    form.setValueField("img", target);

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImg(reader.result);

      console.log(reader.result);

      const base64Data = reader.result.split(",")[1]; // Extract base64-encoded string

      const blobData = base64ToBlob(base64Data, file.type);
      const formData = convertToFormData(blobData);

      form.setFieldValue("img", formData);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const submitForm = form.onSubmit(async (values) => {
    // TODO: Check if an image was uploaded and store it

    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    storeData(values);
    goNextStep();
  });

  return (
    <Grid gutterLg="xl">
      {/* Column 1 */}
      <Grid.Col span={12} md={5} orderMd={2}>
        <FormSectionHeader
          title="Personal Information"
          description="Tell us a bit about yourself. This information will appear on your
              public profile, so that potential buyers can get to know you
              better."
        />
      </Grid.Col>

      {/* Column 2 */}
      <Grid.Col span={12} md={7} orderMd={1} pr={{ base: 0, lg: "5xl" }}>
        <Grid gutter="2xl" py="2xl">
          <Grid.Col span={12} orderSm={2} sm="content">
            <Flex justify={{ base: "flex-start", sm: "flex-end" }} w="100%">
              <Avatar
                size={126}
                radius={9999}
                variant="filled"
                alt="Profile Picture"
                src={img || ""}
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

        <form onSubmit={submitForm}>
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
                data={GENDER_SET}
              />

              {/* Account type input */}
              <Select
                w="100%"
                disabled
                label="Account Type"
                placeholder="Select account type"
                value={user.accounttype}
                data={ACCOUNTTYPE_SET}
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
              <MultiSelect
                w="100%"
                multiple
                searchable
                creatable
                clearable
                withAsterisk
                data={languageList}
                label="Select languages"
                placeholder="Select languages"
                clearButtonProps={{ "aria-label": "Clear selection" }}
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => {
                  const queryInLowercase = query.toLowerCase();
                  const item = { value: queryInLowercase, label: query };
                  setLanguageList((current) => [...current, item]);
                  return item;
                }}
                {...form.getInputProps("languages")}
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

            <Flex gap="sm" direction={{ base: "column", sm: "row" }} w="100%">
              <Button variant="subtle" variant="outline" color="gray">
                Go Back
              </Button>
              <Button type="submit">Continue</Button>
            </Flex>
          </Stack>
        </form>
      </Grid.Col>
    </Grid>
  );
}
