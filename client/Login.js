import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

export default function Login() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/hello', {
      method: "GET",
      credentials: "include"
    })
      .then((r) => r.json())
      .then((data) => setCount(data.count))
  }, [])

  const Stack = createStackNavigator();

  return (
      <View style={styles.container}>
        <Text style={styles.heading}>Focus Master</Text>
        <TextInput
          style={styles.input}
          label="Email"
          placeholder="Type your email here"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          label="Password"
          placeholder="Type your password here"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button
          onPress={() => {}}
          title="Login"
          color="blue"
          accessibilityLabel="Login button"
        />
        <Button
          onPress={() => {}}
          title="Sign Up"
          color="red"
          accessibilityLabel="Sign Up button"
        />
        {/* <TextInput
          style={styles.input}
          label="Confirm password"
          placeholder="Re-type your password here"
          onSubmitEditing={(e) => {
            confirmPasswordsMatch(e.nativeEvent.text, password);
          }}
          secureTextEntry
        /> */}
        <StatusBar style="auto" />
      </View>
  );
}

function confirmPasswordsMatch(confirmationPassword, originalPassword) {
  if (confirmationPassword !== originalPassword) {
    alert('Passwords do not match, please try again.');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 70,
    fontWeight: 'bold',
    justifyContent: 'flex-start'
  },
  input: {
    height: 40,
    width: 500,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});