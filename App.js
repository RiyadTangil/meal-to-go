import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./app/infrastructure/theme";
import Home from "./screens/Home";
import AuthContextProvider from "./app/services/authentication/AuthenticationContext";
import Navigation from "./app/navigation";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          {/* <Home /> */}
          <Navigation />
        </AuthContextProvider> 
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
