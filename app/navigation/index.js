import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../services/authentication/AuthenticationContext";
import AppNavigator from "./AppNavigator";
import AccountNavigator from "./AccountNavigator";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    
    <NavigationContainer>
      {/* <AccountNavigator /> */}
      <AppNavigator /> 
      {/* {user ? <AppNavigator /> : <AccountNavigator />} */}
    </NavigationContainer>
  );
};

export default Navigation;
