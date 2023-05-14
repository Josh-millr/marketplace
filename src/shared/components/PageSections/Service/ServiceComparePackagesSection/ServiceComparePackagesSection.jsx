import { Stack, Text } from '@mantine/core';

import { ServicePackageTable } from '../../../ServicePackageTable';

export function ServiceComparePackagesSection({ packages }) {
  return (
    <Stack spacing="xl" py="2xl">
      <Text className="sub-h1">Compare Packages</Text>

      <ServicePackageTable
        basic={packages.basic}
        standard={packages.standard}
        premium={packages.premium}
      />
    </Stack>
  );
}
