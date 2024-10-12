import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadLoginState = async () => {
      try {
        const storedLoginState = await AsyncStorage.getItem('isLoggedIn');
        if (storedLoginState !== null) {
          setIsLoggedIn(JSON.parse(storedLoginState));
        }
      } catch (error) {
        console.error('Failed to load login state', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLoginState();
  }, []);

  useEffect(() => {
    const saveLoginState = async () => {
      try {
        await AsyncStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
      } catch (error) {
        console.error('Failed to save login state', error);
      }
    };
    saveLoginState();
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
