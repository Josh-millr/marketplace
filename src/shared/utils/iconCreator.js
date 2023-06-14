export const iconCreator = (props) => {
  const { icon: Icon, sizeOverride, colorOverride, strokeOverride } = props;

  const size = sizeOverride || 20;
  const color = colorOverride || 'inherit';
  const stroke = strokeOverride || 2;

  return <Icon height={size} width={size} color={color} strokeWidth={stroke} />;
};
