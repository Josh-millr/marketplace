export const iconCreator = (props) => {
  const { icon: Icon, sizeOveride, colorOveride, strokeOveride } = props;

  const size = sizeOveride || 20;
  const color = colorOveride || 'inherit';
  const stroke = strokeOveride || 2;

  return <Icon height={size} width={size} color={color} strokeWidth={stroke} />;
};
