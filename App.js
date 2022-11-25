//import liraries
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './components/navigation/rootNavigation';
import Registration from './screens/Signup/Registration';
import { store } from './src';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
// create a component
const App = () => {
  useEffect(() => {
    // to hide launch screen
    
      SplashScreen.hide();
    
  }, []);
  return (
    <Provider store={store}>
      <PaperProvider>
        <RootNavigation />
        </PaperProvider>
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
});

//make this component available to the app
export default App;
