import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  platformBenefitContainer: {
    width: '100%',
    backgroundColor: theme.colors.barbarianFlesh[1],
    paddingTop: theme.spacing['6xl'],
    paddingBottom: theme.spacing['6xl'],

    [theme.fn.largerThan('md')]: {
      paddingTop: theme.spacing['3xl'],
      paddingBottom: theme.spacing['3xl'],
    },
  },

  icon: {
    height: '24px',
    width: '24px',
    color: theme.colors.neutral[10],
  },

  contentSection: {
    width: '100%',
    margin: 'auto',
  },

  sectionSummany: {
    position: 'relative',
    height: 'fit-content',
  },

  imageWrapper: {
    position: 'relative',
    marginTop: '80px',

    [theme.fn.largerThan('md')]: {
      marginTop: '0px',
    },
  },

  imageContainer: {
    width: '100%',
    height: '448px',
    position: 'relative',
  },

  pointSummaryWrapper: {
    position: 'absolute',
    width: '100%',
    marginTop: '-80px',

    [theme.fn.largerThan('md')]: {
      height: '100%',
      marginTop: '0px',
    },
  },

  pointSummaryContainer: {
    position: 'relative',
    zIndex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',

    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    paddingLeft: theme.spacing['2xl'],
    paddingRight: theme.spacing['2xl'],
    borderRadius: theme.radius.sm,
    color: theme.colors.neutral[1],
    backgroundColor: theme.colors.brandPrimary[10],
    width: 'fit-content',

    [theme.fn.largerThan('md')]: {
      padding: theme.spacing['2xl'],
      marginLeft: '0px',
      marginRight: '0px',
      marginTop: 'auto',
      marginBottom: 'auto',
      top: '108px',
      left: '-100px',
    },
  },
}));
