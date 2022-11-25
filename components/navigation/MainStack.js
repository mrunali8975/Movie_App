import HomeScreen from '../../screens/Home/HomeScreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import LinearGradient from 'react-native-linear-gradient';
import DetailsScreen from '../../screens/Details/DetailsScreen';
import { MyTabs } from './BottomTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../../screens/Login/Login';
const Stack = createNativeStackNavigator();
import Registration from '../../screens/Signup/Registration';
import SearchScreen from '../../screens/Search/SearchScreen';
import { color } from '../../utils/Colors';
export default function () {
  return (
    <>
      <Stack.Navigator
      initialRouteName='HomeScreen'
      >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          
          // headerShown: true,
          headerBackVisible: false,
          // headerBackground: () => {
          //   <LinearGradient
          //     angle={90}
          //     useAngle={true}
          //     colors={['#08d4c4', '#01ab9d']}
          //     style={{flex:1}}
          //   />;
          // },
          headerStyle: {
                      backgroundColor: color.header,},
          
        
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerBackVisible: true,
          headerTintColor:'white',
     headerTitleAlign:'center',
     headerTitleStyle:{fontSize:20},
          headerStyle: {
          
           backgroundColor: color.header} ,
        }}
      />
       <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          // headerShown: true,
          headerTintColor:'white',
          headerStyle: {
           backgroundColor: color.header,},
        }}
      />
      <Stack.Screen
          name="Login"
        component={SignInScreen}
          options={{
          headerShown: false,
          headerBackVisible: false,
        }}
        />
          <Stack.Screen
          name="Search"
        component={SearchScreen}
          options={{
            headerTintColor:'white',
            headerStyle: {
            backgroundColor: color.header,},
          // headerBackVisible:true,
            // headerShown: true,
          
          // headerBackVisible: false,
         
          // headerStyle: () => <View style={{backgroundColor: 'red'}}></View>,
        }}
        />
        <Stack.Screen
        name="Signup"
        component={Registration}
        options={{
          headerShown: false,
        }}
      />
      </Stack.Navigator>
      
    </>
  );
}
