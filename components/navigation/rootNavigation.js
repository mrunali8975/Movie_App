
import {View ,Text,ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import {useSelector, useDispatch} from 'react-redux';
import {Init} from '../../src/action';
import {rootstyles} from '../../utils/styles/rootNavigation';
import HomeScreen from '../../screens/Home/HomeScreen';
import { Image } from 'react-native';
const RootNavigation = () => {
  const token = useSelector(state => state.Reducers.authToken);
  // console.log("root navigation",token);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  if (loading) {
    return (
      <View style={rootstyles.loaderView}>
       <Image source={require('C:\Users\Admin\Desktop\React Native\Movie_App\assets\launc_icon.png')} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {
        token ?      <MainStack />
:      <MainStack />

      }
    </NavigationContainer>
  );
};
export default RootNavigation;
