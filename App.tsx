//custom font
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Lato_700Bold,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
//React Navigator
import RootStack from "./navigators/RootStack";
import Welcome from "./screens/Welcome";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <RootStack />;
}
