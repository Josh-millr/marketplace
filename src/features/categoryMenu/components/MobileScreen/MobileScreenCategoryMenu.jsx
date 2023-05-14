import { memo } from 'react';
import { NavLink, Box, Group, Text } from '@mantine/core';
import {
  DesignPencil,
  EditPencil,
  MediaVideo,
  MediaVideoList,
  AlbumOpen,
  Code,
  CoinsSwap,
  AddCircle,
} from 'iconoir-react';
import { iconCreator } from '@/shared/utils/iconCreator';
import { useStyles } from './style.MobileScreenCategoryMenu';

// Extracted Sub-components
const CategoryNavLink = memo(({ label, icon, children }) => (
  <NavLink label={label} icon={icon}>
    {children}
  </NavLink>
));

const SubCategoryNavLink = memo(({ label, children }) => (
  <NavLink label={label} childrenOffset={28}>
    {children}
  </NavLink>
));

const NavItemNavLink = memo(({ label, className }) => (
  <NavLink label={label} className={className} />
));

const categoryListIcons = [
  DesignPencil,
  EditPencil,
  MediaVideo,
  MediaVideoList,
  AlbumOpen,
  Code,
  CoinsSwap,
  AddCircle,
];

export const MobileScreenCategoryMenu = memo(({ list = [] }) => {
  const { classes } = useStyles();
  const hasList = Array.isArray(list);

  return (
    <Box>
      <Group spacing="sm" p="md">
        <Text className={`label-md ${classes.categoryLabel}`}>
          All Category
        </Text>
      </Group>

      {/* Categories */}
      {hasList && list.map((category, categoryIndex) => (
          <CategoryNavLink
            key={categoryIndex}
            label={category.label}
            icon={iconCreator({
              icon: categoryListIcons[categoryIndex],
            })}
          >
            {/* Sub categories */}
            {category.subCategories.map((subCategory, subCategoryIndex) => (
              <SubCategoryNavLink
                key={subCategoryIndex}
                label={subCategory.label}
              >
                {/* Sub category items */}
                {subCategory.navigationItems.map((link, linkIndex) => (
                  <NavItemNavLink
                    key={linkIndex}
                    label={link.label}
                    className={classes.navItem}
                  />
                ))}
              </SubCategoryNavLink>
            ))}
          </CategoryNavLink>
        ))}
    </Box>
  );
});
