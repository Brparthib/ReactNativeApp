import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './style';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
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
  );
};

export default SearchBar;
