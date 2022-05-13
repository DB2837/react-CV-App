import React from "react";
import { Education } from "../../cvInterface";
import { EducationItem } from "./EducationItem";

type EducationProps = {
  education: Education[];
};

export const Educations = ({ education }: EducationProps) => {
  return (
    <section>
      <h3>Education</h3>
      {education.map((educationItem) => {
        return (
          <EducationItem education={educationItem} key={educationItem.id} />
        );
      })}
    </section>
  );
};
