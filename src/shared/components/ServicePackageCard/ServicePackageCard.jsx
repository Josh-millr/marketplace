import { Tabs, Paper, Button, Space } from '@mantine/core';
import { PackageTab } from './PackageTab/PackageTab';

export function ServicePackageCard(props) {
  const { basic, premium, standard } = props;

  return (
    <Paper
      radius="xs"
      px={{ base: 'md', sm: 'lg' }}
      py={{ base: 'md', sm: '2xl' }}
      shadow="sm"
    >
      <Tabs defaultValue="standard">
        <Tabs.List>
          <Tabs.Tab value="basic">Basic</Tabs.Tab>
          <Tabs.Tab value="standard">Standard</Tabs.Tab>
          <Tabs.Tab value="premium">Premium</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="basic" pt="xs">
          <PackageTab
            price={basic.price}
            descr={basic.description}
            revision={basic.revision}
            delivery={basic.deliveryTime}
          />
        </Tabs.Panel>

        <Tabs.Panel value="standard" pt="xs">
          <PackageTab
            price={standard.price}
            descr={standard.description}
            revision={standard.revision}
            delivery={standard.deliveryTime}
          />
        </Tabs.Panel>

        <Tabs.Panel value="premium" pt="xs">
          <PackageTab
            price={premium.price}
            descr={premium.description}
            revision={premium.revision}
            delivery={premium.deliveryTime}
          />
        </Tabs.Panel>
      </Tabs>
      <Space h='sm' />
      <Button size='md' fullWidth variant='outline'>Request Custom Service</Button>
    </Paper>
  );
}
