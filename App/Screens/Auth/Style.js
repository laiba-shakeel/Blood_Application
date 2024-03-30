import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    // borderWidth: 5,
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
    color: color.Text_Red,
    fontSize: 42,
    textAlign: 'center',
    letterSpacing:1,
    fontWeight: '800',
    fontFamily: 'Lato-Black',
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
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    fontSize: 25,
    textAlign: 'center',
    color: color.Text_Red,
    paddingVertical: 10,
    letterSpacing: 0.9,
  },
  mv: {
    paddingTop:24,
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
