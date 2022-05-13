import React from "react";
import "../../style/CVPreview/Detail.css";

type DetailProps = {
  title: string;
  value: string;
};

export const Detail = ({ title, value }: DetailProps) => {
  return (
    <div className="detailItem">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
};
