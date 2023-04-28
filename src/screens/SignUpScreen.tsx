import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, StatusBar, Pressable} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { styles } from './SignInScreen';
import {  } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const navigation = useNavigation();
  const [isLoginAttempted, setIsLoginAttempted] = useState(false);
  
  const handleGoToHome = () => {
    setIsLoginAttempted(true);
    if (email !== '' && password !== '' && username !== '') {
      navigation.navigate('Home');
    }
  };

  const handleGoToSighIn = () => {
    navigation.navigate('SignIn');
  };


  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" backgroundColor={'#2D2D2D'}/>
      <View>
        <Text style={stylesSU.SignUpText}> SIGN UP </Text>
      </View>

      <View style={[styles.inputContainer, { borderWidth: 1.5, borderColor: email === '' && isLoginAttempted ? 'red' : '#656262' }]}>
      <MaterialIcons name="email" size={24} color="#D78F3C" />
      <TextInput
        style={styles.inputContainer}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#A8A8A8"/>
      </View>
      
      <View style={[styles.inputContainer, { borderWidth: 1.5, borderColor: username === '' && isLoginAttempted ? 'red' : '#656262' }]}>
      <Ionicons name="person" size={24} color="#D78F3C" />
      <TextInput
        style={styles.inputContainer}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#A8A8A8"/>
      </View>

      <View style={[styles.inputContainer, { borderWidth: 1.5, borderColor: password === '' && isLoginAttempted ? 'red' : '#656262' }]}>
      <AntDesign name="lock" size={24} color="#D78F3C" />
      <TextInput
        style={styles.inputContainer}
        placeholder="Your Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#A8A8A8"
        />
      </View>

      <Pressable style={styles.button} onPress={handleGoToHome}>
        <Text style={styles.buttonText}>Sign Up</Text >
      </Pressable>

        <Text style={stylesSU.termsText}>I agree to the Terms and Conditions</Text>

      <View style={styles.bottomContainer}>
          <View style={styles.separator} />
            <View style={styles.textContainer}>
                  <Text style={styles.SignUpText}>Already have an account?</Text>
                <Pressable onPress={handleGoToSighIn}>
                  <Text style={styles.SignUpButton}>SignIn</Text>
                </Pressable>
             </View>
        </View>

      </View>

      
  );
};

const stylesSU = StyleSheet.create({
  SignUpText: {
    marginTop: 50,
    marginBottom: 90,
    color: '#D78F3C',
    fontWeight: 'bold',
    fontSize: 40,
  },
  termsText:{
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  termsTextF:{
    marginLeft: 5,
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  }
});

export default SignUpScreen;

