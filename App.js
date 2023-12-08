import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

// Import your custom components for each page
import LandingPage from './source/components/screens/LandingPage';
import LoginPage from './source/components/screens/LoginPage';
import RegistrationPage from './source/components/screens/RegistrationPage';
import AccountRecoveryPage from './source/components/screens/AccountRecoveryPage';
import HomePage from './source/components/screens/HomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingPage} options={{ title: 'Landing' }} />
          <Stack.Screen name="Login" component={LoginPage} options={{ title: 'Login' }} />
          <Stack.Screen name="Registration" component={RegistrationPage} options={{ title: 'Registration' }} />
          <Stack.Screen name="AccountRecovery" component={AccountRecoveryPage} options={{ title: 'Account Recovery' }} />
          <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
