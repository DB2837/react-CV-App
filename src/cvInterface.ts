import { v4 as uuidv4 } from "uuid";
import emptyAvatar from "./assets/empty_avatar.png";

export type PersonalInfo = {
  firstName: string;
  lastName: string;
  qualificationTitle: string;
  photo: string;
  address: string;
  phoneNumber: string;
  email: string;
  description: string;
};

export type Experience = {
  id: string;
  position: string;
  company: string;
  city: string;
  from: string;
  to: string;
};

export type Education = {
  id: string;
  universityName: string;
  city: string;
  degree: string;
  subject: string;
  from: string;
  to: string;
};

export interface CV {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
}

export const emptyCV: CV = {
  personalInfo: <PersonalInfo>{
    firstName: "",
    lastName: "",
    qualificationTitle: "",
    photo: emptyAvatar,
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  experience: <Experience[]>[
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: <Education[]>[
    {
      id: uuidv4(),
      universityName: "",
      city: "",
      degree: "",
      subject: "",
      from: "",
      to: "",
    },
  ],
};

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem quam dolorum numquam harum suscipit quis. Laborum obcaecati reprehenderit dolorem sunt nemo, magnam cum aliquam sed, odio dolore, accusamus modi?
Expedita cum perspiciatis odit deleniti dignissimos doloribus dolorem necessitatibus dolore placeat molestiae, voluptates dolor beatae officiis magnam voluptatem ipsam, aliquid harum? Inventore 

`;

export const exampleCV: CV = {
  personalInfo: <PersonalInfo>{
    firstName: "John",
    lastName: "Doe",
    qualificationTitle: "Senior Web Developer",
    photo: emptyAvatar,
    address: "Example Street 10",
    phoneNumber: "123456789",
    email: "my.email@gmail.com",
    description: description,
  },
  experience: <Experience[]>[
    {
      id: uuidv4(),
      position: "Senior Web Developer",
      company: "Facebook Inc.",
      city: "Menlo Park",
      from: "2016",
      to: "Present",
    },
    {
      id: uuidv4(),
      position: "Junior Web Developer",
      company: "Google",
      city: "Zurich",
      from: "2013",
      to: "2016",
    },
  ],
  education: <Education[]>[
    {
      id: uuidv4(),
      universityName: "University of Oxford",
      city: "England",
      degree: "Master",
      subject: "Computer Science",
      from: "2009",
      to: "2013",
    },
  ],
};
