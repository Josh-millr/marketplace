import { Title, Text, Stack, Group, ActionIcon } from "@mantine/core";
import { Cancel } from "iconoir-react";

import { iconCreator } from "@/shared/utils/iconCreator";

export function CredentialCard(props) {
  const {
    title,
    issuer,
    issueDate,
    credentialId,
    credentialUrl,
    deleteCredential,
  } = props;

  const handleDelete = () => {
    deleteCredential(credentialId);
  };

  return (
    <Group position="apart" gap="xl">
      <Stack spacing="sm">
        <Title className="sub-h1">{title}</Title>
        <Text className="label-md" c="neutral.6">
          `${issuer} • ${issueDate}`
        </Text>
      </Stack>

      <ActionIcon onClick={handleDelete}>
        {iconCreator({ icon: Cancel })}
      </ActionIcon>
    </Group>
  );
}
