import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Footer,
  Grid,
  Stack,
  Group,
  Text,
  Space,
  ActionIcon,
} from '@mantine/core';
import { Facebook, Twitter, Instagram } from 'iconoir-react';

import { links } from '@/shared/constants/footer-links';
import { iconCreator } from '@/shared/utils/iconCreator';
import { LinkGroup } from '@/shared/components/LinkGroup';
import { PageContainer } from '@/shared/components/PageContainer';

import { useStyles } from './style.MarketplaceFooter';

export function MarketplaceFooter() {
  const { classes } = useStyles();
  const { products, resources, company, legal } = links;

  const legalLinks = useMemo(
    () =>
      legal.navLinks.map((linkItem) => (
        <Link href={linkItem.href} key={linkItem.label}>
          <Text color="neutral.6" className="link-sm">
            {linkItem.label}
          </Text>
        </Link>
      )),
    [legal.navLinks]
  );

  return (
    <Footer pos="inherit" p="md" mt="9xl">
      <PageContainer layout="main">
        <PageContainer.Main>
          <div className={classes.innerTop}>
            <Group spacing="lg">{legalLinks}</Group>

            <Space h="xl" />

            <Group spacing="md" position="right" noWrap>
              <ActionIcon size="lg" variant="default" radius="xl">
                {iconCreator({ icon: Facebook, sizeOveride: 16 })}
              </ActionIcon>
              <ActionIcon size="lg" variant="default" radius="xl">
                {iconCreator({ icon: Twitter, sizeOveride: 16 })}
              </ActionIcon>
              <ActionIcon size="lg" variant="default" radius="xl">
                {iconCreator({ icon: Instagram, sizeOveride: 16 })}
              </ActionIcon>
            </Group>
          </div>

          <Stack spacing="4xl">
            <Grid grow columns={10} py="2xl">
              <Grid.Col span={5} sm={2}>
                <LinkGroup label={products.name} links={products.navLinks} />
              </Grid.Col>

              <Grid.Col span={5} sm={2}>
                <LinkGroup label={resources.name} links={resources.navLinks} />
              </Grid.Col>

              <Grid.Col span={5} sm={2}>
                <LinkGroup label={company.name} links={company.navLinks} />
              </Grid.Col>

              <Grid.Col span={5} sm={2}>
                <LinkGroup label={legal.name} links={legal.navLinks} />
              </Grid.Col>
            </Grid>

            <div className={classes.innerBottom}>
              <Grid grow gutter="xl" align="center">
                <Grid.Col span={12} sm={6}>
                  <div className={classes.logoWrapper}>
                    <Image
                      height={40}
                      width={115}
                      alt="hamzry brand logo"
                      src="/logo/hamzry/SVG/logo-hamzry-full-colored-115x40.svg"
                    />
                  </div>
                </Grid.Col>

                <Grid.Col span={12} sm={6}>
                  <div className={classes.rightCalloutWrapper}>
                    <Text
                      component="span"
                      color="neutral.6"
                      className="label-md"
                    >
                      © 2023 Hamzry Ltd. All rights reserved.
                    </Text>
                  </div>
                </Grid.Col>
              </Grid>
            </div>
          </Stack>
        </PageContainer.Main>
      </PageContainer>
    </Footer>
  );
}
