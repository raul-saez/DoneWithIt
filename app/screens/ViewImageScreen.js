import React from "react";
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.closeIcon, styles.icons]}></View>
      <View style={[styles.deleteIcon, styles.icons]}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
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
  },
});

export default ViewImageScreen;
