import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Text,
  Title,
  Badge,
  Stack,
  Group,
  Flex,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { Clock, Hourglass } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

import { useStyles } from './style.DashboardProjectPreviewCard';

function TitleProject({ title }) {
  return <Title className="sub-h1">{title}</Title>;
}

function Options({ expires, created, proposalsReceived }) {
  const { colors } = useMantineTheme();
  return (
    <Flex
      w="100%"
      gap={{ base: 'lg', md: 'xl' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Group spacing="sm">
        {iconCreator({
          icon: Hourglass,
          sizeOverride: 24,
          colorOverride: colors.danger[7],
        })}
        <Text className="label-sm" fw="500!important" c="danger.7">
          Expires: {expires}
        </Text>
      </Group>
      <Group spacing="sm">
        {iconCreator({
          icon: Clock,
          sizeOverride: 24,
          colorOverride: colors.neutral[7],
        })}
        <Text className="label-sm" fw="500!important">
          <span style={{ color: colors.neutral[7] }}>Created: </span>
          {created}
        </Text>
      </Group>
      <Group spacing="sm">
        <Group spacing="sm">
          {iconCreator({
            icon: Clock,
            sizeOverride: 24,
            colorOverride: colors.neutral[7],
          })}
        </Group>
        <Text className="label-sm" fw="500!important" c="neutral.7">
          Created:
        </Text>
        <Badge>{proposalsReceived}</Badge>
      </Group>
    </Flex>
  );
}

function Price({ cost, priceType }) {
  return (
    <Flex
      direction="column"
      gap={{ base: 'sm', md: 'xl' }}
      justify={{ base: 'flex-start', md: 'flex-end' }}
    >
      <Text className="label-md" fw="500!important" c="neutral.7">
        {priceType} Budget
      </Text>
      <Title className="sub-h3">{displayNumberInNaira(cost)}</Title>
    </Flex>
  );
}

export function DashboardProjectPreviewCard(props) {
  const { cost, title, expires, created, priceType, proposalsReceived } = props;

  const [hovered, setHovered] = useState(false);

  const { classes } = useStyles();

  return (
    <Link href={`/dashboard/buyer/projects/project/${title}` || ''}>
      <Box
        className={`${classes.wrapper} ${hovered && classes.wrapperHovered}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Group position="apart">
          <Stack spacing="lg">
            <TitleProject title={title} />
            <Options
              expires={expires}
              created={created}
              proposalsReceived={proposalsReceived}
            />
          </Stack>

          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Price cost={cost} priceType={priceType} />
          </MediaQuery>
        </Group>

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Price cost={cost} priceType={priceType} />
        </MediaQuery>
      </Box>
    </Link>
  );
}

// export function DashboardProjectPreviewCard(props) {
//   const {
//     cost,
//     title,
//     status,
//     expires,
//     created,
//     id,
//     category,
//     pricingtype,
//     proposalsRecived,
//   } = props;

//   const [hovered, setHovered] = useState(false);

//   const { colors } = useMantineTheme();
//   const { classes } = useStyles();

//   return (
//     <Link href={`/dashboard/buyer/projects/project/${id}` || ''}>
//       <Box
//         className={`${classes.wrapper} ${hovered && classes.wrapperHovered}`}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//       >
//         <Stack spacing="lg">
//           <Stack spacing="sm">
//             <Group position="apart">
//               {/* <Badge></Badge> */}
//               <Text className="label-md" color="neutral.6" fw={'700!important'}>
//                 {category}
//               </Text>
//               <Text
//                 className="label-md"
//                 fw={'700!important'}
//               >{`${displayNumberInNaira(cost)}/${pricingtype}`}</Text>
//             </Group>

//             <Text
//               className={`${classes.title} ${
//                 hovered && classes.titleHovered
//               } body-md`}
//             >
//               {title}
//             </Text>
//           </Stack>

//           <Flex gap="md">
//             <Group spacing="xs">
//               <Group spacing="xs">
//                 {iconCreator({ icon: Clock, sizeOverride: 16 })}
//                 <Text className="label-sm" fw="700!important">
//                   Created:
//                 </Text>
//               </Group>
//               <Text className="label-sm" fw="700!important">
//                 {created}
//               </Text>
//             </Group>

//             <Divider orientation="vertical" />

//             <Group spacing="xs">
//               <Group spacing="xs">
//                 {iconCreator({ icon: MultiplePages, sizeOverride: 16 })}
//                 <Text className="label-sm" fw="700!important">
//                   Proposals:
//                 </Text>
//               </Group>
//               <Text className="label-sm" fw="700!important">
//                 {proposalsRecived}
//               </Text>
//             </Group>

//             <Divider orientation="vertical" />

//             <Group spacing="xs">
//               <Group spacing="xs">
//                 {iconCreator({
//                   icon: BinMinus,
//                   sizeOverride: 16,
//                   colorOverride: colors.danger[7],
//                 })}
//                 <Text
//                   className="label-sm"
//                   fw="700!important"
//                   color={colors.danger[7]}
//                 >
//                   Expires:
//                 </Text>
//               </Group>
//               <Text
//                 className="label-sm"
//                 fw="700!important"
//                 color={colors.danger[7]}
//               >
//                 {expires}
//               </Text>
//             </Group>
//           </Flex>

//           <Group position="apart">
//             <Flex gap="md">
//               <Button variant="outline">View Proposals</Button>
//               <ActionIcon size="lg">
//                 {iconCreator({ icon: Trash, colorOverride: colors.danger[8] })}
//               </ActionIcon>
//             </Flex>
//             <Badge size="sm">{status}</Badge>
//           </Group>
//         </Stack>
//       </Box>
//     </Link>
//   );
// }
