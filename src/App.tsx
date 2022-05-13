import React from "react";
import "./index.css";
import { Header } from "./components/Header";
import { Content } from "./components/Content";

export const App = () => {
  return (
    <>
      <Header title="React CV App" />
      <Content />
    </>
  );
};
