import { useMediaQuery } from '@mantine/hooks';
import { ScrollArea, useMantineTheme } from '@mantine/core';

export function SectionBodyNew(props) {
  const { contentFullWidth, children, fixedHeight, padSection } = props;

  const { breakpoints } = useMantineTheme();
  const matchMd = useMediaQuery(`(min-width: ${breakpoints.md})`);

  const matchPadding = matchMd ? 'xl' : 0;
  const padding = padSection ? matchPadding : 0;

  const sectionWidth = contentFullWidth ? '100%' : 800;

  return fixedHeight ? (
    <ScrollArea mah={480} type="auto" offsetScrollbars scrollbarSize={8}>
      <div style={{ maxWidth: sectionWidth, padding }}>
        {children}
      </div>
    </ScrollArea>
  ) : (
    <div style={{ maxWidth: sectionWidth, padding }}>
      {children}
    </div>
  );
}
