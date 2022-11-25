import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import SignInScreen from '../../screens/Login/Login';
import MainStack from './MainStack';
import HomeScreen from '../../screens/Home/HomeScreen';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

export const MyTabs = () => {
    const token = useSelector(state => state.Reducers.authToken);

  return (
      <Tab.Navigator
        initialRouteName='home'
          screenOptions={{
              headerShown: true,
              tabBarStyle: {
                  backgroundColor:'#08d4c4'
              }
      }}
      >
          {/* <Tab.Screen name="profile" component={ProfileScreen} />
          <Tab.Screen name="Login" component={SignInScreen} /> */}
          <Tab.Screen name="home" component={MainStack}
              options={{
                  tabBarShowLabel:false,
                headerStyle: {
                      backgroundColor: '#08d4c4',
                 
                  },
                  tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={"white"} size={35} />
          ),
          }}
              

          />
    </Tab.Navigator>
  );
}