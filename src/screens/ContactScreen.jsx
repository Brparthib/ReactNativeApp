import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ContactList from '../components/ContactList';
import {styles} from '../components/style';
import SearchBar from '../components/SearchBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ContactScreen = () => {
  return (
    <View className="bg-white">
      <View style={styles.contactTitleContainer}>
        <View className="w-8/12">
          <Text className="text-[24px] text-secondary font-bold">Contacts</Text>
          <Text className="text-[12px] text-[#787573] font-normal">
            Total 25 Contacts
          </Text>
        </View>
        <View style={styles.iconButton} className="w-4/12">
          <MaterialIcons name="logout" size={20} color="#FB5200" />
          <TouchableOpacity>
            <Text className="text-primary text-[15px] font-semibold ml-1">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.listContainer}>
        <ContactList />
      </View>
    </View>
  );
};
export default ContactScreen;
