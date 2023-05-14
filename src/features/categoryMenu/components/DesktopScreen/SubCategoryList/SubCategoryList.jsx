import { Grid, Box } from '@mantine/core';

import { LinkGroup } from '@/shared/components/LinkGroup';

import { useStyles } from './style.SubCategoryList';

export function SubCategoryList(props) {
  const { keepCategoryActive, categoryList, activeCategory } = props;
  const { classes } = useStyles();

  return (
    <Box className={`${classes.wrapper}`}>
      <Grid
        gutter="2xl"
        columns={12}
        component="div"
        onMouseLeave={() => keepCategoryActive('')}
        onMouseEnter={() => keepCategoryActive(activeCategory)}
        className={`${classes.subCategory}`}
      >
        {categoryList.map(({ label, navigationItems, _id }) => (
          <Grid.Col key={_id} span={2}>
            <LinkGroup label={label} links={navigationItems} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
}
