import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../components/style';
import {useNavigation} from '@react-navigation/native';
import useApi from '../hooks/useApi';
import {getInitials} from '../Utils/getinitials';

const ContactDetailScreen = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useApi();
  const [singleData, setSingleData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const result = data.find(item => item.id === id);
      setSingleData(result);
    }
  }, [id, data]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#FB5200" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View className="px-[20px]">
      {/* arrow and delete button  */}
      <View style={styles.arrowDeleteButton}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={20} color="#2C2B2A" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.deleteButton}>
            <Feather name="trash-2" size={20} color="#FB5200" />
            <Text className="ml-1 text-[15px] text-primary font-inter font-semibold">
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* contact profile */}
      <View className="pt-[8px] pb-[16px]">
        <View className="w-[90px] h-[90px] rounded-full bg-lemon_chiffon flex justify-center items-center mx-auto">
          <Text className="text-[31.5px] text-[#AA9113] font-inter font-semibold">
            {getInitials(singleData.name)}
          </Text>
        </View>
        <View className="mt-[12px]">
          <Text className="text-center text-[#292B2D] text-[20px] font-sora font-semibold">
            {singleData.name}
          </Text>
          <Text className="text-center text-[#71757A] text-[16px] font-sora font-normal">
            {singleData.email}
          </Text>
          <Text className="text-center text-[#292B2D] text-[16px] font-sora font-semibold">
            {singleData.address.city}
          </Text>
        </View>
      </View>

      {/* save and share button  */}
      <View style={styles.saveShareButton}>
        <TouchableOpacity
          style={styles.saveShareButtonText}
          className="w-1/2 bg-body rounded-full py-[15px]">
          <Feather name="download" size={20} color="#2C2B2A" />
          <Text className="text-[15px] text-secondary font-inter font-semibold">
            Save to phone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveShareButtonText}
          className="w-1/2 bg-secondary rounded-full py-[15px]">
          <MaterialCommunityIcons name="share" size={20} color="#ffffff" />
          <Text className="text-[15px] text-white font-inter font-semibold">
            Share Contact
          </Text>
        </TouchableOpacity>
      </View>

      {/* other information list of a contact */}
      <View className="border border-body rounded-[10px] mt-[16px]">
        <View className="py-[12px] px-[16px]">
          <Text className="text-[12px] text-[#787573] font-inter font-semibold">
            Email
          </Text>
          <Text className="text-[14px] text-secondary font-inter font-normal">
            {singleData.email}
          </Text>
        </View>
        <View className="py-[12px] px-[16px] border-y border-body">
          <Text className="text-[12px] text-[#787573] font-inter font-semibold">
            Phone
          </Text>
          <Text className="text-[14px] text-secondary font-inter font-normal">
            {singleData.phone}
          </Text>
        </View>
        <View className="py-[12px] px-[16px]">
          <Text className="text-[12px] text-[#787573] font-inter font-semibold">
            Date Create
          </Text>
          <Text className="text-[14px] text-secondary font-inter font-normal">
            13 October, 2024
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContactDetailScreen;
