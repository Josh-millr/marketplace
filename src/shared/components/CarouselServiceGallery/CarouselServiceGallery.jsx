import Image from 'next/image';
import { Carousel } from '@mantine/carousel';

import { useStyles } from './style.CarouselServiceGallery';

export function CarouselServiceGallery({ gallery }) {
  const { classes } = useStyles();

  return (
    <div className={classes.carouselWrapper}>
      <Carousel withIndicators height="100%" sx={{ flex: 1 }}>
        {gallery.map((href, index) => (
          <Carousel.Slide key={index} style={{ position: 'relative' }}>
            <Image
              fill
              src={href || ''}
              style={{ objectFit: 'cover', borderRadius: '8px' }}
              alt="One service gallery image"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
