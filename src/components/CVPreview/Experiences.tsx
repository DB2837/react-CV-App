import React from "react";
import { Experience } from "../../cvInterface";
import { ExperienceItem } from "./ExperienceItem";

type ExperiencesProps = {
  experiences: Experience[];
};

export const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <section>
      <h3>Experience</h3>
      {experiences.map((experience) => {
        return <ExperienceItem experience={experience} key={experience.id} />;
      })}
    </section>
  );
};
