import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: '100%',
  },
  mainSection: {
    backgroundColor: 'white',
    borderWidth: 1,
    flexDirection: 'column',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: 20,
    borderTopWidth: 1,
    paddingHorizontal: 25,
    borderColor: 'white',
  },
  description: {
    paddingVertical:2,
    // borderWidth:1,
    color:color.TEXT_GREY,
    textAlign:'center',
    fontSize:14,
    fontWeight:'500',
    lineHeight:24,
    paddingHorizontal:20
  },
  mainHeading: {
    color: color.TextColor,
    fontSize: 46,
    textAlign: 'center',
    letterSpacing: 1,
    fontWeight: 'bold',
    fontFamily: 'Lato-Black',
  },
  mb: {
    paddingTop: 40,
    marginBottom: 10,
  },
  imageContainer: {
    // paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 342,
    width: '100%',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  qoutation: {
    fontWeight: '700',
    fontFamily: 'Lato-Regular',
    fontSize: 37,
    textAlign: 'center',
    color: color.BLACK,
    paddingVertical: 10,
    letterSpacing: 0.9,
    lineHeight: 45,
    // borderWidth:1
  },
  mv: {
    paddingTop: 24,
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
