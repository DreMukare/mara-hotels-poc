type Props = {
  children: React.ReactNode;
  styles?: string;
};

const MainContentLayout = (props: Props) => {
  return <div className={`min-h-[70vh] ${props.styles}`}>{props.children}</div>;
};

export default MainContentLayout;
