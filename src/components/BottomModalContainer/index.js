import React, {useContext} from 'react';
import {View, SafeAreaView, TouchableOpacity, Modal} from 'react-native';
import {CreateProject} from '../CreateProject';
import styles from './bottomModalContainerStyle';
import {AuthContext} from '../../context';

export function BottomModalContainer() {
  const {state, dispatch} = useContext(AuthContext);
  const {bottomModal} = state;

  const handleBottomModal = bottomModal => {
    dispatch({
      type: 'toggleBottomModal',
      payload: {bottomModal},
    });
  };

  return (
    <Modal animationType="slide" transparent={true}>
      <SafeAreaView style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => handleBottomModal(null)}></TouchableOpacity>
        <View style={styles.setModalDimensions('70%', '100%')}>
          {bottomModal === 'CreateProject' ? <CreateProject /> : null}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
