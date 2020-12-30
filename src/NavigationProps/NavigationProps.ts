import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Start: undefined;
  LogIn: undefined;
  SignUp: undefined;
};

export type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Start'
  >;

export type LogInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LogIn'
  >;

  export type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;