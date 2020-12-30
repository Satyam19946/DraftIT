import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import { TextInput } from 'react-native-gesture-handler';

type FormData = {
  firstName: string;
}

export default function SignUpPage() {
  const { control, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
    data = { firstName: "" };
  }

  return (
    <View style={styles.centereddiv}>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
        label="First Name"
      />
      <Button title="Submit" onPress={ handleSubmit(onSubmit)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  centereddiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})