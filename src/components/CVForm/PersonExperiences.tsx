import React from "react";
import { Experience, CV } from "../../cvInterface";
import { Input } from "./Input";

interface PersonalExperienceProps {
  personalExperience: Experience;
  setPersonalExperience: React.Dispatch<React.SetStateAction<CV>>;
}

export const PersonExperiences = ({
  personalExperience,
  setPersonalExperience,
}: PersonalExperienceProps) => {
  const deleteExperience = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setPersonalExperience((prevState) => {
      const newExperienceArr = prevState.experience.filter(
        (experience) => experience.id !== personalExperience.id
      );

      return { ...prevState, experience: [...newExperienceArr] };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newExperience = {
      ...personalExperience,
      [e.target.name]: e.target.value,
    };

    setPersonalExperience((prevState) => {
      const newExperienceArr = prevState.experience;
      newExperienceArr.forEach((experience, index) => {
        if (experience.id === personalExperience.id) {
          newExperienceArr[index] = newExperience;
        }
      });

      return { ...prevState, experience: newExperienceArr };
    });
  };

  return (
    <section className="form-component" data-id={personalExperience.id}>
      <Input
        type={"text"}
        placeholder={"Job Position"}
        name={"position"}
        onChange={(e) => handleChange(e)}
        value={personalExperience.position}
      />
      <Input
        type={"text"}
        placeholder={"Company"}
        name={"company"}
        onChange={(e) => handleChange(e)}
        value={personalExperience.company}
      />
      <Input
        type={"text"}
        placeholder={"City"}
        name={"city"}
        onChange={(e) => handleChange(e)}
        value={personalExperience.city}
      />
      <Input
        type={"text"}
        placeholder={"From"}
        name={"from"}
        onChange={(e) => handleChange(e)}
        value={personalExperience.from}
      />
      <Input
        type={"text"}
        placeholder={"To"}
        name={"to"}
        onChange={(e) => handleChange(e)}
        value={personalExperience.to}
      />
      <button onClick={deleteExperience}>Delete</button>
    </section>
  );
};
