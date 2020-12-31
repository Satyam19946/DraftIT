import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import { TextInput } from 'react-native-gesture-handler';

type FormData = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}

export default function SignUpPage() {
  const { control, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
    axios.post('http://localhost:3000/user/add', {
      "username": data.username,
      "password": data.password,
      "firstName": data.firstName,
      "lastName": data.lastName,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    })
  }

  return (
    <View style={styles.centereddiv}>
      <Controller style={styles.textinput}
        as={TextInput}
        name="username"
        control={control}
        placeholder="Enter User Name"
      />

      <Controller style={styles.textinput}
        as={TextInput}
        name="password"
        control={control}
        placeholder="Enter Password"
      />

      <Controller style={styles.textinput}
        as={TextInput}
        name="firstName"
        control={control}
        placeholder="Enter First Name"
      />

      <Controller style={styles.textinput}
        as={TextInput}
        name="lastName"
        control={control}
        placeholder="Enter Last Name"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  centereddiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  textinput: {
    padding: 10,
    margin: 10,
    height: 40,
  }
})