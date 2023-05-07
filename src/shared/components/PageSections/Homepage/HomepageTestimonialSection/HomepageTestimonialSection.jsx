import { useMediaQuery } from '@mantine/hooks';
import { Stack, Title, Text, Box, Flex, useMantineTheme } from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

import { useStyle } from './stye.HomepageTestimonialSection';
import { AuthorAvatar } from './AuthorAvatar/AuthorAvatar';

const testimony = [
  {
    active: false,
    id: 1,
    name: 'Ali Tufan',
    career: 'Chief Operation Manager, Chizzys Lounge',
    avatarSrc: '/images/avatar/JPG/avatar.avatar1-640x640.jpg',
    text: `Hamzry makes it incredibly easy to find talented freelancers for any 
    project. The platform is user-friendly and efficient, and I always receive 
    excellent results from the freelancers I hire`,
  },
  {
    active: false,
    id: 2,
    name: 'Ali Tufan',
    career: 'Marketing, Fliqzor',
    avatarSrc: '/images/avatar/JPG/avatar.avatar2-640x640.jpg',
    text: `The support team at Hamzry is exceptional. They are always available
     to answer any questions and provide guidance, making the platform a pleasure
     to use.`,
  },
  {
    active: true,
    id: 3,
    name: 'Ali Tufan',
    career: 'Freelance Web developer',
    avatarSrc: '/images/avatar/JPG/avatar.avatar3-640x640.jpg',
    text: `I have been blown away by the level of professionalism and expertise
    of the freelancers on Hamzry. I have completed multiple projects on the 
    platform and have never been disappointed.`,
  },
  {
    active: false,
    id: 4,
    name: 'Ali Tufan',
    career: 'Design lead, Zeniwave',
    avatarSrc: '/images/avatar/JPG/avatar.avatar5-640x640.jpg',
    text: `Hamzry has saved me countless hours and headaches when it comes to 
    finding reliable and talented freelancers. I highly recommend it to anyone 
    who needs help with any kind of project.`,
  },
  {
    active: false,
    id: 5,
    name: 'Ali Tufan',
    career: 'Vertinarian',
    avatarSrc: '/images/avatar/JPG/avatar.avatar5-640x640.jpg',
    text: `Hamzry has been an incredible resource for my business. The platform
     makes it easy to find and hire top-quality freelancers, and the process is 
     always smooth and hassle-free.`,
  },
];

export function HomepageTestimonialSection() {
  const { colors } = useMantineTheme();
  const matchesDesktop = useMediaQuery('(min-width: 1052px)');
  const { classes } = useStyle();

  return (
    <PageContainer layout="main">
      <PageContainer.Main>
        <Stack spacing="2xl" className={classes.testimonialContainer}>
          <Stack spacing={0} align="center">
            <Title className="h1">Testimonials</Title>
            <Text className="body-sm" color="neutral.6">
              What some Hamzry users have to say
            </Text>
          </Stack>

          <Stack spacing="3xl" align="center" justify="center">
            {/* Quote */}
            <Stack
              spacing={{ base: 'lg', md: '2xl' }}
              align="center"
              justify="center"
            >
              <Box height={64} width={64} color="brandPrimary.9"></Box>
              <Title
                align="center"
                weight={700}
                style={{ maxWidth: '714px' }}
                className={`${matchesDesktop ? 'h1' : 'subtitle-md'}`}
              >
                “Hamzry makes it incredibly easy to find talented freelancers
                for any project. The platform is user-friendly and efficient,
                and I always receive excellent results from the freelancers I
                hire”
              </Title>
            </Stack>

            {/* Author */}
            <Stack spacing="xl" align="center">
              <Stack spacing={0} align="center">
                <Text
                  className="label-md"
                  weight={800}
                  style={{ fontWeight: '800' }}
                >
                  Susan ademola
                </Text>
                <Text className="label-md" color="neutral.6" weight={600}>
                  Product manager, Chizzys Lounge
                </Text>
              </Stack>

              <Stack align="center" justify="center">
                <Flex
                  gap="xl"
                  wrap="nowrap"
                  className={classes.authorImageContainer}
                >
                  {testimony.map(({ avatarSrc, id, active }) => (
                    <AuthorAvatar
                      key={id}
                      active={active}
                      placeholder="blur"
                      imgSrc={avatarSrc}
                      style={{ backgroundColor: colors.neutral[4] }}
                    />
                  ))}
                </Flex>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </PageContainer.Main>
    </PageContainer>
  );
}
