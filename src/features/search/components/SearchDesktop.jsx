/* eslint-disable operator-linebreak */
import Link from 'next/link';
import { forwardRef, memo, useState, useEffect } from 'react';
import { NavArrowRight, Search } from 'iconoir-react';
import {
  Flex,
  Menu,
  Loader,
  Center,
  Select,
  TextInput,
  ScrollArea,
} from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

import { useStyles } from '../styles/style.SearchDesktop';
import { FreelancePreviewCard } from './FreelancePreviewCard';

function ListItem({ label, href }) {
  return (
    <Menu.Item
      tt="capitalize"
      rightSection={iconCreator({ icon: NavArrowRight, sizeOveride: 16 })}
    >
      <Link href={href || '#'}>{label}</Link>
    </Menu.Item>
  );
}

// TODO: Add specific conditioning for `projectCategory` and `serviceCategory

export const SearchDesktop = memo((props) => {
  const { storeQuery, result, loading, criteria, criteriaList, setCriteria } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { classes } = useStyles();

  useEffect(() => storeQuery(searchQuery), [searchQuery]);

  return (
    <div className={classes.wrapper}>
      <Flex>
        <div style={{ position: 'relative' }}>
          <TextInput
            size="md"
            w={360}
            radius={9999}
            placeholder="Search"
            variant="filled"
            value={searchQuery}
            rightSectionWidth={120}
            onBlur={() => setShowMenu(false)}
            onMouseOver={() => setShowMenu(true)}
            icon={iconCreator({ icon: Search, sizeOveride: 16 })}
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
            rightSection={
              <Select
                radius={9999}
                w={120}
                value={criteria}
                data={criteriaList}
                onChange={setCriteria}
              />
            }
          />
          <div style={{ position: 'absolute', marginTop: 8, height: 200 }}>
            <Menu width={360} shadow="md" opened={showMenu}>
              <Menu.Dropdown h={250}>
                <ScrollArea h={240} type="always" offsetScrollbars>
                  {loading ? (
                    <Center h={200} mx="auto">
                      <Loader size="sm" />
                    </Center>
                  ) : (
                    <div>
                      {criteria === 'category' &&
                        result.length > 1 &&
                        result.map(({ label, href, _id }) => (
                          <ListItem key={_id} label={label} href={href} />
                        ))}

                      {criteria === 'freelancer' &&
                        result.length > 1 &&
                        result.map(({ name, img, job, href, _id }) => (
                          <Menu.Item key={_id}>
                            <FreelancePreviewCard
                              name={name}
                              img={img}
                              job={job}
                              href={href}
                            />
                          </Menu.Item>
                        ))}
                    </div>
                  )}
                </ScrollArea>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </Flex>
    </div>
  );
});
