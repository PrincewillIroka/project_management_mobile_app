import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import shortid from 'shortid';
import {
  Dashboard,
  Calendar,
  Projects,
  Reports,
  Tasks,
  Onboarding,
  Login,
  Register,
} from '../screens';
import {combineData} from '../utils/DataHelper';
import {AuthContext} from '../context';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function CustomDrawerContent(props) {
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({activeNavTab: 'Inbox'});

  const handleNavigation = (route, props) => {
    setData(combineData(data, {activeNavTab: route}));
    props.navigation.navigate(route);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View style={styles.menuItemsContainer}>
          <Text>Hey</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const BottomStack = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Dashboard" component={Dashboard} />
      <BottomTab.Screen name="Calendar" component={Calendar} />
      <BottomTab.Screen name="Projects" component={Projects} />
      <BottomTab.Screen name="Reports" component={Reports} />
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
        name="Register"
        component={Register}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuTitleContainer: {
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  menuTitleText: {
    color: '#C8342F',
    fontSize: 20,
    marginLeft: 25,
  },
  menuItemsContainer: {
    paddingTop: 10,
    paddingRight: 7,
  },
  menuItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 10,
    paddingVertical: 10,
    marginBottom: 3,
  },
  activeMenuItemWrapper: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FCE8E7',
  },
  menuCount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 20,
    width: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 16,
    marginRight: 'auto',
  },
  activeMenuText: {
    color: '#C8342F',
  },
  allLabelsText: {
    marginTop: 20,
    marginLeft: 25,
    fontSize: 15,
    opacity: 0.6,
    marginBottom: 15,
  },
});

export default AppStack;
