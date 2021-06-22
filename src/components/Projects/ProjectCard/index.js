import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressCircle from 'react-native-progress-circle';
import shortid from 'shortid';
import styles from './projectCardStyle';
import appTheme from '../../../constants/colors';
import {navigateToNestedRoute} from '../../../navigators/RootNavigation';
import {getScreenParent} from '../../../utils/NavigationHelper';

export function ProjectCard({project, navigation}) {
  const handleNavigation = (screen, params) => {
    navigateToNestedRoute(getScreenParent(screen), screen, params);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigation('Project', project)}>
      <Text style={styles.projectTitle}>{project?.title}</Text>
      <View style={styles.projectTeamAndProgress}>
        <View>
          <Text style={styles.projectDescription}>{project?.description}</Text>
          <Text style={styles.projectTeamTitle}>Team</Text>
          <View style={styles.projectTeamWrapper}>
            {project?.team?.map(member => (
              <Image
                key={shortid.generate()}
                style={styles.projectMemberPhoto}
                source={{uri: member?.photo}}
              />
            ))}
            <TouchableOpacity style={styles.plusBtnContainer}>
              <MaterialCommunityIcons name="plus" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <ProgressCircle
          percent={project?.progress}
          radius={40}
          borderWidth={8}
          color="#6AC67E"
          shadowColor="#f4f4f4"
          bgColor="#fff">
          <Text style={styles.projectProgress}>{project?.progress}%</Text>
        </ProgressCircle>
      </View>
      <View style={styles.rowJustifyBetween}>
        <View style={styles.flexRow}>
          <MaterialCommunityIcons
            name="calendar-month-outline"
            size={20}
            color={appTheme.INACTIVE_COLOR}
          />
          <Text style={styles.projectBottomText}>{project?.createdAt}</Text>
        </View>
        <View style={styles.flexRow}>
          <MaterialCommunityIcons
            name="checkbox-marked"
            size={20}
            color={appTheme.INACTIVE_COLOR}
          />
          <Text style={styles.projectBottomText}>{project?.tasks} Tasks</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
