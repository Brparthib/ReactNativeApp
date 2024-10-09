import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View className="bg-primary">
      <View className="mt-[262px] pt-[24px] pb-[48px] px-[20px] bg-[#ffffff] rounded-t-[12px]">
        <Text className="text-[24px] font-[700] text-black">
          Login to your account
        </Text>

        <View className="gap-4">
          <View>
            <Text className="text-[14px] font-600 text-secondary">
              Email address
            </Text>
            <TextInput
              className="border-2 border-[#D1D0D0] rounded-lg"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View>
            <Text className="text-[14px] font-600 text-secondary">
              Password
            </Text>
            <TextInput
              className="border-2 border-[#D1D0D0] rounded-lg"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <TouchableOpacity className="bg-primary py-[15px] rounded-full w-full">
            <Text className="text-center text-[#ffffff] text-[16px] font-600">
              Log in
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View className="flex gap 12px">
            <TouchableOpacity className="bg-[#ffffff] border border-body rounded-[12px]">
              <Text>Large</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
