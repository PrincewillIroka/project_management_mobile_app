import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Dashboard,
  Calendar,
  Projects,
  Reports,
  Tasks,
  Onboarding,
  Login,
  SignUp,
  Profile,
  Chat,
  Members,
  Project,
} from '../screens';
import appTheme from '../constants/colors';
import {combineData} from '../utils/DataHelper';
import {AuthContext} from '../context';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function CustomTabBar(props) {
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({activeNavTab: 'Dashboard'});

  const handleNavigation = route => {
    setData(combineData(data, {activeNavTab: route}));
    props?.navigation.navigate(route);
  };

  const getColor = title => {
    let color;
    if (title === data?.activeNavTab) {
      color = appTheme.PRIMARY_COLOR;
    } else {
      color = appTheme.INACTIVE_COLOR;
    }
    return color;
  };

  const handleBottomModal = bottomModal => {
    dispatch({
      type: 'toggleBottomModal',
      payload: {bottomModal},
    });
  };

  return (
    <View style={styles.menuWrapper}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => handleNavigation('Dashboard')}>
          <Ionicons name="ios-menu" size={32} color={getColor('Dashboard')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Projects')}>
          <Ionicons
            name="ios-document-text"
            size={25}
            color={getColor('Projects')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.plusBtnContainer}
          onPress={() => handleBottomModal('CreateProject')}>
          <MaterialCommunityIcons name="plus" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Members')}>
          <Feather name="send" size={25} color={getColor('Members')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Profile')}>
          <MaterialIcons
            name="account-circle"
            size={25}
            color={getColor('Profile')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BottomStack = () => {
  return (
    <BottomTab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <BottomTab.Screen name="Dashboard" component={Dashboard} options={{}} />
      <BottomTab.Screen name="Projects" component={Projects} />
      <BottomTab.Screen name="Members" component={Members} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

const SingleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Project"
        component={Project}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Reports"
        component={Reports}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="BottomStack">
      <Stack.Screen
        name="SingleStack"
        component={SingleStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomStack"
        component={BottomStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  menuWrapper: {
    backgroundColor: 'transparent',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
    marginTop: 1,
    paddingHorizontal: 25,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  plusBtnContainer: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    height: 60,
    width: 60,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppStack;
