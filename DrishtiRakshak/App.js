import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import CameraListScreen from "./screens/CameraListScreen";
import CameraDetails from "./screens/CameraDetails";
import AddNewDevice from "./screens/AddNewDevice";
import MapLocation from "./screens/MapLocation";




const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ title: "Sign Up" }}
        />
        <Stack.Screen
          name="CameraListScreen"
          component={CameraListScreen}
          options={{ title: "CCTVs" }}
        />
        <Stack.Screen
          name="CameraDetails"
          component={CameraDetails}
          options={{ title: "Camera Device Details" }}
        />
        <Stack.Screen
          name="AddNewDevice"
          component={AddNewDevice}
          options={{ title: "Adding New Device" }}
        />
        
        <Stack.Screen
          name="MapLocation"
          component={MapLocation}
          options={{ title: "MapLocation" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;