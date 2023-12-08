import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CustomButton from '../../config/CustomButton';

const AccountRecoveryPage = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  const handleAccountRecovery = () => {
    if (email.trim() !== '') {
      // Redirect to the Login page upon successful account recovery
      navigation.navigate('Login');
    } else {
      // Display an error message for empty email field
      alert('Please enter your email');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Recovery</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <CustomButton title="Recover Account" onPress={handleAccountRecovery} />
      <CustomButton title="Go back to Login" onPress={() => navigation.navigate('Login')} />
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
    marginBottom: 20,
    color: '#4e2b1c',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#4e2b1c',
    borderRadius: 5,
  },
});

export default AccountRecoveryPage;
