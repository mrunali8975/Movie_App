import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { Avatar } from 'react-native-paper';
// import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Avatar } from '../../components/CustomAvatar';
import { ImageOrVideo } from "react-native-image-crop-picker";
import { useDispatch } from 'react-redux';
import { styles } from './ProfileScreenStyle';
import {Logout} from '../../src/action';
const ProfileScreen = ({ route, navigation }) => {
  const { user } = route.params;
  
  const dispatch = useDispatch();
  const userLogout = () => {
   dispatch(Logout(navigation))
  };
  return (
    <View style={styles.container}>
  
      <Avatar.Image size={80} source={require(`../../assets/userpic_99.jpg`)} style={styles.avtarImage} />
      {/* <MaterialCommunityIcons name='camera-plus' size={20}  color={'white'}/> */}
      <Text style={styles.userNameText}>{user.username}</Text>
      <Text style={styles.phoneEmailText}>{user.phone}</Text>
      <Text style={styles.phoneEmailText}>{ user.email}</Text>
      <View
        style={styles.footerView}>
       
          <MaterialCommunityIcons
            name="logout"
            color={'white'}
            size={35}
            onPress={() => userLogout()}
          />
        
      </View>
    </View>
  )
}

export default ProfileScreen