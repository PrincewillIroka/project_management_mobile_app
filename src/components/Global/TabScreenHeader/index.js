import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {combineData} from '../../../utils/DataHelper';
import appTheme from '../../../constants/colors';

export function TabScreenHeader({
  leftComponent,
  isSearchBtnVisible,
  isMoreBtnVisible,
}) {
  const [data, setData] = useState({isSearchFieldVisible: false});

  const toggleSearchField = () => {
    let {isSearchFieldVisible} = data;
    isSearchFieldVisible = !isSearchFieldVisible;
    setData(combineData(data, {isSearchFieldVisible}));
  };

  return (
    <View style={styles.headerContainer}>
      {leftComponent()}
      <View style={styles.headerRightContainer}>
        {isSearchBtnVisible ? (
          <View style={styles.searchContainer}>
            {data?.isSearchFieldVisible ? (
              <View style={styles.searchInputWrapper}>
                <TextInput
                  placeholder="Search"
                  style={styles.searchInputField}
                  placeholderTextColor={appTheme.INACTIVE_COLOR}
                />
                <TouchableOpacity onPress={() => toggleSearchField()}>
                  <MaterialIcons name="close" size={20} color={appTheme.INACTIVE_COLOR} />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={() => toggleSearchField()}>
                <Feather name="search" size={22} color="#000" />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
        {isMoreBtnVisible ? (
          <Menu>
            <MenuTrigger>
              <Feather name="more-vertical" size={22} color="#000" />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption>
                <Text style={styles.menuOptionText}>Settings</Text>
              </MenuOption>
              <MenuOption>
                <Text style={styles.menuOptionText}>Log out</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    marginRight: 15,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuOptionText: {
    fontSize: 16,
    paddingLeft: 7,
    paddingVertical: 3,
  },
  searchInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 170,
    paddingHorizontal: 7,
    height: 35,
  },
  searchInputField: {
    fontSize: 15,
    height: 40,

  },
});
