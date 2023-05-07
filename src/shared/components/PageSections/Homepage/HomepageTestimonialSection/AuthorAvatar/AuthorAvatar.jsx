import Image from 'next/image';
import { Box } from '@mantine/core';

import { useStyle } from '../stye.HomepageTestimonialSection';

export function AuthorAvatar({ active, imgSrc }) {
  const { classes } = useStyle();
  return (
    <Box
      component="div"
      className={`${classes.avatar} ${active ? classes.activeAvatar : ''}`}
    >
      <Image
        height={72}
        width={72}
        style={{ objectFit: 'cover', borderRadius: '9999px' }}
        src={imgSrc || ''}
        alt="avatar"
      />
    </Box>
  );
}
