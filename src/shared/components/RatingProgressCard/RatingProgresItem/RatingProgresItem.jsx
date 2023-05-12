import { Progress, Text, Group } from '@mantine/core';
import { roundUpNumber } from '@/shared/utils/roundUpNumber';

export function RatingProgressItem(props) {
  const { label, count, totalCount } = props;

  const progressPercent = (count / totalCount) * 100;

  return (
    <Group spacing={2} position="apart" maw={520}>
      <Text className="label-md">{label} Star</Text>
      <div style={{ width: '75%' }}>
        <Progress value={progressPercent} size="sm" />
      </div>
      <Text className="label-md">{roundUpNumber(count)}</Text>
    </Group>
  );
}
