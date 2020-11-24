import React from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  // useEffect(() => {
  //   fetch("https://reactnative.dev/movies.json")
  //     .then((response) => response.json())
  //     .then((json) => setData(json.movies))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    // justifyContent: "center",
  },
});
