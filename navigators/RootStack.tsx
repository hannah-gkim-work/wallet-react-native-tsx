import React, { FunctionComponent } from "react";
//nav
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Greeting from "../components/Header/Greeting";
import Profle from "../components/Header/Profle";
import { colors } from "../components/colors";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            borderColor: colors.graylight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Coby!"
                subText="Welcome back"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;
