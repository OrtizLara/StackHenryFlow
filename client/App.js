import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Home from "./screens/Home"
import Login from "./screens/Login"
import Register from "./screens/Register"
import firebase from "../database/firebase"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}