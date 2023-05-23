import { CloseButton, Divider, Group, Image, MediaQuery } from '@mantine/core';

export function DashboardNavBarMobileHeader({ hide }) {
  return (
    <div>
      <Group position="apart" px="xl" py="md" >
        <Image
          height={40}
          width={115}
          alt="hamzry brand logo"
          src="/logo/hamzry/SVG/logo-hamzry-full-colored-115x40.svg"
        />

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <CloseButton
            size="sm"
            aria-label="Close modal"
            iconSize={24}
            onClick={() => hide(false)}
          />
        </MediaQuery>
      </Group>
      <Divider />
    </div>
  );
}
