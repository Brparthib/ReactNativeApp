import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../components/style';

const ContactDetailScreen = () => {
  return (
    <View className="px-[20px]">
      <View style={styles.arrowDeleteButton}>
        <View>
          <Feather name="arrow-left" size={20} color="#2C2B2A" />
        </View>
        <View style={styles.deleteButton}>
          <Feather name="trash-2" size={20} color="#FB5200" />
          <Text className="ml-1 text-[15px] text-primary font-600">Delete</Text>
        </View>
      </View>
      <View className="pt-[8px] pb-[16px]">
        <View className="w-[90px] h-[90px] rounded-full bg-lemon_chiffon flex justify-center items-center mx-auto">
          <Text className="text-[31.5px] text-[#AA9113] font-semibold">PB</Text>
        </View>
        <View className="mt-[12px]">
          <Text className="text-center text-[#292B2D] text-[20px] font-semibold">
            Parthib Barua
          </Text>
          <Text className="text-center text-[#71757A] text-[16px] font-normal">
            Full Stack Developer
          </Text>
          <Text className="text-center text-[#292B2D] text-[16px] font-semibold">
            Super Local Fans
          </Text>
        </View>
      </View>
      <View style={styles.saveShareButton}>
        <TouchableOpacity
          style={styles.saveShareButtonText}
          className="w-1/2 bg-body rounded-full py-[15px]">
          <Feather name="download" size={20} color="#2C2B2A" />
          <Text className="text-[15px] text-secondary font-semibold">
            Save to phone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.saveShareButtonText}
          className="w-1/2 bg-secondary rounded-full py-[15px]">
          <MaterialCommunityIcons name="share" size={20} color="#ffffff" />
          <Text className="text-[15px] text-white font-semibold">
            Share Contact
          </Text>
        </TouchableOpacity>
      </View>
      <View className="border border-body rounded-[10px] mt-[16px]">
        <View className="py-[12px] px-[16px]">
          <Text className="text-[12px] text-[#787573] font-semibold">
            Email
          </Text>
          <Text className="text-[14px] text-secondary font-normal">
            brparthib@gmail.com
          </Text>
        </View>
        <View className="py-[12px] px-[16px] border-y border-body">
          <Text className="text-[12px] text-[#787573] font-semibold">
            Phone
          </Text>
          <Text className="text-[14px] text-secondary font-normal">
            969-1610
          </Text>
        </View>
        <View className="py-[12px] px-[16px]">
          <Text className="text-[12px] text-[#787573] font-semibold">
            Date Create
          </Text>
          <Text className="text-[14px] text-secondary font-normal">
            25 March, 2024
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ContactDetailScreen;
