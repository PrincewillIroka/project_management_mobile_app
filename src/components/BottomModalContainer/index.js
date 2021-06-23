import React, {useContext} from 'react';
import {View, SafeAreaView, TouchableOpacity, Modal} from 'react-native';
import {CreateProject} from '../Project';
import {CreateTask, TaskView} from '../Task';
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
          {bottomModal === 'CreateProject' ? (
            <CreateProject />
          ) : bottomModal === 'CreateTask' ? (
            <CreateTask />
          ) : bottomModal === 'TaskView' ? (
            <TaskView />
          ) : null}
        </View>
      </SafeAreaView>
    </Modal>
  );
}
