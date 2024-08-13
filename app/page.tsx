import React from "react";
import Company from "./pages/Company";
import Button from "./pages/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee , faEye , faSave } from "@fortawesome/free-solid-svg-icons";


export default function page() {
  return (
    <>
      <h1>bài 3</h1>
      <h2>Tran Quang Linh </h2>
      <h1>Bài 4</h1>
      <Company />
      <h1>Bài 5</h1>
      <Button />
      <h1>Bài 7+8</h1>
      <h1>bài 10</h1>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faEye} />
      <FontAwesomeIcon icon={faSave} />

    </>
  );
}
