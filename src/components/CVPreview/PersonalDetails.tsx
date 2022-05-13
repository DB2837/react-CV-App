import React from "react";
import { Detail } from "./Detail";
import "../../style/CVPreview/PersonalDetails.css";

type PersonalDetailsProps = {
  address: string;
  phoneNumber: string;
  email: string;
};

export const PersonalDetails = ({
  address,
  phoneNumber,
  email,
}: PersonalDetailsProps) => {
  return (
    <div className="personalDetails">
      <h3>Personal Details</h3>
      <Detail title="Address" value={address}></Detail>
      <Detail title="Phone Number" value={phoneNumber}></Detail>
      <Detail title="Email" value={email}></Detail>
    </div>
  );
};
