import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Gohome } from './GoHome';
import { Auth } from './Auth';

export function Router() {
    const auth = false;
  return (
    <NavigationContainer>
      {auth ? <Gohome/> : <Auth/>}
    </NavigationContainer>
  );
}