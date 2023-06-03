import { useState } from "react";
import { useForm, isNotEmpty } from "@mantine/form";
import { Flex, TextInput, Text, Grid, Stack } from "@mantine/core";

import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";

import { FormSectionHeader } from "./Elements/FormSectionHeader";

export function ContactInformationForm() {
  const form = useForm({
    initialValues: {
      contact: {
        phone: 0,
        social: {
          facebook: "",
          twitter: "",
          instagram: "",
        },
      },
    },
    validate: {
      contact: {
        phone: isNotEmpty("Contact cannot be empty"),
        social: {
          facebook: isNotEmpty("Facebook cannot be empty"),
          twitter: isNotEmpty("Twitter cannot be empty"),
          instagram: isNotEmpty("Instagram cannot be empty"),
        },
      },
    },
  });

  const submitForm = form.onSubmit(async (values) => {
    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    storeData(values);
    goNextStep();
  });

  return (
    <Grid gutterMd="xl" pt="2xl">
      {/* Column 1 */}
      <Grid.Col span={12} md={5} orderMd={2}>
        <FormSectionHeader
          title="Contact Information"
          description="This is your time to shine. Let potential buyers know what you do best
          and how you gained your skills, certifications and experience."
        />
      </Grid.Col>

      {/* Column 2 */}
      <Grid.Col span={12} md={7} orderMd={1} pr={{ base: 0, lg: "5xl" }}>
        <form onSubmit={submitForm}>
          <Stack spacing="2xl" w="100%">
            <Stack spacing="xl">
              {/* Facebook account input */}
              <Text className="h1">Social media accounts</Text>

              <Flex gap="lg">
                {/* TODO: Replace with icon from react-icon */}
                <IconBrandFacebookFilled />
                <TextInput
                  w="100%"
                  placeholder="@username"
                  {...form.getInputProps("contact.facebook")}
                />
              </Flex>

              {/* Twitter Account Input  */}
              <Flex gap="lg">
                <IconBrandTwitterFilled />
                <TextInput
                  w="100%"
                  placeholder="@twitter_username"
                  {...form.getInputProps("contact.twitter")}
                />
              </Flex>

              {/* Instagram Account Input  */}
              <Flex gap="lg">
                <IconBrandInstagram />
                <TextInput
                  w="100%"
                  placeholder="@instagram_username"
                  {...form.getInputProps("contact.instagram")}
                />
              </Flex>
            </Stack>

            <TextInput
              w="100%"
              title="Phone number"
              description="We need your phone number to keep your account safe. We'll
              never share your phone number."
              placeholder="Enter phone number"
              {...form.getInputProps("contact.phone")}
            />
          </Stack>
        </form>
      </Grid.Col>
    </Grid>
  );
}
