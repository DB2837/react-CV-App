import React from "react";
import "../../style/CVPreview/CVPreview.css";
import { CV } from "../../cvInterface";
import { HeaderPreview } from "./Header";

type CVPreviewProps = {
  cv: CV;
};

export const CVPreview = ({ cv }: CVPreviewProps) => {
  const personalInfo = cv.personalInfo;

  return (
    <section className="cv-preview">
      <HeaderPreview
        firstName={personalInfo.firstName}
        lastName={personalInfo.lastName}
        qualificationTitle={personalInfo.qualificationTitle}
      />
    </section>
  );
};
