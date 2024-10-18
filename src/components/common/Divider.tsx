type Props = {
  width?: string;
  marginY?: string;
  color?: string;
  thickness?: string;
};

const Divider = (props: Props) => {
  const {
    width = "100%",
    marginY = "4",
    color = "neutral-300",
    thickness = "0.5px",
  } = props;
  return (
    <div
      className={`w-[${width}] my-[${marginY}] bg-[${color}] h-[${thickness}]`}
    />
  );
};

export default Divider;
