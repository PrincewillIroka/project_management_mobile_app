import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export function TabScreenHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Profile</Text>
      <View style={styles.headerRightContainer}>
        <TouchableOpacity>
          <Feather name="search" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 10}}>
          <Feather name="more-vertical" size={22} color="#000" />
        </TouchableOpacity>
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
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
