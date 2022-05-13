import React from 'react';
import { Education, CV } from '../../cvInterface';
import { Input } from './Input';

interface PersonEducationProps {
  personEducation: Education;
  setPersonEducation: React.Dispatch<React.SetStateAction<CV>>;
}

export const PersonEducation = ({
  personEducation,
  setPersonEducation,
}: PersonEducationProps) => {
  const deleteEducation = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setPersonEducation((prevState) => {
      const newExperienceArr = prevState.education.filter(
        (education) => education.id !== personEducation.id
      );

      return { ...prevState, education: [...newExperienceArr] };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newEducation = {
      ...personEducation,
      [e.target.name]: e.target.value,
    };

    setPersonEducation((prevState) => {
      const newEducationArr = prevState.education;
      newEducationArr.forEach((education, index) => {
        if (education.id === personEducation.id) {
          newEducationArr[index] = newEducation;
        }
      });

      return { ...prevState, education: newEducationArr };
    });
  };

  return (
    <section className='form-component' data-id={personEducation.id}>
      <Input
        type={'text'}
        placeholder={'University Name'}
        name={'universityName'}
        onChange={(e) => handleChange(e)}
        value={personEducation.universityName}
      />
      <Input
        type={'text'}
        placeholder={'City'}
        name={'city'}
        onChange={(e) => handleChange(e)}
        value={personEducation.city}
      />
      <Input
        type={'text'}
        placeholder={'Degree'}
        name={'degree'}
        onChange={(e) => handleChange(e)}
        value={personEducation.degree}
      />
      <Input
        type={'text'}
        placeholder={'Subject'}
        name={'subject'}
        onChange={(e) => handleChange(e)}
        value={personEducation.subject}
      />
      <Input
        type={'text'}
        placeholder={'From'}
        name={'from'}
        onChange={(e) => handleChange(e)}
        value={personEducation.from}
      />
      <Input
        type={'text'}
        placeholder={'To'}
        name={'to'}
        onChange={(e) => handleChange(e)}
        value={personEducation.to}
      />
      <button onClick={deleteEducation}>Delete</button>
    </section>
  );
};
