import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "@mantine/form";
import { Flex, TextInput, Text, Grid, Stack, Button } from "@mantine/core";
import { Instagram, Twitter, Facebook } from "iconoir-react";

import { userActions } from "@/state/user/userReducer";
import { FormDataContext } from "@/shared/providers/FormDataProvider";
import { registerUserAsFreelancerApi } from "@/shared/services/registerUserAsFreelancerApi";

import { iconCreator } from "@/shared/utils/iconCreator";
import { FormSectionHeader } from "./Elements/FormSectionHeader";

export function ContactInformationForm({ goNextStep, goPrevStep }) {
  const { getData, getAllData } = useContext(FormDataContext);

  const form = useForm({
    initialValues: {
      contact: {
        phone: "(234)-",
        social: {
          facebook: "",
          twitter: "",
          instagram: "",
        },
      },
    },
  });

  const submitForm = form.onSubmit(async (values) => {
    console.log("Submitting...");
    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    const contactPrev = getData(["contact"]);
    const contactUpdated = { ...contactPrev, ...values.contact };

    const allFormData = getAllData();

    console.log("This is the credentials ill be submitting:", {
      ...allFormData,
      contact: contactUpdated,
    });

    try {
      const response = await registerUserAsFreelancerApi({
        ...allFormData,
        contact: contactUpdated,
      });

      // Update the store with the user freelanec data

      // Show a success notification

      // Push the user to the freelancer marketplace
    } catch (error) {
      console.log("There was an error!");
    }
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
              <Text className="sub-h1">Social media accounts</Text>

              <Flex gap="lg">
                {iconCreator({ icon: Facebook })}
                <TextInput
                  w="100%"
                  placeholder="@username"
                  {...form.getInputProps("contact.social.facebook")}
                />
              </Flex>

              {/* Twitter Account Input  */}
              <Flex gap="lg">
                {iconCreator({ icon: Twitter })}
                <TextInput
                  w="100%"
                  placeholder="@twitter_username"
                  {...form.getInputProps("contact.social.twitter")}
                />
              </Flex>

              {/* Instagram Account Input  */}
              <Flex gap="lg">
                {iconCreator({ icon: Instagram })}
                <TextInput
                  w="100%"
                  placeholder="@instagram_username"
                  {...form.getInputProps("contact.social.instagram")}
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

            <Flex gap="sm" direction={{ base: "column", sm: "row" }} w="100%">
              <Button variant="outline" color="gray" onClick={goPrevStep}>
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
