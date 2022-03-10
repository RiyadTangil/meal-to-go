import React from "react";
import { Text } from "react-native";
import styled, { useTheme } from "styled-components/native";
const Home = () => {
  const {colors} = useTheme();
  return <Text style={{ color: colors.text.error }}>this is testing</Text>;
};

export default Home;
