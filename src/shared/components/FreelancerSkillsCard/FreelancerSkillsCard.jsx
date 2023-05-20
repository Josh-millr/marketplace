import { Paper, Badge, Flex, Title, Stack, Divider } from '@mantine/core';

export function FreelancerSkillsCard({ skills }) {
  return (
    <Paper
      radius="xs"
      px={{ base: 'md', sm: 'lg' }}
      py={{ base: 'md', sm: '2xl' }}
      shadow="sm"
    >
      <Stack spacing="md">
        <Title className="sub-h1">My Skills</Title>

        <Divider />

        <Flex gap="sm" wrap="wrap">
          {skills.map((skill, index) => (
            <Badge size="lg" key={index} tt="capitalize">
              {skill}
            </Badge>
          ))}
        </Flex>
      </Stack>
    </Paper>
  );
}
