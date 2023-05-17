/* eslint-disable operator-linebreak */
import { memo } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Search } from 'iconoir-react';
import {
  ActionIcon,
  Modal,
  ScrollArea,
  Center,
  TextInput,
  Select,
  Loader,
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
    criteriaList,
    setCriteria,
    query,
    storeQuery,
    loading,
  } = props;

  const { classes } = useStyles();

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className={classes.wrapper}>
      <ActionIcon size="lg" variant="light" onClick={open}>
        {iconCreator({ icon: Search })}
      </ActionIcon>

      <Modal.Root opened={opened} onClose={close} fullScreen>
        <Modal.Content px="sm">
          <Modal.Header br="sm">
            <Flex spacing="md" w="100%">
              <Stack spacing="sm" w="100%">
                <TextInput
                  w="100%"
                  size="md"
                  variant="filled"
                  radius={9999}
                  placeholder="Search"
                  defaultValue={query}
                  onChange={(event) => storeQuery(event.currentTarget.value)}
                  icon={iconCreator({ icon: Search, sizeOveride: 20 })}
                />
                <Select
                  size="md"
                  w="100%"
                  radius={9999}
                  value={criteria}
                  data={criteriaList}
                  onChange={setCriteria}
                />
              </Stack>
              <Modal.CloseButton size="xl" iconSize={24} />
            </Flex>
          </Modal.Header>

          <Modal.Body>
            <ScrollArea h="100vh" offsetScrollbars>
              {loading ? (
                <Center h={200} mx="auto">
                  <Loader size="sm" />
                </Center>
              ) : (
                <Stack spacing="lg" p="sm">
                  {criteria === 'category' &&
                    result.length > 1 &&
                    result.map(({ label, href, _id }) => (
                      <ListCard key={_id} label={label} href={href} />
                    ))}

                  {criteria === 'freelancer' &&
                    result.length > 1 &&
                    result.map(({ name, img, job, href, _id }) => (
                      <FreelancePreviewCard
                        key={_id}
                        name={name}
                        img={img}
                        job={job}
                        href={href}
                      />
                    ))}
                </Stack>
              )}
            </ScrollArea>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
});
