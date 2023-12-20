import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
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

export default function Signup() {
  const navigation = useNavigation();

  const showAlert = (username, email, password) => {
    const isUsernameValid = username.length > 0;
    const isEmailValid = email.includes("@") && email.includes(".");
    const isPasswordValid = password.length >= 6;

    if (!isUsernameValid) {
      Alert.alert("Invalid Username", "Please enter a valid username.", [
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
          },
          style: "default",
        },
      ]);
    } else if (!isEmailValid) {
      Alert.alert("Invalid Email", "Please enter a valid email address.", [
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
          },
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
            onPress: () => {
              console.log("OK Pressed");
            },
            style: "default",
          },
        ]
      );
    } else {
      Alert.alert(
        "Signup Successful",
        "Your account has been created successfully!",
        [
          {
            text: "OK",
            onPress: () => {
              console.log("OK Pressed");
            },
            style: "default",
          },
        ]
      );
    }
  };

  const [display, setDisplay] = useState("visible");

  const onPressHandler = () => {
    navigation.navigate("Login");
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ScrollView style={styles.container}>
        <View
          style={[styles.screen, { display: display, backgroundColor: "#fff" }]}
        >
          <View style={styles.header}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.title}>Create Account</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              value={username}
              placeholder="Name"
              style={styles.input}
              onChangeText={setUsername}
            />
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                showAlert(username, email, password);
              }}
            >
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.text}>
              Already Have An Account?{" "}
              <Text style={styles.textLink} onPress={onPressHandler}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 2,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 130,
    height: 130,
    marginTop: 100,
    marginBottom: 2,
    resizeMode: "contain",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#600EE6",
    fontFamily: "sans-serif-condensed",
  },
  form: {
    flex: 4,
    width: "80%",
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: "100%",
    padding: 15,
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    height: 50,
    width: "100%",
    marginTop: 35,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#600EE6",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "sans-serif-condensed",
  },
  text: {
    fontSize: 16,
    fontFamily: "sans-serif-condensed",
  },
  textLink: {
    fontSize: 16,
    color: "#600EE6",
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
  },
});