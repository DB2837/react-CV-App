import React from "react";
import { Education } from "../../cvInterface";
import "../../style/CVPreview/EducationItem.css";

type EducationItemProps = {
  education: Education;
};

export const EducationItem = ({ education }: EducationItemProps) => {
  return (
    <div className="educationItem">
      <h4>
        {education.from} - {education.to}
      </h4>
      <div className="educationItem__university">
        <h4>
          {education.universityName}, {education.city}
        </h4>
        <p>qualification: {education.degree}</p>
        <p>subject: {education.subject}</p>
      </div>
    </div>
  );
};
