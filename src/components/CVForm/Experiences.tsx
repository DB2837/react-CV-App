import React from "react";
import { Experience, CV } from "../../cvInterface";
import { PersonExperiences } from "./PersonExperiences";
import { v4 as uuidv4 } from "uuid";

interface ExperiencesProps {
  personalExperiences: Experience[];
  setPersonalExperiences: React.Dispatch<React.SetStateAction<CV>>;
}

export const Experiences = ({
  personalExperiences,
  setPersonalExperiences,
}: ExperiencesProps) => {
  const addPersonalExperience = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newExperience: Experience = {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    };

    setPersonalExperiences((prevState) => ({
      ...prevState,
      experience: [...prevState.experience, newExperience],
    }));
  };

  return (
    <>
      <h3>Experience</h3>
      {personalExperiences.map((experience) => {
        return (
          <PersonExperiences
            key={experience.id}
            personalExperience={experience}
            setPersonalExperience={setPersonalExperiences}
          />
        );
      })}
      <button onClick={addPersonalExperience}>Add Experience</button>
    </>
  );
};
