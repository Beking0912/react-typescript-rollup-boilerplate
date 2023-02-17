import React from "react";

import { SumProps } from "./Sum.types";
import StyledSum from "./styles";

const Sum: React.FC<SumProps> = ({ a, b }) => {
  const sum = a + b;
  return <StyledSum>{a} + {b} = {sum}</StyledSum>;
};

export default Sum;
