import Image from 'next/image';
import { useRouter } from 'next/router';
import Capitalize from 'lodash/capitalize';
import UpperCase from 'lodash/upperCase';
import { ArrowTr } from 'iconoir-react';
import { Title, Text, Button, Grid, Stack, Flex } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';
import { pageNotFound } from '@/shared/constants/feedbackMessage';
import { PageContainer } from '@/shared/components/PageContainer';

import { LogoHeader } from '../LogoHeader/LogoHeader';
import { useStyles } from './style.Error404';

export function Error404({ showHeading }) {
  const { classes, theme } = useStyles();

  const router = useRouter();

  return (
    <div>
      {showHeading && <LogoHeader />}
      <PageContainer layout="main">
        <PageContainer.Main>
          <Grid mt={{ base: '3xl', sm: 124 }} w="100%">
            <Grid.Col span={12} sm={6}>
              <Flex
                justify={{ base: 'flex-start', sm: 'center' }}
                align="center"
                h="100%"
              >
                <Image
                  height={200}
                  width={200}
                  src="/illustration/SVG/illustration-404-Error.svg"
                  alt="error 404 illustration showing disconnection"
                />
              </Flex>
            </Grid.Col>
            <Grid.Col span={12} sm={6}>
              <Flex align={{ base: 'flex-start', sm: 'center' }} h="100%">
                <Stack spacing="2xl">
                  <Stack spacing="md">
                    <Stack spacing="xs">
                      <Text className="label-md">{UpperCase('Error 404')}</Text>
                      <Title className="h2">
                        {Capitalize(pageNotFound.statement)}
                      </Title>
                    </Stack>
                    <Text className="subtitle-sm">
                      {pageNotFound.resolution}
                    </Text>
                  </Stack>
                  <div className={classes.button_wrapper}>
                    <Stack spacing="md">
                      <Button
                        rightIcon={iconCreator({
                          icon: ArrowTr,
                          colorOveride: theme.colors.neutral[1],
                        })}
                        onClick={() => router.push('/')}
                      >
                        Go back to homepage
                      </Button>
                    </Stack>
                  </div>
                </Stack>
              </Flex>
            </Grid.Col>
          </Grid>
        </PageContainer.Main>
      </PageContainer>
    </div>
  );
}
