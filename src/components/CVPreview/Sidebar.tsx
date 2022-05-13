import React from "react";
import "../../style/CVPreview/Sidebar.css";
import { PersonalDetails } from "./PersonalDetails";

type SidebarProps = {
  address: string;
  phoneNumber: string;
  email: string;
  photo: string;
};

export const Sidebar = ({
  address,
  phoneNumber,
  email,
  photo,
}: SidebarProps) => {
  return (
    <aside className="sidebar">
      <img src={photo} alt="CV Photo" width="200px" />
      <PersonalDetails
        address={address}
        phoneNumber={phoneNumber}
        email={email}
      />
    </aside>
  );
};
