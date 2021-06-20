import {StyleSheet} from 'react-native';
import appTheme from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    height: 180,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 1,
    marginBottom: 25,
  },
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
  projectTeamAndProgress: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  projectDescription: {
    color: appTheme.INACTIVE_COLOR,
    marginBottom: 10,
  },
  projectTeamTitle: {fontWeight: 'bold', marginBottom: 5},
  projectTeamWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  projectMemberPhoto: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginLeft: -10,
  },
  projectProgress: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rowJustifyBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectBottomText: {
    marginLeft: 5,
    fontSize: 14,
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
});

export default styles;
