import { Stack, Text, Accordion } from '@mantine/core';

export function ServiceFaqSection({ faq }) {
  return (
    <Stack spacing="xl" py="2xl">
      <Text className="sub-h1">Frequently asked questions</Text>

      <Accordion defaultValue={faq[0].value}>
        {faq.map((item, index) => (
          <Accordion.Item key={index} value={item.title}>
            <Accordion.Control>{item.title}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Stack>
  );
}
