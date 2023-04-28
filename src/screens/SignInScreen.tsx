import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, StatusBar, Alert, Pressable} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppRouter from '../routes/Router';

export function SignInScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation();

  const handleGoToHome = () => {
    navigation.navigate('Home');
  };
  const handleGoToSighUp = () => {
    navigation.navigate('SignUp');
  };

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

        <Pressable style={styles.button} onPress={handleGoToHome}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>

      <View>
        <Pressable onPress={handleGoToSighUp}>
          <Text>SignUp</Text>
        </Pressable>
      </View>

    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2D2D',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#656262',
    width: '90%',
    height: 50,
    borderRadius: 25,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  welcomeText: {
    marginTop: -130,
    marginBottom: 190,
    color: '#D78F3C',
    fontWeight: 'bold',
    fontSize: 40,
  },
  button: {
    backgroundColor: '#D78F3C',
    width:'90%',
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