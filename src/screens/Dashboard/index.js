import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import shortid from 'shortid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './dashboardStyle';
import {AuthContext} from '../../context';
import {TabScreenHeader, TaskInfo, EmptyListComponent} from '../../components';
import {combineData, formatCurrentDate} from '../../utils/DataHelper';
import appTheme from '../../constants/colors';

export function Dashboard() {
  const {state, dispatch} = useContext(AuthContext);
  const {tasks} = state;

  return (
    <SafeAreaView>
      <TabScreenHeader
        leftComponent={() => (
          <View style={styles.flexRow}>
            <Text style={styles.headerLeftText}>{formatCurrentDate()}</Text>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={20}
              color="#000"
            />
          </View>
        )}
      />
      <View style={styles.contentBody}>
        <View style={styles.statisticsSection}>
          <Text style={styles.contentTitle}>Today</Text>
          <View style={styles.statisticsContainer}>
            <View
              style={[
                styles.statisticsContent,
                {backgroundColor: appTheme.PRIMARY_COLOR},
              ]}>
              <FontAwesome
                name="refresh"
                size={17}
                color="#fff"
                style={styles.statisticsIcon}
              />
              <View style={styles.statisticsCounter}>
                <Text style={styles.statisticsValue}>14</Text>
                <Text style={styles.statisticsTitle}>Ongoing</Text>
              </View>
            </View>
            <View
              style={[
                styles.statisticsContent,
                {backgroundColor: appTheme.COLOR1},
              ]}>
              <Feather
                name="clock"
                size={17}
                color="#fff"
                style={styles.statisticsIcon}
              />
              <View style={styles.statisticsCounter}>
                <Text style={styles.statisticsValue}>20</Text>
                <Text style={styles.statisticsTitle}>In Process</Text>
              </View>
            </View>
            <View
              style={[
                styles.statisticsContent,
                {backgroundColor: appTheme.COLOR2},
              ]}>
              <MaterialCommunityIcons
                name="file-check-outline"
                size={19}
                color="#fff"
                style={styles.statisticsIcon}
              />
              <View style={styles.statisticsCounter}>
                <Text style={styles.statisticsValue}>35</Text>
                <Text style={styles.statisticsTitle}>Completed</Text>
              </View>
            </View>
            <View
              style={[
                styles.statisticsContent,
                {backgroundColor: appTheme.COLOR3},
              ]}>
              <MaterialCommunityIcons
                name="file-remove-outline"
                size={19}
                color="#fff"
                style={styles.statisticsIcon}
              />
              <View style={styles.statisticsCounter}>
                <Text style={styles.statisticsValue}>28</Text>
                <Text style={styles.statisticsTitle}>Cancelled</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.tasksSection}>
          <View style={styles.tasksHeader}>
            <TouchableOpacity style={styles.tasksRow}>
              <Text style={styles.tasksLeftText}>Add Task</Text>
              <View style={styles.plusBtnContainer}>
                <MaterialCommunityIcons name="plus" size={19} color="#fff" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tasksRow}>
              <Text style={styles.tasksRightText}>All Task</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={19}
                color={appTheme.INACTIVE_COLOR}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tasksBody}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.tasksList}>
                {tasks?.length > 0 ? (
                  tasks
                    ?.slice(0, 3)
                    ?.map(task => (
                      <TaskInfo task={task} key={shortid.generate()} />
                    ))
                ) : (
                  <EmptyListComponent />
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
