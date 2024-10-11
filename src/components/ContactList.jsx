import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ContactItem from './ContactItem';
import Feather from 'react-native-vector-icons/Feather';
import useApi from '../hooks/useApi';
import {styles} from './style';

const ContactList = () => {
  const {data, loading, error} = useApi();
  const [searchInput, setSearchInput] = useState('');

  // Loading state
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#FB5200" />
      </View>
    );
  }

  // Error state
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

  return (
    <View className="bg-white">
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
  );
};

export default ContactList;
