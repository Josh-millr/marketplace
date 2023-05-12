import { Stack, Table, Text, Title, Box, Grid } from '@mantine/core';

import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

function DescriptionBar({ cols }) {
  return (
    <Grid py="sm" bg="neutral.3">
      {cols.map((col, index) => (
        <Grid.Col span={4} key={index} pl="md">
          <Text className="label-md">{col}</Text>
        </Grid.Col>
      ))}
    </Grid>
  );
}

function TitleBar({ title }) {
  return (
    <Box py="lg">
      <Text className="label-md" tt="capitalize" fw={'700!important'}>
        {title}
      </Text>
    </Box>
  );
}

export function ServicePackageTable(props) {
  const { basic, premium, standard } = props;

  const objectsArray = [basic, standard, premium];

  const titlesArray = objectsArray.map((obj) => obj.title);

  const pricesArray = objectsArray.map((obj) => obj.price);
  const priceWithFormat = pricesArray.map((price) =>
    displayNumberInNaira(price)
  );

  const deliveryTimesArray = objectsArray.map((obj) => obj.deliveryTime);
  const revisionsArray = objectsArray.map((obj) => obj.revision);

  return (
    <Box>
      {/* Delivery Time */}
      <TitleBar title="Package Tiers" />
      <DescriptionBar cols={titlesArray} />

      {/* Price */}
      <TitleBar title="Price" />
      <DescriptionBar cols={priceWithFormat} />

      {/* Delivery Time */}
      <TitleBar title="delivery time" />
      <DescriptionBar cols={deliveryTimesArray} />

      {/* Revisions */}
      <TitleBar title="revision" />
      <DescriptionBar cols={revisionsArray} />
    </Box>
  );
}
