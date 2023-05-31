import { memo } from "react";
import Link from "next/link";
import { ArrowLeft } from "iconoir-react";
import { Text, useMantineTheme, Flex, Box } from "@mantine/core";

import { iconCreator } from "@/shared/utils/iconCreator";

export const BackToMarketplace = memo(({ role }) => {
  const { colors } = useMantineTheme();

  return (
    <Box px="lg" py="xl">
      <Link href={`/${role}/`}>
        <Flex wrap="nowrap" gap="sm" align="center">
          {iconCreator({
            icon: ArrowLeft,
            sizeOverride: 16,
            colorOverride: colors.brandPrimary[7],
          })}
          <Text className="label-md" fw={"500!important"} c="brandPrimary.7">
            Go to marketplace
          </Text>
        </Flex>
      </Link>
    </Box>
  );
});
