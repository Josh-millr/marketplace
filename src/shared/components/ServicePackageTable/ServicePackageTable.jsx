import { Stack, Table, Text, Title, Box, Grid } from '@mantine/core';

import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

function DescriptionBar({ cols }) {
  return (
    <Grid py="xs" bg="brandPrimary.1">
      {cols.map((col, index) => (
        <Grid.Col span={4} key={index}>
          <Text className="label-sm">{col}</Text>
        </Grid.Col>
      ))}
    </Grid>
  );
}

function TitleBar({ title }) {
  return (
    <Box py="xs">
      <Text className="label-sm" tt="capitalize">
        {title}
      </Text>
    </Box>
  );
}

export function ServicePackageTable(props) {
  const { basic, premium, standard } = props;

  return (
    <Box>
      {/* Delivery Time */}
      <TitleBar title="delivery time" />
      <DescriptionBar cols={[]} />
    </Box>
  );

  return (
    <Box>
      {/* <thead>
        <tr>
          <th>
           <Box w={160}></Box>
          </th>
          <th>
            <Stack spacing="xs">
              <Title className="sub-h3">{displayNumberInNaira(basic.price)}</Title>
              <Text className="body-sm">{basic.description}</Text>
            </Stack>
          </th>
          <th>
            {' '}
            <Stack spacing="xs">
              <Title className="sub-h3">{displayNumberInNaira(standard.price)}</Title>
              <Text className="body-sm">{standard.description}</Text>
            </Stack>
          </th>
          <th>
            {' '}
            <Stack spacing="xs">
              <Title className="sub-h3">{displayNumberInNaira(premium.price)}</Title>
              <Text className="body-sm">{premium.description}</Text>
            </Stack>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr key="revision">
          <td>Revision</td>
          <td>{basic.revision}</td>
          <td>{standard.revision}</td>
          <td>{premium.revision}</td>
        </tr>
        <tr key="deliveryTime">
          <td>Delivery Time</td>
          <td>{basic.deliveryTime}</td>
          <td>{standard.deliveryTime}</td>
          <td>{premium.deliveryTime}</td>
        </tr>
      </tbody> */}
    </Box>
  );
}
