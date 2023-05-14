import { useState, useMemo } from 'react';
import { Box, Flex, Text, Divider, ScrollArea } from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

import { MenuItem } from './MenuItem/MenuItem';
import { useStyles } from './style.DesktopScreenCategoryMenu';
import { SubCategoryList } from './SubCategoryList/SubCategoryList';

export function DesktopScreenCategoryMenu({ list }) { 
  // Updates the active label from `list` eg `Graphics design`
  const [activeCategory, setActiveCategory] = useState('');

  const { classes } = useStyles();

  const categoryLabels = useMemo(() => list.map(({ label }) => label), [list]);

  // Filter the acitve category from the initial list
  const activeCategoryCase = (category) => category.label === activeCategory;
  const activeCategoryObject = list.filter(activeCategoryCase);

  // Access the subCategories property of the filtered category
  const isActiveCategoryObjectFilled = activeCategoryObject.length > 0;
  const activeSubCategory = isActiveCategoryObjectFilled
    ? activeCategoryObject[0].subCategories
    : [];

  return (
    <nav className={classes.nav}>
      <ScrollArea offsetScrollbars scrollbarSize={6} style={{ width: '100vw' }}>
        <Box className={classes.wrapper}>
          <PageContainer layout="marketplace">
            <PageContainer.Marketplace>
              <Flex wrap="nowrap" gap="lg">
                <Text
                  py="lg"
                  color="neutral.6"
                  className={`label-md ${classes.label}`}
                >
                  {/* TODO: Dynamically add the category type label through props */}
                  Services Catalog
                </Text>

                <Flex component="ul">
                  {categoryLabels.map((label) => (
                    // Hovering on each menu item updates the `activeCategory`
                    // with the hovered category label as the active category
                    <MenuItem
                      key={label}
                      label={label}
                      activeCategory={activeCategory}
                      makeActive={setActiveCategory}
                    />
                  ))}
                </Flex>
              </Flex>
            </PageContainer.Marketplace>
          </PageContainer>
        </Box>
      </ScrollArea>

      {/* Sub category menu */}
      {activeCategory && <Divider />}

      {activeCategory && (
        <PageContainer layout="marketplace">
          <PageContainer.Marketplace>
            <SubCategoryList
              categoryList={activeSubCategory}
              activeCategory={activeCategory}
              keepCategoryActive={setActiveCategory}
            />
          </PageContainer.Marketplace>
        </PageContainer>
      )}
      {activeCategory && <Divider />}
    </nav>
  );
}
