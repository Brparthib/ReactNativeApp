import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthContext from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import ContactListScreen from '../screens/ContactListScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';
import { ActivityIndicator, View } from 'react-native';


const Stack = createNativeStackNavigator();

const Route = () => {
  const {isLoggedIn, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#FB5200" />
      </View>
    );
  }
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
