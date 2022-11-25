/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Login} from '../../src/action';
import {styles} from './LoginStyle';
// import { useTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  // const { colors } = useTheme();
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setusernameError] = useState('');
  
  // const { signIn } = React.useContext(AuthContext);
  const handleOnchangeText = (value, fieldname) => {
    setPasswordError('');
    setusernameError('');
    data.password;
    data.username;
    setData({...data, [fieldname]: value});
  };

  const passwordValidation = val => {
    if (val.length == 0) {
      setPasswordError('Password is required');

      return false;
    } else {
      return true;
    }
  };
  const usernameValidation = val => {
    console.log(val);
    var usernameRegex = /^[a-z0-9_\.]+$/;
    if (val.length > 3 && usernameRegex.test(val)) {
      return true;
    } else {
      setusernameError('User name should containt a-z,A-Z,0-9,and underscore');
      return false;
    }
  };
  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length > 0) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Login(data.username, data.password,navigation));
  };
    const loginAuthentication = async () => {
        if (usernameValidation(data.username) && passwordValidation(data.password))
        {
          try {
                const jsonValue = await AsyncStorage.getItem(
                  data.username + data.password,
            );
                return jsonValue !== null ? submit() : alert('Invalid user');
                //  value!=null? submit() : alert('value is not read in asynchstore')
              } catch (e) {
                console.log('error in reading data',e);
                // getAllKeys();
              }
        } else
            {
                console.log('error in validation')
      }
      return false
   
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#282A3A" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer, {}]}>
        <Text style={[styles.text_footer, {}]}>Username</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'#fff'} size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={[styles.textInput, {}]}
            autoCapitalize="none"
            onChangeText={val => handleOnchangeText(val, 'username')}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
        </View>
        {!usernameError ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              {usernameError}
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={'#fff'} size={20} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput, {}]}
            autoCapitalize="none"
            onChangeText={val => handleOnchangeText(val, 'password')}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#fff" size={20} />
            ) : (
              <Feather name="eye" color="#fff" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {!passwordError ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
             {passwordError}
            </Text>
          </Animatable.View>
        )}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => loginAuthentication()}>
            <LinearGradient
              colors={['#282A3A', '#7F8487']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={[
              styles.signIn,
              {
                borderColor: '#6B728E',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;
