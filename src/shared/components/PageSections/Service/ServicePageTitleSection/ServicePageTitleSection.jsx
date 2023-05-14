import { Stack, Breadcrumbs, Anchor, Title } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export function ServicePageTitleSection({ title }) {
  return (
    <Stack spacing="lg" maw={800}>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Title className="h1">{title}</Title>
    </Stack>
  );
}
