import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import shortid from 'shortid';
import styles from './contactsStyle';
import appTheme from '../../constants/colors';
import {TabScreenHeader, EmptyListComponent} from '../../components';
import {AuthContext} from '../../context';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';

export function Contacts() {
  const {state, dispatch} = useContext(AuthContext);
  const {contacts} = state;

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <Text style={styles.headerTitle}>Contacts</Text>}
        isSearchBtnVisible={false}
        isMoreBtnVisible={true}
      />
      {contacts?.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contactsWrapper}>
            {contacts.map(contact => (
              <TouchableOpacity
                style={styles.singleContact}
                onPress={() => handleNavigation('Chat', contact)}
                key={shortid.generate()}>
                <Image
                  style={styles.singleContactPhoto}
                  source={{
                    uri: contact?.photo,
                  }}
                />
                <View style={styles.singleContactInfo}>
                  <Text
                    style={styles.selectedContactName}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {contact?.name}
                  </Text>
                  <Text style={styles.selectedContactLastSeen}>
                    {contact?.designation}
                  </Text>
                </View>
                <MaterialCommunityIcons
                  name="message"
                  size={17}
                  color={appTheme.PRIMARY_COLOR}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <EmptyListComponent />
      )}
    </SafeAreaView>
  );
}
