import React, {useState, useContext} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import useApi from '../hooks/useApi';
import {styles} from '../components/style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../context/AuthContext';
import ContactItem from '../components/ContactItem';

const ContactListScreen = () => {
  const navigation = useNavigation();
  const {setIsLoggedIn} = useContext(AuthContext);

  const {data, loading, error} = useApi();
  const [searchInput, setSearchInput] = useState('');

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

  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigation.navigate('Login');
  };
  return (
    <View className="bg-white">
      {/* contact screen header */}
      <View style={styles.contactTitleContainer}>
        <View className="w-8/12">
          <Text className="text-[24px] text-secondary font-sora font-bold">Contacts</Text>
          <Text className="text-[12px] text-[#787573] font-inter font-normal">
            Total {filteredContacts.length} Contacts
          </Text>
        </View>
        <TouchableOpacity
          style={styles.iconButton}
          className="w-4/12"
          onPress={handleLogout}>
          <MaterialIcons name="logout" size={20} color="#FB5200" />
          <Text className="text-primary text-[15px] font-inter font-semibold ml-1">
            Logout
          </Text>
        </TouchableOpacity>
      </View>

      {/* all contact list */}
      <View style={styles.listContainer}>
        <View className="bg-white">
          {/* search bar  */}
          <View style={styles.searchBarContainer}>
            <View style={styles.searchInputContainer}>
              <Feather
                style={styles.searchIcon}
                name="search"
                size={20}
                color="#787573"
              />
              <TextInput
                style={styles.searchInput}
                value={searchInput}
                onChangeText={setSearchInput}
                placeholder="Search Contacts"
                placeholderTextColor="#787573"
              />
            </View>
          </View>
          <View className="bg-body">
            <FlatList
              data={filteredContacts}
              keyExtractor={user => user.id}
              renderItem={({item}) => <ContactItem user={item} />}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default ContactListScreen;
