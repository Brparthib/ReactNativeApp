import { ScrollView} from 'react-native';
import React from 'react';
import ContactItem from './ContactItem';
import {users} from './users';

const ContactList = () => {
  return (
    <ScrollView>
        {
            users.map((user) => <ContactItem name={user.name} email={user.email} />)
        }
    </ScrollView>
  );
};

export default ContactList;
