import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  accKey: "",
};

const SignUpScreen = ({ navigation }) => {
  const [creds, setCreds] = useState(initialState);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <View
            style={[
              styles.imgContainer,
              { top: isKeyboardVisible ? -100 : 50 },
            ]}
          >
            <Image resizeMode="cover" source={require("../assets/logo.png")} />
          </View>
          <View style={styles.formContainer}>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              value={creds.name}
              placeholder="your name"
              onChangeText={(name) =>
                setCreds((creds) => ({ ...creds, name: name }))
              }
            />

            <TextInput
              style={styles.input}
              value={creds.email}
              placeholder="your email"
              onChangeText={(email) =>
                setCreds((creds) => ({ ...creds, email: email }))
              }
            />

            <TextInput
              style={styles.input}
              value={creds.password}
              placeholder="password"
              onChangeText={(password) =>
                setCreds((creds) => ({ ...creds, password: password }))
              }
            />

            <TextInput
              style={styles.input}
              value={creds.password}
              placeholder="confirm"
              onChangeText={(passwordConfirm) =>
                setCreds((creds) => ({
                  ...creds,
                  passwordConfirm: passwordConfirm,
                }))
              }
            />

            <TextInput
              style={styles.input}
              value={creds.accKey}
              placeholder="access key"
              onChangeText={(accKey) =>
                setCreds((creds) => ({ ...creds, accKey: accKey }))
              }
            />

            <Text style={styles.text}>
              By registering you are accepting the terms and conditions
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.bottom}>
              <Text
                style={styles.signin}
                onPress={() => navigation.navigate("Auth")}
              >
                Have an account? Sign in
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signin: {
    fontSize: 18,
    color: "blue",
    width: "100%",
    textAlign: "left",
  },
  text: { marginBottom: 20 },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "50%",
    backgroundColor: "tomato",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  formContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  imgContainer: {
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
});

export default SignUpScreen;
