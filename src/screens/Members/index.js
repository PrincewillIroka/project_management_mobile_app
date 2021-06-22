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
import styles from './membersStyle';
import appTheme from '../../constants/colors';
import {TabScreenHeader, EmptyListComponent} from '../../components';
import {AuthContext} from '../../context';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';

export function Members() {
  const {state, dispatch} = useContext(AuthContext);
  const {members} = state;

  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenHeader
        leftComponent={() => <Text style={styles.headerTitle}>Members</Text>}
        isSearchBtnVisible={false}
        isMoreBtnVisible={true}
      />
      {members?.length ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.membersWrapper}>
            {members.map(member => (
              <TouchableOpacity
                style={styles.singleMember}
                onPress={() => handleNavigation('Chat', member)}
                key={shortid.generate()}>
                <Image
                  style={styles.singleMemberPhoto}
                  source={{
                    uri: member?.photo,
                  }}
                />
                <View style={styles.singleMemberInfo}>
                  <Text
                    style={styles.selectedMemberName}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {member?.name}
                  </Text>
                  <Text style={styles.selectedMemberLastSeen}>
                    {member?.designation}
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
