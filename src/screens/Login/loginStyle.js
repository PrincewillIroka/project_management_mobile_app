import {StyleSheet} from 'react-native';
import appTheme from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  backText: {
    fontSize: 17,
    marginLeft: 10,
    color: 'gray',
  },
  bodyContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  largeText: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    color: appTheme.INACTIVE_COLOR,
    fontWeight: '500',
    marginBottom: 40,
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 35,
    height: 40,
  },
  textInput: {fontSize: 17, flex: 1, color: '#000', height: 45},
  savePwdRow: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  savePwdText: {color: appTheme.COLOR2, fontWeight: 'bold'},
  loginBtnWrapper: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 7,
    marginBottom: 15,
  },
  loginBtnText: {fontWeight: 'bold', fontSize: 16, color: '#fff'},
  signUpBtnWrapper: {
    borderColor: appTheme.INACTIVE_COLOR,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 7,
  },
  signUpBtnText: {fontWeight: 'bold', fontSize: 16, color: '#000000aa'},
});

export default styles;
