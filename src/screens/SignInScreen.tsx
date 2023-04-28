import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, StatusBar, Alert, Pressable} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export function SignInScreen() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoginAttempted, setIsLoginAttempted] = useState(false);

  const navigation = useNavigation();
  

  const handleGoToHome = () => {
    setIsLoginAttempted(true);
    if (email !== '' && password !== '') {
      navigation.navigate('Home');
    }
  };
  const handleGoToSighUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" backgroundColor={'#2D2D2D'}/>
      <View>
        <Text style={styles.welcomeText}> WELCOME </Text>
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

      <View style={[styles.inputContainer, { borderWidth: 1.5, borderColor: password === '' && isLoginAttempted ? 'red' : '#656262' }]}>
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

        
        <View style={styles.bottomContainer}>
          <View style={styles.separator} />
            <View style={styles.textContainer}>
                  <Text style={styles.SignUpText}>Don't have an account? </Text>
                <Pressable onPress={handleGoToSighUp}>
                  <Text style={styles.SignUpButton}>SignUp</Text>
                </Pressable>
             </View>
        </View>

    </View>
  );
}

export type RootStackParamList = {
  
};
export const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SignUpText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  SignUpButton: {
    color: '#D78F3C',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 5,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    borderBottomWidth: 1,
    width: '50%',
    color: '#D78F3C',
    marginTop: 150,
  },
  container: {
    headerShown: false,
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
    marginTop: 100,
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
    fontSize: 18,
  },
});

export default SignInScreen;