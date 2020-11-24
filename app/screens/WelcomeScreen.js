import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={[styles.buttonContainer, styles.buttons]}>
        <Button
          title="Let's go!"
          style={styles.buttons}
          onPress={() => navigation.navigate("ViewImage")}
        ></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    height: 70,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: colors.primaryColor,
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default WelcomeScreen;
