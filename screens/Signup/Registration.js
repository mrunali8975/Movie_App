/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './RegistrationStyle';
const Registration = ({navigation}) => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setusernameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [confirmpasswordError, setConfirmPasswordError] = useState('');
  const [userKey, setUserKey] = useState('');
  const [data, setData] = React.useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const {email, password} = data;
  // This function handle email and password value
  const handleOnchangeText = (value, fieldname) => {
    setPasswordError('');
    setEmailError('');
    setConfirmPasswordError('');
    setPhoneError('');
    setusernameError('');
    data.email;
    data.password;
    data.confirm_password;
    data.phone;
    data.username;
    data.confirm_password;
    setData({...data, [fieldname]: value});
  };

  const saveData = async (key, data) => {
    try {
      await AsyncStorage.setItem(`${key}`, JSON.stringify(data));
      alert('data successfully save');
      // getAllKeys();
      navigation.navigate('Login');
    } catch (e) {
      console.log('failed save the data');
      alert('Failed to save the data to the storage');
    }
  };
  // This function called when login button pressed
  const submitForm = async () => {
    if (
      usernameValidation(data.username) &&
      phoneNumberValidation(data.phone) &&
      isValidEmail(data.email) &&
      passwordValidation(data.password) &&
      confirmPasswordValidation(data.confirm_password)
    ) {
      var key = data.username + data.password;
      setUserKey(key);
      await saveData(key, data);
    } else {
      console.log(
        'usernmae n phone n email wrong',
        data.username,
        data.phone,
        data.email,
        data.confirm_password,
      );
      // Alert.alert('Warning', "Please Fill All required data");
      return false;
    }
  };
  // This function valid email enter by user
  const isValidEmail = value => {
    let expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (value.length !== 0 && expression.test(value)) {
      return true;
    } else {
      setEmailError('Valid email is required', expression.test());
      return false;
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
  const phoneNumberValidation = val => {
    var phoneRegex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (phoneRegex.test(val)) {
      return true;
    } else {
      setPhoneError('Number should containe valid phone number');
      return false;
    }
  };

  const passwordValidation = val => {
    if (val.length == 0) {
      setPasswordError('Password is required');

      return false;
    } else {
      return true;
    }
  };
  const confirmPasswordValidation = val => {
    if (val === data.password && val.length != 0) {
      return true;
    } else {
      setConfirmPasswordError('Confirm password should match with password');
      return false;
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#fff" size={20} />
            <TextInput
              placeholder="user_123"
              placeholderTextColor={'grey'}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleOnchangeText(val, 'username')}
            />
          </View>
          {usernameError ? (
            <Text style={{color: 'red'}}>{usernameError}</Text>
          ) : null}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="email-outline"
              color="#fff"
              size={20}
            />
            <TextInput
              placeholder="username@gmail.com"
              placeholderTextColor={'grey'}
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={val => handleOnchangeText(val, 'email')}
            />
          </View>
          {emailError ? <Text style={{color: 'red'}}>{emailError}</Text> : null}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Phone No
          </Text>
          <View style={styles.action}>
            <Feather name="phone" color="#fff" size={20} />
            <TextInput
              placeholder="7054869521"
              placeholderTextColor={'grey'}
              style={styles.textInput}
              keyboardType="number-pad"
              autoCapitalize="none"
              onChangeText={val => handleOnchangeText(val, 'phone')}
            />
          </View>
          {phoneError ? <Text style={{color: 'red'}}>{phoneError}</Text> : null}
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
            <Feather name="lock" color="#fff" size={20} />
            <TextInput
              placeholder="........"
              placeholderTextColor={'grey'}
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleOnchangeText(val, 'password')}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={{color: 'red'}}>{passwordError}</Text>
          ) : null}

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#fff" size={20} />
            <TextInput
              placeholder="......."
              placeholderTextColor={'grey'}
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleOnchangeText(val, 'confirm_password')}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {confirmpasswordError ? (
            <Text style={{color: 'red'}}>{confirmpasswordError}</Text>
          ) : null}
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              submitForm();
            }}>
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
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Registration;
