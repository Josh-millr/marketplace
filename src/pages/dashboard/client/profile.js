import {
  TextInput,
  Text,
  Avatar,
  Stack,
  Group,
  ActionIcon,
  useMantineTheme,
  Box,
  Grid,
  Button,
  Flex,
} from "@mantine/core";
import { Plus, EditPencil } from "iconoir-react";
import { useForm } from "@mantine/form";

import { iconCreator } from "@/shared/utils/iconCreator";
import { PageContainer } from "@/shared/components/PageContainer";
import { DashboardPageHeader } from "@/shared/components/DashboardPageHeader";
import { DashboardSectionCardNew } from "@/shared/components/DashboardSectionCardNew";
import { ProfilePictureActionMenu } from "@/shared/components/ProfilePictureActionMenu";

function BuyerProfile(props) {
  const { colors } = useMantineTheme();

  const editIcon = iconCreator({ icon: EditPencil });

  return (
    <PageContainer.Marketplace>
      <DashboardPageHeader
        title="My Profile"
        descr="View and manage your account profile"
      />

      <DashboardSectionCardNew title="Basic Info">
        <Stack>
          {/* Profile Picture */}
          <Group spacing="xl">
            <Box pos="relative">
              <Avatar src="https://picsum.photos/200" size={64} radius={9999} />
              <ProfilePictureActionMenu>
                <ActionIcon
                  variant="filled"
                  size="sm"
                  radius={9999}
                  top={-20}
                  left={40}
                  pos="relative"
                >
                  {iconCreator({
                    icon: Plus,
                    colorOverride: colors.neutral[1],
                  })}
                </ActionIcon>
              </ProfilePictureActionMenu>
            </Box>
            <Stack spacing={0}>
              <Text className="label-sm" fw={"700!important"}>
                Profile Photo
              </Text>
              <Text className="label-sm" maw={320} my="auto">
                Max file size is 1MB, Minimum dimension: 330x200 and suitable
                file size are .jpg & .png
              </Text>
            </Stack>
          </Group>

          <Grid gutter="lg">
            {/* Firstname Input */}
            <Grid.Col span={12} md={6}>
              <Flex gap="md" align="end" w="100%">
                <TextInput
                  placeholder="Your name"
                  label="Firstname"
                  disabled
                  w="100%"
                />
                <Box pb={16}>
                  <ActionIcon variant="light" size="sm" pos="relative">
                    {editIcon}
                  </ActionIcon>
                </Box>
              </Flex>
            </Grid.Col>

            {/* Lastname Input */}
            <Grid.Col span={12} md={6}>
              <Flex gap="md" align="end" w="100%">
                <TextInput
                  placeholder="Your name"
                  label="Lastname"
                  disabled
                  w="100%"
                />
                <Box pb={16}>
                  <ActionIcon variant="light" size="sm" pos="relative">
                    {editIcon}
                  </ActionIcon>
                </Box>
              </Flex>
            </Grid.Col>

            {/* Gender Input */}
            <Grid.Col span={12} md={6}>
              <Flex gap="md" align="end" w="100%">
                <TextInput
                  placeholder="Your name"
                  label="Gender"
                  disabled
                  w="100%"
                />
                <Box pb={16}>
                  <ActionIcon variant="light" size="sm" pos="relative">
                    {editIcon}
                  </ActionIcon>
                </Box>
              </Flex>
            </Grid.Col>

            {/* Country Input */}
            <Grid.Col span={12} md={6}>
              <Flex gap="md" align="end" w="100%">
                <TextInput
                  placeholder="Your name"
                  label="Country"
                  disabled
                  w="100%"
                />
                <Box pb={16}>
                  <ActionIcon variant="light" size="sm" pos="relative">
                    {editIcon}
                  </ActionIcon>
                </Box>
              </Flex>
            </Grid.Col>

            {/* Email Address Input */}
            <Grid.Col span={12} md={6}>
              <Flex gap="md" align="end" w="100%">
                <TextInput
                  placeholder="Your name"
                  label="Email Address"
                  disabled
                  w="100%"
                />
                <Box pb={16}>
                  <ActionIcon variant="light" size="sm" pos="relative">
                    {editIcon}
                  </ActionIcon>
                </Box>
              </Flex>
            </Grid.Col>

            {/* Phone Number Input */}
            <Grid.Col span={12} md={6}>
              <Flex gap="md" align="end" w="100%">
                <TextInput
                  placeholder="Your name"
                  label="Phone Number"
                  disabled
                  w="100%"
                />
                <Box pb={16}>
                  <ActionIcon variant="light" size="sm" pos="relative">
                    {editIcon}
                  </ActionIcon>
                </Box>
              </Flex>
            </Grid.Col>

            <Grid.Col span={12}>
              <Button size="md">Update</Button>
            </Grid.Col>
          </Grid>

          {/* Add more contents.. */}
        </Stack>
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default BuyerProfile;
