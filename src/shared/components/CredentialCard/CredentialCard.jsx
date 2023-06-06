import Link from "next/link";
import { Title, Text, Stack, Flex, ActionIcon } from "@mantine/core";
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
    <Link href={credentialUrl || "#"}>
      <Flex position="apart" gap="xl" w='100%'>
        <Stack spacing="sm">
          <Title className="sub-h1" tt="capitalize">
            {title}
          </Title>
          <Text className="label-md" c="neutral.6">
            {`${issuer} • ${issueDate}`}
          </Text>
        </Stack>

        <ActionIcon onClick={handleDelete}>
          {iconCreator({ icon: Cancel })}
        </ActionIcon>
      </Flex>
    </Link>
  );
}
