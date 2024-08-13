import React from "react";
import Company from "./pages/Company";
import Button from "./pages/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee , faEye , faSave } from "@fortawesome/free-solid-svg-icons";


export default function page() {
  return (
    <>
      <h2>Tran Quang Linh </h2>
      <Company />
      <Button />
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faEye} />
      <FontAwesomeIcon icon={faSave} />

    </>
  );
}
