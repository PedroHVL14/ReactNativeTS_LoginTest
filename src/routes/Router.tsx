import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppRouter() {
  return (
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false, headerTintColor: '#fff', headerStyle: { backgroundColor: '#2D2D2D' } }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{title: '', headerTintColor: '#fff', headerStyle: { backgroundColor: '#2D2D2D' } }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}