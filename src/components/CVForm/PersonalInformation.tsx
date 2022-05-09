import React, { useState } from "react";
import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { PersonalInfo, CV } from "../../cvInterface";

interface PersonalInformationProps {
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<CV>>;
}

export const PersonalInformation = ({
  personalInfo,
  setPersonalInfo,
}: PersonalInformationProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <>
      <h3>Personal Information</h3>
      <section className="form-component">
        <Input
          type={"text"}
          placeholder={"First Name"}
          name={"firstName"}
          onChange={(e) => handleChange(e)}
          value={personalInfo.firstName}
        />
        <Input
          type={"text"}
          placeholder={"Last Name"}
          name={"lastName"}
          onChange={(e) => handleChange(e)}
          value={personalInfo.lastName}
        />
        <Input
          type={"text"}
          placeholder={"Current Job"}
          name={"qualificationTitle"}
          onChange={(e) => handleChange(e)}
          value={personalInfo.qualificationTitle}
        />
        <Input
          type={"text"}
          placeholder={"Profile Picture"}
          name={"photo"}
          onChange={(e) => handleChange(e)}
          value={personalInfo.photo}
          /*  accept="image/png, image/jpeg" */
        />
        <Input
          type={"text"}
          placeholder={"Address"}
          name={"address"}
          onChange={(e) => handleChange(e)}
          value={personalInfo.address}
        />
        <Input
          type={"number"}
          placeholder={"Phone Number"}
          name={"phoneNumber"}
          onChange={(e) => handleChange(e)}
          value={personalInfo.phoneNumber}
        />
        <Input
          type={"text"}
          placeholder={"Email"}
          name={"email"}
          onChange={(e) => handleChange(e)}
          value={personalInfo.email}
        />
        <TextArea
          placeholder={"Description"}
          name={"description"}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleChange(e)
          }
          value={personalInfo.description}
        />
      </section>
    </>
  );
};
