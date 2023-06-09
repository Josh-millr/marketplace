import { memo } from "react";
import Link from "next/link";
import { HomeAltSlim } from "iconoir-react";
import { Text, useMantineTheme, Flex, Box } from "@mantine/core";

import { iconCreator } from "@/shared/utils/iconCreator";

export const BackToMarketplace = memo(({ role }) => {
  const { colors } = useMantineTheme();

  return (
    <Box px="lg" py="xl">
      <Link href={`/${role}/`}>
        <Flex wrap="nowrap" gap="sm" align="center">
          {iconCreator({
            icon: HomeAltSlim,
            sizeOverride: 24,
            colorOverride: colors.brandPrimary[7],
          })}
          <Text className="label-md" fw={"500!important"} c="brandPrimary.7">
            Go Back Home
          </Text>
        </Flex>
      </Link>
    </Box>
  );
});
