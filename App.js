import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  // useEffect(() => {
  //   fetch("https://reactnative.dev/movies.json")
  //     .then((response) => response.json())
  //     .then((json) => setData(json.movies))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ViewImage" component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
