import { HiStar } from 'react-icons/hi';
import {
  Flex,
  Title,
  Text,
  Avatar,
  MediaQuery,
  Group,
  Center,
} from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';
import { calculateAverageRating } from '@/shared/utils/calculateAverageRating';

import { useStyles } from './style.FreelancerProfileDisplayBanner';

export function FreelancerProfileDisplayBanner(props) {
  const { name, img, role, rating, reviews } = props;
  const { classes, theme } = useStyles();

  return (
    <PageContainer layout="marketplace">
      <Flex
        className={classes.wrapper}
        align="center"
        direction={{ base: 'column', sm: 'row' }}
        justify={{ base: 'center', sm: 'flex-start' }}
        gap={{ base: 'lg', sm: 'xl' }}
      >
        <Avatar src={img} size={80} alt="profile avatar" radius={9999} />
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify={{ sm: 'center' }}
        >
          <Flex direction="column" align={{ base: 'center', sm: 'flex-start' }}>
            <Title className="h1" fw="500!important" tt="capitalize">
              {name}
            </Title>
            <Flex align="center" gap="md">
              <Text className="label-lg" color="neutral.3" tt="capitalize">
                {role}
              </Text>
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Group spacing="lg" mt="xs">
                  <Center inline>
                    <HiStar size={20} color={theme.colors.brandPrimary[6]} />
                    <Text className={`${classes.rating} label-sm`} ml={5}>
                      {`${calculateAverageRating(rating)} `}
                      <span className={classes.review}>
                        {`(${reviews} Review)`}
                      </span>
                    </Text>
                  </Center>
                </Group>
              </MediaQuery>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </PageContainer>
  );
}
