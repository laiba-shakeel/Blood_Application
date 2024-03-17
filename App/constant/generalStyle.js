import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import colors from './color';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  containerPaddingHorizontal: {
    paddingHorizontal: widthPercentageToDP('2%'),
  },
  containerPaddingVertical: {
    paddingVertical: widthPercentageToDP('5%'),
  },
  textOrange: {
    color: colors.ORANGE,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentEvenly: {
    justifyContent: 'space-evenly',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  mt10: {
    marginTop: heightPercentageToDP('3%'),
  },
  mb10: {
    marginBottom: heightPercentageToDP('3%'),
  },
});
