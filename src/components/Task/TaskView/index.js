import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import shortid from 'shortid';
import styles from './taskViewStyle';
import {combineData} from '../../../utils/DataHelper';
import {AuthContext} from '../../../context';

export function TaskView() {
  const {state, dispatch} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
}
