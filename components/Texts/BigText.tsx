import React, { FunctionComponent } from "react";
import styled from "styled-components";
//colors
import { colors } from "../colors";
//types
import { TextProps } from "./types";

const BigText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default BigText;

const StyledText = styled.Text`
  font-size: 37px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato_700Bold;
`;
