import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/AuthContext';
import Route from './src/routes/Route';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
