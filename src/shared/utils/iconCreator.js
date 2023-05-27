export const iconCreator = (props) => {
  const { icon: Icon, sizeOverride, colorOverride, strokeOveride } = props;

  const size = sizeOverride || 20;
  const color = colorOverride || 'inherit';
  const stroke = strokeOveride || 2;

  return <Icon height={size} width={size} color={color} strokeWidth={stroke} />;
};
