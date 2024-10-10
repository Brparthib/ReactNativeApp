import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';

const ContactItem = ({name, email}) => {
  return (
    <View style={styles.contactItem}>
      <View style={styles.contactItemUser}>
        <Text className="text-[#AA9113] text-[14px] font-600">PB</Text>
      </View>
      <View style={styles.contactItemText}>
        <Text className="text-[16px] font-[600] text-secondary">{name}</Text>
        <Text className="text-[12px] font-[400] text-[#787573]">{email}</Text>
      </View>
      <View style={styles.contactDotsIcon}>
        <TouchableOpacity>
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
