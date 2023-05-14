/* eslint-disable no-underscore-dangle */
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

export function MobileScreenCategoryMenu({ list }) {
  const { classes } = useStyles();
  const hasList = Array.isArray(list);

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

  return (
    <Box>
      <Group spacing="sm" p="md">
        <Text className={`label-md ${classes.categoryLabel}`}>
          All Category
        </Text>
      </Group>

      {/* Categories */}
      {(hasList ? list : []).map((category, index) => (
        <NavLink
          key={category._id}
          label={category.label}
          icon={iconCreator({
            icon: categoryListIcons[index],
          })}
        >
          {/* Sub categories */}
          {category.subCategories.map((subCategory) => (
            <NavLink
              key={subCategory._id}
              label={subCategory.label}
              childrenOffset={28}
            >
              {/* Sub category items */}
              {subCategory.navigationItems.map((link) => (
                <NavLink
                  key={link._id}
                  label={link.label}
                  className={classes.navItem}
                />
              ))}
            </NavLink>
          ))}
        </NavLink>
      ))}
    </Box>
  );
}
