import { forwardRef, memo, useState } from 'react';
import { Search } from 'iconoir-react';
import { Select, Flex, TextInput, Menu } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

import { ListCard } from './ListCard';
import { useStyles } from '../styles/style.SearchDesktop';
import { FreelancePreviewCard } from './FreelancePreviewCard';

export const SearchDesktop = memo((props) => {
  const {
    query,
    storeQuery,
    result,
    loading,
    criteria,
    criteriaList,
    setCriteria,
  } = props;
  const [showMenu, setShowMenu] = useState(true);

  const { classes } = useStyles();

  let itemCard = <div></div>;

  if (criteria === 'freelancer' && result.length > 1) {
    itemCard = forwardRef(({ name, img, job, href, _id, ...others }, ref) => (
      <div ref={ref} key={_id} {...others}>
        <FreelancePreviewCard name={name} img={img} job={job} href={href} />
      </div>
    ));
  }

  // TODO: Add specific conditioning for `projectCategory` and `serviceCategory
  if (criteria === 'category' && result.length > 1) {
    itemCard = forwardRef(({ name, href, _id, ...others }, ref) => (
      <div ref={ref} key={_id} {...others}>
        <ListCard label={name} href={href} />
      </div>
    ));
  }

  return (
    <div className={classes.wrapper}>
      <Flex>
        <div style={{ position: 'relative' }}>
          <TextInput
            size="md"
            radius={9999}
            variant="filled"
            defaultValue={query}
            rightSectionWidth={120}
            icon={iconCreator({ icon: Search, sizeOveride: 16 })}
            onChange={(event) => storeQuery(event.currentTarget.value)}
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
          <div style={{ position: 'absolute' }}>
            {true && (
              <Menu width={200} shadow="md">
                Mantine website
              </Menu>
            )}
          </div>
        </div>
        {/* Add dropdown component */}
        {/* <Select
          w={320}
          placeholder="Search"
          searchable
          variant="filled"
          radius={9999}
          itemComponent={itemCard}
          maxDropdownHeight={320}
          defaultValue={query}
          onSearchChange={storeQuery}
          nothingFound="Nothing Found"
          data={result}
          icon={iconCreator({ icon: Search, sizeOveride: 16 })}
          rightSection={
            <Select
              radius={9999}
              w={120}
              value={criteria}
              data={criteriaList}
              onChange={setCriteria}
            />
          }
          rightSectionWidth={120}
          filter={() => true}
        /> */}
      </Flex>
    </div>
  );
});
