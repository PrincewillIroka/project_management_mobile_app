import {StyleSheet} from 'react-native';
import appTheme from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  leftHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 10,
  },
  profileDetailsSection: {
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
  },
  profileInfoSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profilePhoto: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  statisticsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  statisticsText: {
    color: appTheme.PRIMARY_COLOR,
    fontSize: 13,
    fontWeight: 'bold',
  },
  statisticsTitle: {
    fontSize: 13,
    color: appTheme.INACTIVE_COLOR,
  },
  profileCenterSection: {
    display: 'flex',
    alignItems: 'center',
  },
  nameText: {fontWeight: 'bold', fontSize: 16, marginBottom: 5},
  designationText: {
    fontSize: 12,
    color: appTheme.INACTIVE_COLOR,
    marginBottom: 20,
  },
  editProfileWrapper: {
    backgroundColor: appTheme.PRIMARY_COLOR,
    paddingHorizontal: 25,
    borderRadius: 5,
    paddingVertical: 10,
  },
  editProfileText: {
    color: '#fff',
  },
  exploreSection: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  exploreHeader: {
    fontWeight: 'bold',
    marginBottom: 30,
    fontSize: 14,
  },
  exploreContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  singleExplore: {
    height: 80,
    width: '28%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: '#fff',
    margin: 1,
    marginBottom: 20,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  exploreText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: appTheme.PRIMARY_COLOR,
  },
});

export default styles;
