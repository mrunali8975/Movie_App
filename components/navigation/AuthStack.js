import SignInScreen from '../../screens/Login/Login';
import Registration from '../../screens/Signup/Registration';
import HomeScreen from '../../screens/Home/HomeScreen';
export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name="Home"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Registration}
        options={{
          headerShown: false,
        }}
      />
    </>
  );
}
