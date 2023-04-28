import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { styles } from './SignInScreen';
import { Pressable } from 'react-native';

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();
  
  const handleGoToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.inputContainer}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Pressable style={styles.button} onPress={handleGoToHome}>
        <Text style={styles.buttonText}>Sign Up</Text >
      </Pressable>
      </View>
  );
};

export default SignUpScreen;

