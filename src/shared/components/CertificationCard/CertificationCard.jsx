import Link from 'next/link';
import { Text, Title, Group, Stack, Box, Divider } from '@mantine/core';

export function CertificationCard(props) {
  const { title, issuer, issueDate, credentialId, credentialUrl } = props;

  return (
    <Stack spacing="lg">
      <Stack spacing="sm">
        <Stack spacing="xs">
          <Title className="label-lg" fw={'700!important'}>
            {title}
          </Title>
          <Box maw={320}>
            <Link href={credentialUrl || '#'}>
              <Text className="label-md" td="underline" truncate>
                {credentialUrl}
              </Text>
            </Link>
          </Box>
        </Stack>

        <Group spacing="sm">
          <Text className="label-md" c="neutral.6" tt="capitalize">
            {issuer}
          </Text>
          <>*</>
          <Text className="label-md" c="neutral.6" tt="capitalize">
            {issueDate}
          </Text>
          <>*</>
          <Text className="label-md" c="neutral.6" tt="capitalize">
            {credentialId}
          </Text>
        </Group>
      </Stack>

      <Divider />
    </Stack>
  );
}
