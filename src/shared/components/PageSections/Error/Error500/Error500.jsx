/* eslint-disable no-restricted-globals */
import Image from 'next/image';
import { useRouter } from 'next/router';
import Capitalize from 'lodash/capitalize';
import UpperCase from 'lodash/upperCase';
import { ArrowTl } from 'iconoir-react';
import { Title, Text, Button, Grid, Stack, Flex } from '@mantine/core';

import { useStyles } from './style.Error500';
import { LogoHeader } from '../LogoHeader/LogoHeader';
import { iconCreator } from '@/shared/utils/iconCreator';
import { serverDown } from '@/shared/constants/feedbackMessage';
import { PageContainer } from '@/shared/components/PageContainer';

export function Error500({ showHeading }) {
  const { classes } = useStyles();

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
                  src="/illustration/SVG/illustration-502-Error.svg"
                  alt="error 500 illustration showing dead computer"
                />
              </Flex>
            </Grid.Col>
            <Grid.Col span={12} sm={6}>
              <Flex align={{ base: 'flex-start', sm: 'center' }} h="100%">
                <Stack spacing="2xl">
                  <Stack spacing="md">
                    <Stack spacing="xs">
                      <Text className="label-md">{UpperCase('Error 500')}</Text>
                      <Title className="h2">
                        {Capitalize(serverDown.statement)}
                      </Title>
                    </Stack>
                    <Text className="subtitle-sm">{serverDown.resolution}</Text>
                  </Stack>
                  <div className={classes.button_wrapper}>
                    <Stack spacing="md">
                      <Button onClick={() => location.reload()}>
                        Reload page
                      </Button>
                      <Button
                        leftIcon={iconCreator({ icon: ArrowTl })}
                        variant="subtle"
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
