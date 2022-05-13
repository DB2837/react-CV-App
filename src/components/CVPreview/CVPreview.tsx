import React from "react";
import "../../style/CVPreview/CVPreview.css";
import { CV, exampleCV, emptyCV } from "../../cvInterface";
import { HeaderPreview } from "./Header";
import { ContentPreview } from "./ContentPreview";
import { Sidebar } from "./Sidebar";

type CVPreviewProps = {
  cv: CV;
  setCv: React.Dispatch<React.SetStateAction<CV>>;
};

export const CVPreview = ({ cv, setCv }: CVPreviewProps) => {
  const personalInfo = cv.personalInfo;
  const experiences = cv.experience;
  const education = cv.education;

  return (
    <div className="container__cv-preview">
      <section className="cv-preview">
        <HeaderPreview
          firstName={personalInfo.firstName}
          lastName={personalInfo.lastName}
          qualificationTitle={personalInfo.qualificationTitle}
        />
        <ContentPreview
          personalInfo={personalInfo}
          experiences={experiences}
          education={education}
        />
        <Sidebar
          address={personalInfo.address}
          phoneNumber={personalInfo.phoneNumber}
          email={personalInfo.email}
          photo={personalInfo.photo}
        />
      </section>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCv(exampleCV);
        }}
      >
        Load Example
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCv(emptyCV);
          console.log(cv);
        }}
      >
        Reset
      </button>
      <button>Convert to PDF</button>
    </div>
  );
};
