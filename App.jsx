import React from 'react';
import {View} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import ContactScreen from './src/screens/ContactScreen';
import ContactDetailScreen from './src/screens/ContactDetailScreen';

const App = () => {
  return (
    <View>
      <LoginScreen />
      {/* <ContactScreen /> */}
      {/* <ContactDetailScreen /> */}
    </View>
  );
};

export default App;
