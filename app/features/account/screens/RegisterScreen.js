import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import Spacer from "../../../components/Spacer";
import Text from "../../../components/Text";
import { AuthContext } from "../../../services/authentication/AuthenticationContext";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../styles/account";
// import useAuth from "../../../services/authentication/useAuth";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { isLoading, error } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large"  position="top">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large" position="top"> 
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" position="top">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() =>
                useAuth.register(email, password, repeatedPassword)
              }
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large" position="top">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default RegisterScreen;
