type Props = {
  width?: string;
  marginY?: string;
  color?: string;
  thickness?: string;
  moreClasses?: string;
};

const Divider = (props: Props) => {
  const { width, marginY, color, thickness, moreClasses } = props;
  return (
    <div
      className={`${width} ${marginY} ${color} ${thickness} ${moreClasses}`}
    />
  );
};

export default Divider;
