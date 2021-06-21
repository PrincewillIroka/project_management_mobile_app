import React, {useReducer} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import AppStack from './navigators/Stack';
import initialState from './store/state';
import reducer from './store/reducer';
import {AuthContext} from './context';
import {navigationRef} from './navigators/RootNavigation';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <PaperProvider>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.areaContainer}>
          <NavigationContainer ref={navigationRef}>
            <AppStack />
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
  },
});

export default App;
