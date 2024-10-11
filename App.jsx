import React from 'react';
import {View} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import ContactListScreen from './src/screens/ContactListScreen';
import ContactDetailScreen from './src/screens/ContactDetailScreen';

const App = () => {
  return (
    <View className="bg-white">
      {/* <LoginScreen /> */}
      <ContactListScreen />
      {/* <ContactDetailScreen /> */}
    </View>
  );
};

export default App;
