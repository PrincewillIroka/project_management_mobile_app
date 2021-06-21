import {StyleSheet} from 'react-native';
import appTheme from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    height: 60,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 1,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskProgressIndicator: {marginRight: 10},
  taskMiddleColumn: {width: '50%', marginRight: 'auto'},
  taskTitle: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  taskProgressBar: {borderRadius: 7, height: 6},
  teamWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginRight: 10,
  },
  memberPhoto: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: -10,
  },
});

export default styles;
