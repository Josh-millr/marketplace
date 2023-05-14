import { memo } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Search, ArrowLeft } from 'iconoir-react';
import {
  ActionIcon,
  Modal,
  TextInput,
  Select,
  Box,
  Flex,
  Stack,
} from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

import { ListCard } from './ListCard';
import { useStyles } from '../styles/style.SearchMobile';
import { FreelancePreviewCard } from './FreelancePreviewCard';

export const SearchMobile = memo((props) => {
  const {
    result,
    criteria,
    criterias,
    setCriteria,
    searchQuery,
    setSearchQuery,
  } = props;

  const { classes } = useStyles();

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={classes.wrapper}>
      <ActionIcon size="lg" variant="light" onClick={open}>
        {iconCreator({ icon: Search })}
      </ActionIcon>

      {opened && (
        <Modal fullScreen opened={opened} withCloseButton={false}>
          <Flex gap="sm" justify="center" align="center">
            <ActionIcon onClick={close}>
              {iconCreator({ icon: ArrowLeft })}
            </ActionIcon>

            <TextInput
              w="100%"
              size="md"
              placeholder="Search"
              defaultValue={searchQuery}
              onChange={(event) => setSearchQuery(event.currentTarget.value)}
              icon={iconCreator({ icon: Search, sizeOveride: 16 })}
            />

            <Select
              size="md"
              w="50%"
              value={criteria}
              data={criterias}
              onChange={setCriteria}
            />
          </Flex>

          {/* Search result goes here */}
          <Box>
            <Stack spacing="lg" mt="2xl">
              {(criteria === 'category' ? result : []).map(
                ({ name, link }, index) => (
                  <ListCard key={index} name={name} link={link} />
                )
              )}

              {(criteria === 'freelancer' ? result : []).map(
                ({ name, img, job, link }, index) => (
                  <FreelancePreviewCard
                    key={index}
                    name={name}
                    img={img}
                    job={job}
                    link={link}
                  />
                )
              )}
            </Stack>
          </Box>
        </Modal>
      )}
    </div>
  );
});
