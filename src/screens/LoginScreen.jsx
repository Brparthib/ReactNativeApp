import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import {styles} from '../components/style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthContext from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {setIsLoggedIn} = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = () => {
    const dummyEmail = 'user@gmail.com';
    const dummyPassword = '123';

    let valid = true;
    setEmailError('');
    setPasswordError('');

    if (email !== dummyEmail) {
      setEmailError('Invalid email address');
      valid = false;
    }

    if (password !== dummyPassword) {
      setPasswordError('Invalid password');
      valid = false;
    }

    if (valid) {
      setIsLoggedIn(true);
      navigation.navigate('ContactList');
      setEmail('');
      setPassword('');
    }
  };

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="bg-primary h-screen relative">
      <Image
        className="absolute"
        source={require('../assets/images/vector1.png')}
      />
      <Image
        className="absolute right-0"
        source={require('../assets/images/vector2.png')}
      />
      <Image
        className="absolute right-5 top-[110]"
        source={require('../assets/images/vector3.png')}
      />
      <View className="absolute bottom-0 w-full pt-[24px] pb-[48px] px-[20px] bg-[#ffffff] rounded-t-[12px]">
        <Text className="text-[24px] font-bold text-black">
          Login to your account
        </Text>

        <View className="gap-y-4 my-[20px]">
          <View>
            <Text className="text-[14px] mb-2 font-semibold text-secondary">
              Email address
            </Text>
            <TextInput
              className="border-2 border-[#D1D0D0] px-[12px] rounded-[10px]"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <View>
              {emailError ? (
                <Text className="text-red-500 text-[12px] mt-1">
                  {emailError}
                </Text>
              ) : null}
            </View>
          </View>
          <View>
            <Text className="text-[14px] mb-2 font-semibold text-secondary">
              Password
            </Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                className="border-2 border-[#D1D0D0] px-[12px] rounded-[10px] w-full"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity
                style={styles.passwordEyeIcon}
                onPress={togglePasswordVisibility}>
                <MaterialCommunityIcons
                  name={isPasswordVisible ? 'eye-off' : 'eye'}
                  size={20}
                  color="#787573"
                />
              </TouchableOpacity>
            </View>
            <View>
              {passwordError ? (
                <Text className="text-red-500 text-[12px] mt-1">
                  {passwordError}
                </Text>
              ) : null}
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={handleLogin}
              className="bg-primary py-[15px] rounded-full w-full">
              <Text className="text-center text-[#ffffff] text-[16px] font-semibold">
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.loginContainer}>
            <View style={styles.line} />
            <Text style={styles.text}>Or, Log in with</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.loginButtonContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.icon}
                source={require('../assets/images/Google.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                style={styles.icon}
                source={require('../assets/images/Facebook.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
