import React from "react";

type DescriptionProps = {
  description: string;
};

export const Description = ({ description }: DescriptionProps) => {
  return (
    <div>
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  );
};
