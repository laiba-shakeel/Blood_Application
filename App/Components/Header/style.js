import {StyleSheet} from 'react-native';
import color from '../../constant/color';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: color.BACKGROUND_LIGHT,
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 20,
    height: 20,
  },
  Title: {
    fontSize: 18,
    fontWeight: '500',
    color: color.BLACK,
    letterSpacing:1
  },
  titleContainer: {
    // borderWidth:1,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 35,
  },
});
