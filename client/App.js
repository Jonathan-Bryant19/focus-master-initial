import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/hello', {
      method: "GET",
      credentials: "include"
    })
      .then((r) => r.json())
      .then((data) => setCount(data.count))
  }, [])

  function handleclick() {
    fetch('http://localhost:3000/hello', {
      method: "GET",
      credentials: "include"
    })
      .then((r) => r.json())
      .then((data) => setCount(data.count))
  }

  return (
    <View style={styles.container}>
      <Text>Page Count: {count}</Text>
      <Button
        title="Press me"
        onPress={() => handleclick()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});