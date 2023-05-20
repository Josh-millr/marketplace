import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,
    margin: 'auto',
    [theme.fn.smallerThan('sm')]: { fontSize: rem(24) },
  },
  description: { maxWidth: 600, margin: 'auto', },
  card: { border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`, },
  cardTitle: {
    textAlign: 'center',
  },
  cardDescription: {
    maxWidth: 400,
    textAlign: 'center',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));
