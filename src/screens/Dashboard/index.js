import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import shortid from 'shortid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './dashboardStyle';
import {AuthContext} from '../../context';
import {TabScreenHeader, TaskInfo, EmptyListComponent} from '../../components';
import {formatCurrentDate} from '../../utils/DataHelper';
import appTheme from '../../constants/colors';

export function Dashboard() {
  const {state, dispatch} = useContext(AuthContext);
  let {tasks} = state;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All Tasks', value: 'All Tasks'},
    {label: 'Ongoing', value: 'Ongoing'},
    {label: 'Completed', value: 'Completed'},
  ]);

  const getTasks = () => {
    let tasksToRender = [];
    if (!value || value === 'All Tasks') {
      tasksToRender = tasks;
    } else if ((value === 'Ongoing')) {
      tasksToRender =
        tasks.filter(task => task.progress < 100) || [];
    } else if ((value === 'Completed')) {
      tasksToRender =
        tasks.filter(task => task.progress === 100) || [];
    }

    return tasksToRender;
  };

  const handleCreateTask = () => {
    dispatch({
      type: 'toggleBottomModal',
      payload: {bottomModal: 'CreateTask'},
    });
  };

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
        isSearchBtnVisible={true}
        isMoreBtnVisible={true}
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
            <TouchableOpacity
              style={styles.tasksRow}
              onPress={() => handleCreateTask()}>
              <Text style={styles.tasksLeftText}>Add Task</Text>
              <View style={styles.plusBtnContainer}>
                <MaterialCommunityIcons name="plus" size={19} color="#fff" />
              </View>
            </TouchableOpacity>
            <DropDownPicker
              placeholder="All Tasks"
              placeholderStyle={{fontSize: 15}}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              containerStyle={{
                width: 130,
              }}
              style={{
                borderColor: 'transparent',
                backgroundColor: 'transparent',
              }}
              dropDownContainerStyle={{
                backgroundColor: '#fff',
                borderColor: 'transparent',
              }}
              labelStyle={{
                fontSize: 15,
              }}
            />
          </View>
          <View style={styles.tasksBody}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.tasksList}>
                {getTasks()?.map(task => (
                  <TaskInfo task={task} key={shortid.generate()} />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
