import React from "react";
import { Education, CV } from "../../cvInterface";
import { PersonEducation } from "./PersonEducation";
import { v4 as uuidv4 } from "uuid";

interface EducationsProps {
  personEducations: Education[];
  setPersonEducation: React.Dispatch<React.SetStateAction<CV>>;
}

export const Educations = ({
  personEducations,
  setPersonEducation,
}: EducationsProps) => {
  const addPersonEducation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newEducation: Education = {
      id: uuidv4(),
      universityName: "",
      degree: "",
      subject: "",
      city: "",
      from: "",
      to: "",
    };

    setPersonEducation((prevState) => ({
      ...prevState,
      education: [...prevState.education, newEducation],
    }));
  };

  return (
    <>
      <h3>Education</h3>
      {personEducations.map((education) => {
        return (
          <PersonEducation
            key={education.id}
            personEducation={education}
            setPersonEducation={setPersonEducation}
          />
        );
      })}
      <button onClick={addPersonEducation}>Add Education</button>
    </>
  );
};
