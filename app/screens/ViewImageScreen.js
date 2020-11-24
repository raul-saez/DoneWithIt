import React from "react";
import { Button, Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
      <View style={[styles.closeIcon, styles.icons]}></View>
      <View style={[styles.deleteIcon, styles.icons]}></View>
      <View style={styles.buttonBackContainer}>
        <Button
          title="Go Back"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: 50,
    height: 50,
    top: 40,
    position: "absolute",
  },
  closeIcon: {
    backgroundColor: colors.primaryColor,
    left: 30,
    zIndex: 1,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    backgroundColor: colors.secondaryColor,
    right: 30,
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  buttonBackContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
});

export default ViewImageScreen;
