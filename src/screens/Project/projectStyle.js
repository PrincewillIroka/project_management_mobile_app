import {StyleSheet} from 'react-native';
import appTheme from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  backButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectDetailsSection: {
    paddingTop: 40,
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
    marginBottom: 15,
  },
  projectTitleWrapper: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginRight: 10,
  },
  projectTeamAndProgress: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  projectTeamTitle: {fontWeight: 'bold', marginBottom: 5},
  projectDescription: {
    color: appTheme.INACTIVE_COLOR,
    marginBottom: 30,
  },
  projectProgressWrapper: {marginRight: 30},
  projectProgress: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  projectTeamWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  projectMemberPhoto: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: -10,
  },
  plusBtnContainer: {
    backgroundColor: appTheme.COLOR1,
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: -10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectStatus: {
    marginLeft: 'auto',
    borderRadius: 20,
    textAlign: 'center',
    borderColor: appTheme.INACTIVE_COLOR,
    borderWidth: 1,
    textTransform: 'capitalize',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: appTheme.INACTIVE_COLOR,
  },
  projectBody: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  projectTabs: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 3,
    borderRadius: 7,
    marginBottom: 5,
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
  bottomContainer: {
    height: '65%',
  },
  bottomContent: {
    paddingBottom: 200,
  },
  tasksHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  tasksRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tasksLeftText: {
    marginRight: 7,
    fontWeight: 'bold',
    fontSize: 15,
  },
  plusBtnContainer2: {
    backgroundColor: appTheme.COLOR1,
    height: 30,
    width: 30,
    borderRadius: 50,
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
