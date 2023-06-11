import { ScrollArea } from '@mantine/core';

export function SectionBodyNew(props) {
  const { contentFullWidth, children, fixedHeight } = props;

  const sectionWidth = contentFullWidth ? '100%' : 800;

  return fixedHeight ? (
    <ScrollArea mah={480} type="auto" offsetScrollbars scrollbarSize={8}>
      <div style={{ maxWidth: sectionWidth }}>{children}</div>
    </ScrollArea>
  ) : (
    <div style={{ maxWidth: sectionWidth }}>{children}</div>
  );
}
