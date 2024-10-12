import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
import {getInitials} from '../Utils/getinitials';
import {useNavigation} from '@react-navigation/native';

const ContactItem = ({user}) => {
  const {id, name, email} = user;
  const navigation = useNavigation();

  return (
    <View style={styles.contactItem}>
      <View style={styles.contactItemUser}>
        <Text className="text-[#AA9113] text-[14px] font-semibold">
          {getInitials(name)}
        </Text>
      </View>
      <View style={styles.contactItemText}>
        <Text className="text-[16px] font-semibold text-secondary">{name}</Text>
        <Text className="text-[12px] font-normal text-[#787573]">{email}</Text>
      </View>
      <View style={styles.contactDotsIcon}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ContactDetails', {id: id})
          }>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={20}
            color="#AAA7A6"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactItem;
