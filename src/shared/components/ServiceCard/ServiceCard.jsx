/* eslint-disable operator-linebreak */
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  Text,
  Title,
  Box,
  Stack,
  Group,
  Divider,
  Skeleton,
  Card,
  Avatar,
} from '@mantine/core';
import { HiStar } from 'react-icons/hi';

import { roundUpNumber } from '@/shared/utils/roundUpNumber';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { calculateAverageRating } from '@/shared/utils/calculateAverageRating';

import { useStyles } from './style.Card';
import { CustomSuspense } from '../CustomSuspense';

export const ServiceCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);
  const { classes, theme } = useStyles();

  const isDataPresent = Object.keys(data).length !== 0;

  const gallery = data?.gallery && data?.gallery[0];
  const link = data?.id ? `/service/${data?.id}` : '#';

  return (
    <Link
      href={link}
      onMouseEnter={() => isDataPresent && setHovered(true)}
      onMouseLeave={() => isDataPresent && setHovered(false)}
      style={{ width: '100%', height: 'fit-content' }}
    >
      <Card shadow={hovered ? 'sm' : ''} p="md" radius="md" withBorder>
        {/* Service Thumbnail Image */}

        {gallery ? (
          <Box className={classes.imgWrapper}>
            <Image
              fill
              className={classes.image}
              alt="Thumbnail of a freelance service"
              src={gallery}
              style={{ objectFit: 'cover' }}
            />
          </Box>
        ) : (
          <Box className={classes.imgWrapper}>
            <Skeleton height="100%" width="100%" radius="sm" />
          </Box>
        )}

        <Card.Section px="xl" py="md">
          <Stack spacing="sm">
            {/* Service Category & Title */}
            <Stack spacing="sm">
              <CustomSuspense
                fallback={<Skeleton height={12} width="50%" radius="xl" />}
                dependency={data?.category?.main}
              >
                <Title tt="capitalize" className="label-sm" color="neutral.6">
                  {data?.category?.main}
                </Title>
              </CustomSuspense>
              <CustomSuspense
                dependency={data?.title}
                fallback={
                  <>
                    <Stack spacing="sm">
                      <Skeleton height={12} width="100%" radius="xl" />
                      <Skeleton height={12} width="100%" radius="xl" />
                    </Stack>
                  </>
                }
              >
                <Text
                  lineClamp={2}
                  className={`${classes.title} ${
                    hovered && classes.titleHovered
                  } label-md`}
                >
                  {data?.title}
                </Text>
              </CustomSuspense>
            </Stack>

            {/* Service Rating & Comment */}

            <CustomSuspense
              dependency={data?.ratings}
              fallback={
                <Group spacing="xs">
                  <Skeleton height={12} width={12} radius="xl" />
                  <Skeleton height={12} width="70%" radius="xl" />
                </Group>
              }
            >
              <Group spacing="xs">
                <HiStar size={20} color={theme.colors.brandPrimary[6]} />
                <Text className={`${classes.rating} label-sm`}>
                  {`${data?.ratings && calculateAverageRating(data.ratings.rating)} `}
                  <span className={classes.review}>
                    {`(${
                      data?.totalComment && roundUpNumber(data.totalComment)
                    } Review)`}
                  </span>
                </Text>
              </Group>
            </CustomSuspense>
          </Stack>
        </Card.Section>

        <Divider />

        <Card.Section inheritPadding pt="md" pb="lg">
          <Group position="apart">
            {/* Service author Name & Avatar */}
            <Group spacing="sm">
              {data?.creator?.img ? (
                <Avatar
                  radius={9999}
                  size={35}
                  alt="user portrait"
                  src={data?.creator?.img}
                />
              ) : (
                <Skeleton height={35} width={35} radius={9999} />
              )}
              <CustomSuspense
                fallback={<Skeleton height={12} width={40} radius={9999} />}
                dependency={data?.creator?.name}
              >
                <Text className={`${classes.name} label-sm`} tt="capitalize">
                  {data?.creator?.name}
                </Text>
              </CustomSuspense>
            </Group>

            {/* Service Staring Price */}
            <Group spading="xs">
              <Text className="label-sm" color="neutral.6">
                Starting at
              </Text>
              <CustomSuspense
                dependency={data?.startingPrice}
                fallback={<Skeleton height={12} width={40} radius={9999} />}
              >
                <Text className={`${classes.price} label-md`}>
                  {data?.startingPrice &&
                    displayNumberInNaira(data?.startingPrice)}
                </Text>
              </CustomSuspense>
            </Group>
          </Group>
        </Card.Section>
      </Card>
    </Link>
  );
};
