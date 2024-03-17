import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: 'black',
  },
  mainSection: {
    // borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    flex: 1,
    paddingHorizontal: 25,
    marginVertical: 20,
  },
  mainHeading: {
    color: '#4F0308',
    fontSize: 35,
    fontFamily: 'san-serif',
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing:1
  },
  mb:{
      marginBottom: 25,
  },
  imageContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '100%',
  },
  img: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  qoutation: {
    fontFamily: 'Roboto',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: '#4F0308',
    paddingVertical: 10,
    letterSpacing: 0.9,
  },
  mv: {
    marginVertical: 50,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
export default styles;
