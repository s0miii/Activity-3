import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CustomButton from '../../config/CustomButton';

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
       if (username.trim() !== '' && password.trim() !== '') {
      // Non-empty username and password - navigate to Home
      navigation.navigate('Home');
    } else {
      // Display an error message for empty inputs
      alert('Please enter username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Login" onPress={handleLogin} />
      <CustomButton title="Register" onPress={() => navigation.navigate('Registration')} />
      <CustomButton title="Forgot Password?" onPress={() => navigation.navigate('AccountRecovery')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e9e2d6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4e2b1c',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#4e2b1c',
    borderRadius: 5,
    color: '#4e2b1c',
  },
});

export default LoginPage;
