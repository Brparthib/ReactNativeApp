import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthContext from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import ContactListScreen from '../screens/ContactListScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';

const Stack = createNativeStackNavigator();

const Route = () => {
  const {isLoggedIn} = useContext(AuthContext);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="ContactList" component={ContactListScreen} />
          <Stack.Screen name="ContactDetails" component={ContactDetailScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Route;
