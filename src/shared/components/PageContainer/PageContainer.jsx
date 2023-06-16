import { Container } from '@mantine/core';

export function PageContainer({ layout, children }) {
  let maxPageWidth;

  switch (layout) {
    case 'main':
      maxPageWidth = 'lg';
      break;

    case 'marketplace':
      maxPageWidth = 1280;
      break;

    default:
      maxPageWidth = '100%';
      break;
  }
  return (
    <Container p={0} size={maxPageWidth} w="100%">
      {children}
    </Container>
  );
}

PageContainer.Main = function Main({ children }) {
  return (
    <Container fluid m={0} px={{ base: 'xl', md: '3xl' }}>
      {children}
    </Container>
  );
};

PageContainer.Auth = function Auth({ children }) {
  return (
    <Container fluid m={0} px={{ base: 'xl', md: '3xl' }}>
      {children}
    </Container>
  );
};

PageContainer.Marketplace = function Marketplace({ children }) {
  return (
    <Container fluid m={0} px={{ base: 'xl', md: '2xl' }}>
      {children}
    </Container>
  );
};

PageContainer.Dashboard = function Dashboard({ children }) {
  return (
    <Container
      fluid
      m={0}
      px={{ base: 'xl', md: '3xl' }}
      py={{ base: 'xl', md: '3xl' }}
    >
      {children}
    </Container>
  );
};
