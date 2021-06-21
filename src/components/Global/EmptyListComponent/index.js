import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import appTheme from '../../../constants/colors';


export function EmptyListComponent() {
  return (
    <View style={styles.emptyListContainer}>
      <MaterialCommunityIcons name="file" size={80} color={appTheme.COLOR1} />
      <Text style={styles.emptyListText}>None found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyListContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 100,
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: 19,
    opacity: 0.6,
    marginTop: 20,
  },
});
