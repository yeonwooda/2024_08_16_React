import React from "react";

export type ContentProps = {
  Children?: React.ReactNode;
};

const Content = ({ Children }: ContentProps) => {
  return (
    <main className="max-w-md m-auto">
      <section className="flex flex-col">{Children}</section>
    </main>
  );
};

export default Content;
