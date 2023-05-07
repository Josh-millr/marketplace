import { HiStar } from 'react-icons/hi';
import Capitalize from 'lodash/capitalize';
import toNumber from 'lodash/toNumber';
import { Map, Calendar } from 'iconoir-react';
import {
  Flex,
  Title,
  Text,
  Avatar,
  MediaQuery,
  Group,
  Center,
} from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';
import { PageContainer } from '@/shared/components/PageContainer';

import { useStyles } from './style.HomepageSellerProfileBannerSection';

export function HomepageSellerProfileBannerSection(props) {
  const { name, img, role, rating, comments, location, created } = props;
  const { classes, theme } = useStyles();

  const formattedComments = toNumber(comments).toLocaleString();

  return (
    <PageContainer layout="marketplace">
      <Flex
        className={classes.wrapper}
        align="center"
        direction={{ base: 'column', sm: 'row' }}
        justify={{ base: 'center', sm: 'flex-start' }}
        gap={{ base: 'lg', sm: 'xl' }}
      >
        <Avatar src={img} size={64} alt="profile avatar" radius={9999} />
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify={{ sm: 'center' }}
        >
          <Flex direction="column" align={{ base: 'center', sm: 'flex-start' }}>
            <Title className="label-lg" fw="500!important">
              {Capitalize(name)}
            </Title>
            <Text className="label-sm" color="neutral.6">
              {Capitalize(role)}
            </Text>
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Group spacing="lg" mt='xs'>
                <Center inline>
                  <HiStar size={20} color={theme.colors.brandPrimary[6]} />
                  <Text className={`${classes.rating} label-sm`} ml={5}>
                    {`${rating} `}
                    <span className={classes.review}>
                      {`(${formattedComments} Review)`}
                    </span>
                  </Text>
                </Center>

                <Center inline>
                  {iconCreator({ icon: Map, sizeOveride: 16 })}
                  <Text className="label-md" ml={5}>
                    {location}
                  </Text>
                </Center>

                <Center inline>
                  {iconCreator({ icon: Calendar, sizeOveride: 16 })}
                  <Text className="label-md" ml={5}>
                    Member since {created}
                  </Text>
                </Center>
              </Group>
            </MediaQuery>
          </Flex>
        </Flex>
      </Flex>
    </PageContainer>
  );
}
