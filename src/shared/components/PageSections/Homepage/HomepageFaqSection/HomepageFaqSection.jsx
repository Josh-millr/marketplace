import { Accordion, Stack, Title } from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

import { useStyles } from './style.HomepageFaqSection';

export function HomepageFaqSection() {
  const { classes } = useStyles();
  return (
    <PageContainer layout="main">
      <PageContainer.Main>
        <Stack spacing="3xl" className={classes.wrapper}>
          <Title align="center" className={`h1 ${classes.title}`}>
            Frequently Asked Questions
          </Title>

          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="hamzry intro">
              <Accordion.Control>What is Hamzry?</Accordion.Control>
              <Accordion.Panel className={classes.placeholder}>
                Any Nigerian freelancer who has a skill or service to offer can
                sell their services on Hamzry. Whether {"you're"} a writer,
                graphic designer, web developer, or social media manager, Hamzry
                provides a platform for you to showcase your skills and connect
                with clients.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="pay on hamzry">
              <Accordion.Control>
                How do I pay for services on Hamzry?
              </Accordion.Control>
              <Accordion.Panel className={classes.placeholder}>
                Hamzry accepts payments through multiple channels, including
                debit/credit cards, bank transfers, and mobile payments. Clients
                can choose the payment method {"that's"} most convenient for
                them.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="withdraw on hamzry">
              <Accordion.Control>
                How do I withdraw my earnings from Hamzry?
              </Accordion.Control>
              <Accordion.Panel className={classes.placeholder}>
                Freelancers can withdraw their earnings from Hamzry through
                multiple channels, including bank transfers and mobile payments.
                Once a withdrawal request is made, it will be processed within
                24-48 hours.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="earn secure">
              <Accordion.Control>
                Are my earnings secured on Hamzry?
              </Accordion.Control>
              <Accordion.Panel className={classes.placeholder}>
                Yes, your earnings on Hamzry are secured. We have a reliable
                third-party payment partner that ensures freelancers are able to
                receive their payments securely and on time.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="quality service">
              <Accordion.Control>
                How does Hamzry ensure quality services from freelancers?
              </Accordion.Control>
              <Accordion.Panel className={classes.placeholder}>
                Hamzry has a strict vetting process for freelancers to ensure
                that only the best are accepted onto the platform. We also
                encourage clients to leave honest reviews and feedback on their
                experience working with freelancers, which helps to maintain the
                quality of services offered on the platform.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="request revison">
              <Accordion.Control>
                Can clients request revisions from freelancers?
              </Accordion.Control>
              <Accordion.Panel className={classes.placeholder}>
                Yes, clients can request revisions from freelancers if they are
                not satisfied with the work delivered. Freelancers are required
                to provide revisions until the client is satisfied with the
                final work.
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="dispute on hamzry">
              <Accordion.Control>
                How does Hamzry handle disputes between clients and freelancers?
              </Accordion.Control>
              <Accordion.Panel className={classes.placeholder}>
                In the event of a dispute, Hamzry provides a dispute resolution
                process to help clients and freelancers reach a fair resolution.
                Our support team is also available to assist with any issues
                that may arise.
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Stack>
      </PageContainer.Main>
    </PageContainer>
  );
}
