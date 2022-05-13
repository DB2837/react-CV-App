import React from "react";
import { Experience } from "../../cvInterface";
import "../../style/CVPreview/ExperienceItem.css";

type ExperienceItemProps = {
  experience: Experience;
};

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div className="experienceItem">
      <h4>
        {experience.from} - {experience.to}
      </h4>
      <div className="experienceItem__position">
        <h4>{experience.position}</h4>
        <p>
          {experience.company}, {experience.city}
        </p>
      </div>
    </div>
  );
};
