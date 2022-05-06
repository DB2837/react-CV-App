import React from "react";
import "../../style/CVPreview/HeaderPreview.css";

type HeaderPreviewProps = {
  firstName: string;
  lastName: string;
  qualificationTitle: string;
};

export const HeaderPreview = ({
  firstName,
  lastName,
  qualificationTitle,
}: HeaderPreviewProps) => {
  return (
    <div className="header-preview">
      <h2>
        {firstName} {lastName}
      </h2>
      <h3>{qualificationTitle}</h3>
    </div>
  );
};
