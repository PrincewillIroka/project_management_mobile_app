import {StyleSheet} from 'react-native';
import appTheme from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },  
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  projectsBody: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 120
  },
  projectsTabs: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    borderRadius: 7,
    marginBottom: 30,
  },
  projectTab: {
    width: '30%',
    borderRadius: 7,
  },
  activeProjectTab: {
    backgroundColor: appTheme.PRIMARY_COLOR,
  },
  projectTabText: {fontSize: 16, paddingVertical: 7, textAlign: 'center'},
  activeProjectTabText: {
    color: '#fff',
  },
  inActiveProjectTabText: {
    color: appTheme.PRIMARY_COLOR,
  },
});

export default styles;
