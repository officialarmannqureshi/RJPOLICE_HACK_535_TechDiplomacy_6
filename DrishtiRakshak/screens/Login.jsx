import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const handleAlert = (email, password) => {
    const isEmailValid = email.includes("@") && email.includes(".");
    const isPasswordValid = password.length >= 6;

    if (!isEmailValid) {
      Alert.alert("Invalid Email", "Please enter a valid email address.", [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "default",
        },
      ]);
    } else if (!isPasswordValid) {
      Alert.alert(
        "Invalid Password",
        "Password must be at least 6 characters long.",
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
            style: "default",
          },
        ]
      );
    } else {
      Alert.alert("Login Successful", "Welcome back! You are now logged in.", [
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            navigation.navigate("CameraListScreen");
          },
          style: "default",
        },
      ]);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.screen}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.title}>Welcome Back</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          value={email}
          placeholder="Email"
          style={styles.input}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Text
          style={styles.forgotPassword}
          onPress={() => console.log("Forgot Password Pressed")}
        >
          Forgot Your Password?
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            handleAlert(email, password);
          }}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.noAccount}>
          Don't Have an Account?{" "}
          <Text
            style={styles.signupLink}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    color: "#600EE6",
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
  },
  form: {
    width: "80%",
    alignItems: "center",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    marginVertical: 15,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    fontFamily: "sans-serif-condensed",
  },
  forgotPassword: {
    width: "100%",
    fontSize: 14,
    textAlign: "right",
    color: "#600EE6",
    fontFamily: "sans-serif-condensed",
  },
  loginButton: {
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#600EE6",
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "sans-serif-condensed",
  },
  noAccount: {
    fontSize: 16,
    fontFamily: "sans-serif-condensed",
  },
  signupLink: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#600EE6",
  },
});