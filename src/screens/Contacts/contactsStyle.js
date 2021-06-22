import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  chatHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  contactsWrapper: {flex: 1, padding: 16},
  singleContact: {
    backgroundColor: '#fff',
    padding: 10,
    height: 70,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    margin: 1,
    marginBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleContactPhoto: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  singleContactInfo: {
    width: '65%',
    marginRight: 'auto',
  },
  chatWrapper: {
    flex: 1,
    position: 'relative',
  },
});

export default styles;
