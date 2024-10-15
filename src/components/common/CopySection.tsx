import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

const CopySection = (props: Props) => {
  const { children, title } = props;

  return (
    <div className="text-center mb-16">
      <h2 className="font-brandSerif font-bold mb-6 text-3xl text-brandGreen-600">
        {title}
      </h2>
      <div className="bg-gold-600 h-1 w-28 mx-auto rounded-lg" />
      <div className="mt-6 w-11/12 mx-auto">{children}</div>
    </div>
  );
};

export default CopySection;
