import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Group, Center, Button } from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

export const FreelancerOnboardingHeader = memo(() => {
  const router = useRouter();

  return (
    <Center h="100%">
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          <Group position="apart" align="center">
            <Link href="/freelancer">
              <Image
                height={40}
                width={115}
                alt="hamzry logo"
                src="/logo/hamzry/SVG/logo-hamzry-full-colored-115x40.svg"
              />
            </Link>

            {/* <MediaQuery smallerThan="lg"></MediaQuery> */}
            <Button variant="outline" color="red" onClick={() => router.back()}>
              Cancel
            </Button>
          </Group>
        </PageContainer.Marketplace>
      </PageContainer>
    </Center>
  );
});
