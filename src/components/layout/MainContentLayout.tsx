type Props = {
  children: React.ReactNode;
};

const MainContentLayout = (props: Props) => {
  return <div className="min-h-[70vh]">{props.children}</div>;
};

export default MainContentLayout;
