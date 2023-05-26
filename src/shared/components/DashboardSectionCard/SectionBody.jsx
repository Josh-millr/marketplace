import { forwardRef } from 'react';
import { ScrollArea } from '@mantine/core';

export const SectionBody = forwardRef((props, ref) => {
  const { contentFullWidth, children } = props;
  return (
    <ScrollArea mah={480} type="auto" offsetScrollbars scrollbarSize={8}>
      <div
        ref={ref}
        style={{ maxWidth: contentFullWidth ? '100%' : 800, maxHeight: 480 }}
      >
        {children}
      </div>
    </ScrollArea>
  );
});
