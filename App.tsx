import { StatusBar } from "expo-status-bar";
//custom font
import AppLoading from "expo-app-loading";
// import { useFonts } from "expo-font";
import {
  useFonts,
  Lato_700Bold,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import Welcome from "./screens/Welcome";

export default function App() {
  let [fontsLoaded] = useFonts({
    // "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    // "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Welcome />;
}
