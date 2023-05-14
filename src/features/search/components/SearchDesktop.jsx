import { forwardRef } from 'react';
import { Search } from 'iconoir-react';
import { Select, Flex } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

import { ListCard } from './ListCard';
import { useStyles } from '../styles/style.SearchDesktop';
import { FreelancePreviewCard } from './FreelancePreviewCard';

export function SearchDesktop(props) {
  const {
    searchQuery,
    setSearchQuery,
    result,
    setCriteria,
    criterias,
    criteria,
  } = props;

  const { classes } = useStyles();

  let itemCard;

  if (criteria === 'freelancer') {
    itemCard = forwardRef(({ index, name, img, job, link, ...others }, ref) => (
      <div ref={ref} {...others}>
        <FreelancePreviewCard name={name} img={img} job={job} link={link} />
      </div>
    ));
  }

  if (criteria === 'project' || criteria === 'service') {
    itemCard = forwardRef(({ index, name, link, ...others }, ref) => (
      <div ref={ref} {...others}>
        <ListCard name={name} link={link} />
      </div>
    ));
  }

  return (
    <div className={classes.wrapper}>
      <Flex>
        <Select
          placeholder="Search"
          searchable
          mr="lg"
          itemComponent={itemCard}
          maxDropdownHeight={400}
          defaultValue={searchQuery}
          onSearchChange={setSearchQuery}
          nothingFound="Nothing Found"
          data={result}
          icon={iconCreator({ icon: Search, sizeOveride: 16 })}
          rightSection={
            <Select
              w={100}
              value={criteria}
              data={criterias}
              onChange={setCriteria}
            />
          }
          rightSectionWidth={100}
          filter={() => true}
        />
      </Flex>
    </div>
  );
}
