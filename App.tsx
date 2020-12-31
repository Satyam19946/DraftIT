import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartPage from "./src/Start Screen/StartPage";
import LogInPage from './src/Log In Screen/LogInPage';
import SignUpPage from './src/Sign Up Screen/SignUpPage';
import { RootStackParamList } from './src/NavigationProps/NavigationProps';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="LogIn" component={LogInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}