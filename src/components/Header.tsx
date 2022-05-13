import React from "react";
import "../style/Header.css";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};
