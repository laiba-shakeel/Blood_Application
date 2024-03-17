import {StyleSheet} from 'react-native';
import colors from '../../constant/color';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    paddingHorizontal: widthPercentageToDP('1.5%'),
    paddingVertical: widthPercentageToDP('1.5%'),
    height: heightPercentageToDP('5%'),
    // borderBottomWidth: 1,
    borderColor: '#5b6b79',
    borderRadius: 10,
    // borderBlockColor: colors.BACKGROUND_LIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,

    // width: widthPercentageToDP('100%')
  },
  verticalSeparator: {
    backgroundColor: colors.BACKGROUND_LIGHT,
    width: 1,
    height: '50%',
  },
  numberTextInput: {
    height: '100%',
    fontSize: RFPercentage(2),
    paddingVertical: 0,
    paddingHorizontal: widthPercentageToDP('2%'),
    paddingLeft: 0,
    color: colors.BLACK,
  },
  textInput: {
    height: 40,
    fontSize: RFPercentage(2),
    paddingVertical: 0,
    width: '100%',
    paddingHorizontal: widthPercentageToDP('2%'),
    color: '#5b6b79',
  },
});
