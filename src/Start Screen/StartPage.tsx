import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { StartScreenNavigationProp } from "../NavigationProps/NavigationProps";

interface Prop {
  navigation: StartScreenNavigationProp;
}

export default function StartPage({ navigation }: Prop ) {
  
  function goToLogIn() {
    navigation.navigate("LogIn");
    console.log("Go to login");
  }

  function goToSignUp() {
    navigation.navigate("SignUp");
    console.log("Go to sign up");
  }
  
  return (
    <View style={styles.centereddiv}>
      <Text>
        This is the Start page. 
      </Text>
      <TouchableOpacity style={styles.loginbutton} onPress={goToLogIn}>
        <Text>
          Log In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupbutton} onPress={goToSignUp}>
        <Text>
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  centereddiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loginbutton: {
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#DDDDDD",
  }, 

  signupbutton: {
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#DDDDDD",
  }

})