import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../../config/CustomButton';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />

      <Text style={styles.subHeading}>Grounded in social.</Text>
      <Text style={styles.subHeading}>Steeped in culture.</Text>

      <Text style={styles.subHeading}> </Text>
      

      <CustomButton title="Login" onPress={() => navigation.navigate('Login')} />
      <CustomButton title="Register" onPress={() => navigation.navigate('Registration')} />
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
  logo: {
    height: 300,
    width: 300,
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    color: '#4e2b1c',
    marginBottom: 0,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default LandingPage;
