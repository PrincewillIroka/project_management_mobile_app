import {StyleSheet} from 'react-native';
import appTheme from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftText: {
    color: '#000',
    marginRight: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
  contentBody: {
    paddingBottom: 120,
  },
  statisticsSection:{
    paddingTop: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  contentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  statisticsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statisticsContent: {
    width: '45%',
    borderRadius: 15,
    height: 100,
    padding: 15,
    marginBottom: 15
  },
  statisticsIcon: {
    marginLeft: 'auto',
  },
  statisticsCounter: {
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  statisticsValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statisticsTitle: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
