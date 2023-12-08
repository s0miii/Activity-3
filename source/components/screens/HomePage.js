import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomButton from '../../config/CustomButton';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <CustomButton title="Logout" onPress={() => navigation.navigate('Landing')} />
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
});

export default HomePage;
