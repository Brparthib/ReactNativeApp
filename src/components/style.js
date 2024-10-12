import {Dimensions, StyleSheet} from 'react-native';

const {height: screenHeight} = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  // login screen css start here
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: 258,
    alignSelf: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#818688',
  },
  text: {
    marginHorizontal: 13,
    fontSize: 14,
    color: '#818688',
  },
  loginButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#ffffff',
    borderColor: '#EAEAEA',
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '48%',
  },
  icon: {
    width: 22,
    height: 22,
  },

  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  passwordEyeIcon: {
    position: 'absolute',
    right: 12,
  },

  // contact screen css start here
  contactTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'between',
    paddingVertical: 12,
    height: 60,
    paddingHorizontal: 20,
  },

  searchBarContainer: {
    height: 60,
    paddingTop: 12,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },

  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderWidth: 2,
    borderColor: '#D1D0D0',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    position: 'relative',
  },

  searchIcon: {
    position: 'absolute',
    left: 12,
  },

  searchInput: {
    flex: 1,
    paddingLeft: 28,
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#000',
  },

  listContainer: {
    height: screenHeight - 204,
    backgroundColor: '#EAEAEA',
  },

  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  contactItem: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    marginBottom: 1,
    width: '100%',
  },

  contactItemUser: {
    width: 40,
    height: 40,
    backgroundColor: '#FEF3C7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  contactItemText: {
    width: windowWidth - 104,
    paddingHorizontal: 12,
  },

  contactDotsIcon: {
    width: 20,
  },

  // contact details screen css start here
  arrowDeleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },

  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  saveShareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: windowWidth - 48,
  },

  saveShareButtonText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
