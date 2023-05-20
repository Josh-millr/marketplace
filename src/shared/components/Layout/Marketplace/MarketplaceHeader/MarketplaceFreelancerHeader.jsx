import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Group, Center, Button, MediaQuery } from '@mantine/core';
import { PageContainer } from '@/shared/components/PageContainer';

export const MarketplaceFreelancerHeader = memo(() => {
  const router = useRouter();

  return (
    <Center h="100%">
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          <Group position="apart" align="center">
            <Link href="/">
              <Image
                height={40}
                width={115}
                alt="hamzry logo"
                src="/logo/hamzry/SVG/logo-hamzry-full-colored-115x40.svg"
              />
            </Link>

            <MediaQuery smallerThan="lg">
              <Button
                variant="outline"
                color="red"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </MediaQuery>
          </Group>
        </PageContainer.Marketplace>
      </PageContainer>
    </Center>
  );
});
