import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import shortid from 'shortid';
import ProgressCircle from 'react-native-progress-circle';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './taskViewStyle';
import {combineData} from '../../../utils/DataHelper';
import {AuthContext} from '../../../context';
import appTheme from '../../../constants/colors';

export function TaskView() {
  const {state, dispatch} = useContext(AuthContext);
  const {selectedTask} = state;

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <View style={styles.taskProgressWrapper}>
          <ProgressCircle
            percent={selectedTask?.progress}
            radius={30}
            borderWidth={7}
            color="#6AC67E"
            shadowColor="#f4f4f4"
            bgColor="#fff">
            <Text style={styles.taskProgress}>{selectedTask?.progress}%</Text>
          </ProgressCircle>
        </View>
        <Text style={styles.taskTitle}>{selectedTask?.title}</Text>
      </View>
      <Text style={styles.taskTeamText}>Team</Text>
      <View style={styles.taskMembersWrapper}>
        {selectedTask?.members?.map(member => (
          <Image
            key={shortid.generate()}
            style={styles.taskMemberPhoto}
            source={{uri: member?.photo}}
          />
        ))}
        <TouchableOpacity style={styles.plusBtnContainer}>
          <MaterialCommunityIcons name="plus" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.scheduleWrapper}>
        <View style={styles.scheduleRow}>
          <MaterialCommunityIcons
            name="clock"
            size={20}
            color={appTheme.INACTIVE_COLOR}
          />
          <Text style={styles.scheduleText}>1:30PM - 2:00PM</Text>
        </View>
        <View style={styles.scheduleRow}>
          <AntDesign
            name="calendar"
            size={20}
            color={appTheme.INACTIVE_COLOR}
          />
          <Text style={styles.scheduleText}>June 13 2021</Text>
        </View>
      </View>
      <Text style={styles.longText}>
        It is an established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. {"\n"} {"\n"}The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy.
      </Text>
      <View style={styles.bottomWrapper}>
        <TouchableOpacity style={styles.bottomContent}>
          <EvilIcons name="comment" size={25} color={appTheme.INACTIVE_COLOR} />
          <Text style={styles.bottomText}>3 comments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomContent}>
          <Ionicons name="attach" size={25} color={appTheme.INACTIVE_COLOR} />
          <Text style={styles.bottomText}>2 attachments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
