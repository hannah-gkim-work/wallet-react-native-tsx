import React, { FunctionComponent } from "react";
import styled from "styled-components";
//colors
import { colors } from "../colors";
//types
import { TextProps } from "./types";

const RegularText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default RegularText;

const StyledText = styled.Text`
  font-size: 15px;
  color: ${colors.white};
  text-align: left;
  font-family: Lato_700Bold;
`;
