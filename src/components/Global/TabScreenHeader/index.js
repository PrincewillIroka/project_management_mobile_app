import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export function TabScreenHeader({
  leftComponent,
  isSearchBtnVisible,
  isMoreBtnVisible,
}) {
  return (
    <View style={styles.headerContainer}>
      {leftComponent()}
      <View style={styles.headerRightContainer}>
        {isSearchBtnVisible ? (
          <TouchableOpacity>
            <Feather name="search" size={22} color="#000" />
          </TouchableOpacity>
        ) : null}
        {isMoreBtnVisible ? (
          <TouchableOpacity style={{marginLeft: 15}}>
            <Feather name="more-vertical" size={22} color="#000" />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
