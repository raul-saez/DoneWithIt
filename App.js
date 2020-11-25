import "react-native-gesture-handler";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AuthScreen from "./app/screens/AuthScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* TODO: 
        <Stack.Screen name="Actions" component={WelcomeScreen} />
        <Stack.Screen name="Goals" component={WelcomeScreen} />
        <Stack.Screen name="Results" component={WelcomeScreen} />
        <Stack.Screen name="Information" component={WelcomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
