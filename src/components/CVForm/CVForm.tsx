import React from "react";
import "../../style/CVForm/Form.css";
import { PersonalInformation } from "./PersonalInformation";
import { Experiences } from "./Experiences";
import { Educations } from "./Education";
import { CV } from "../../cvInterface";

type CVFormProps = {
  cv: CV;
  setCv: React.Dispatch<React.SetStateAction<CV>>;
};

export const CVForm = ({ setCv, cv }: CVFormProps) => {
  /*  console.log(cv);
  console.log(cv.experience); */

  return (
    <form>
      <PersonalInformation
        personalInfo={cv.personalInfo}
        setPersonalInfo={setCv}
      />
      <Experiences
        personalExperiences={cv.experience}
        setPersonalExperiences={setCv}
      />
      <Educations personEducations={cv.education} setPersonEducation={setCv} />
    </form>
  );
};
