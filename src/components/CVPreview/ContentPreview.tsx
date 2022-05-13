import React from "react";
import "../../style/CVPreview/ContentPreview.css";
import { Description } from "./Description";
import { PersonalInfo, Education, Experience } from "../../cvInterface";
import { Experiences } from "./Experiences";
import { Educations } from "./Educations";

type ContentPreviewProps = {
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
};

export const ContentPreview = ({
  personalInfo,
  experiences,
  education,
}: ContentPreviewProps) => {
  return (
    <section className="content-preview">
      <Description description={personalInfo.description} />
      <Experiences experiences={experiences} />
      <Educations education={education} />
    </section>
  );
};
