import React, { useState } from "react";
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
  Keyboard,
  Platform,
} from "react-native";

const AuthScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const SwitchMode = () => {
    setCreds({ email: "", password: "" });
    setIsLogin(!isLogin);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <View style={styles.imgContainer}>
            <Image resizeMode="cover" source={require("../assets/logo.png")} />
          </View>
          <View style={styles.formContainer}>
            {isLogin ? (
              <>
                <TextInput
                  style={styles.input}
                  value={creds.email}
                  placeholder="email"
                  onChangeText={(email) =>
                    setCreds((creds) => ({ ...creds, email: email }))
                  }
                />
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  value={creds.password}
                  placeholder="password"
                  onChangeText={(password) =>
                    setCreds((creds) => ({ ...creds, password: password }))
                  }
                />
              </>
            ) : (
              <>
                <Text style={styles.text}>
                  To reset your password please enter your email address below
                  and click submit
                </Text>
                <TextInput
                  secureTextEntry={false}
                  style={styles.input}
                  value={creds.email}
                  placeholder="email"
                  onChangeText={(email) =>
                    setCreds((creds) => ({ ...creds, email: email }))
                  }
                />
              </>
            )}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {isLogin ? "Login" : "Submit"}
              </Text>
            </TouchableOpacity>
            <View style={styles.bottom}>
              <Text
                style={[styles.bottomButtons, styles.left]}
                onPress={() => SwitchMode()}
              >
                {isLogin ? "Forgotten password?" : "Back to login"}
              </Text>
              <Text
                style={[styles.bottomButtons, styles.right]}
                onPress={() => navigation.navigate("SignUp")}
              >
                Sign Up
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 17,
    marginBottom: 20,
  },
  bottom: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bottomButtons: {
    fontSize: 18,
    color: "blue",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
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
    top: 50,
  },
});

export default AuthScreen;
