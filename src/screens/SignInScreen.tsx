import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, StatusBar } from 'react-native';
import { HomeScreen } from './HomeScreen';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

export function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" backgroundColor={'#2D2D2D'}/>
      <View>
        <Text style={styles.welcomeText}> Welcome </Text>
      </View>

      <View style={styles.inputContainer}>
      <MaterialIcons name="email" size={24} color="#D78F3C" />
      <TextInput
        style={styles.inputContainer}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#A8A8A8"/>
      </View>
      <View style={styles.inputContainer}>
      <AntDesign name="lock" size={24} color="#D78F3C" />
      <TextInput
        style={styles.inputContainer}
        placeholder="Your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#A8A8A8"/>
      </View>

      <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2D2D',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#656262',
    width: '85%',
    height: 50,
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  welcomeText: {
    marginTop: -120,
    marginBottom: 180,
    color: '#D78F3C',
    fontWeight: 'bold',
    fontSize: 40,
  },
  button: {
    backgroundColor: '#D78F3C',
    width: '85%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SignInScreen;