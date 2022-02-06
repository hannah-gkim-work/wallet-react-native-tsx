import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

//custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";

const HomeContianer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  return (
    <HomeContianer>
      <StatusBar style="dark" />
    </HomeContianer>
  );
};

export default Home;
