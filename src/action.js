import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }
}
export const userData = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    let data = await AsyncStorage.getItem(token);
    if (data !== null) {
      var jsonData=JSON.parse(data)
      dispatch({
        type: 'USER',
        payload: jsonData,
      })
    }
    else {
      console.log('error in user data')
    }
  }
}

export const Login = (username, password,navigation) => {
  return async dispatch => {
    let token = null;
    // console.log('token stored',username ,password);
    if (username !== null && password !== null) {
      token = username + password;
      // here we can use login api to get token and then store it
      await AsyncStorage.setItem('token', token);
      navigation.navigate('HomeScreen')
    }
    dispatch({
      type: 'LOGIN',
      payload: token,
    })
  }
}



export const Logout = (navigation) => {
  return async dispatch => {
    await AsyncStorage.removeItem('token');
    navigation.replace('Login')
    dispatch({
      type: 'LOGOUT'
    })
  }
}