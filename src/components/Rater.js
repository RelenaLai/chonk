import React from "react";
import { Result } from "./styled";

const Rater = ({ rating }) => (
  <Result>
    <p>{rating}</p>
  </Result>
);

export default Rater;
