import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login'
import Signup from './Signup'

export default function App() {
  // const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch('http://localhost:3000/hello', {
  //     method: "GET",
  //     credentials: "include"
  //   })
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count))
  // }, [])

  const test = "test"

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Signup" component={Signup} setUser={setUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}