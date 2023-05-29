import React from 'react';
import { SectionWrapper } from './SectionWrapper';

export const DashboardProfileCard = (props) => {
  const { title, children } = props;

  return (
    <SectionWrapper {...props}>
      {title && title.length > 0 && (
        <div style={{ margin: '12px', padding: '4px' }}>
             <div style={{ margin: '12px', fontWeight: 'bold', padding: '16px 0', borderBottom: '1px solid #ddd' }}>
                  {title}
                  </div>
          {children}
        </div>
      )}
    </SectionWrapper>
  );
};
