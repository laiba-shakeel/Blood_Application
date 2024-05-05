import { StyleSheet } from 'react-native';
import color from '../../constant/color';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  horizontalSeparator: {
    height: 0.5,
    width: '100%',
    position: 'absolute',
    borderWidth: 0.1,
    backgroundColor: "#C2CDD8",
  },
  text: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    color: '#C2CDD8',
    backgroundColor: color.WHITE,
    textAlign: 'center',
    paddingHorizontal: widthPercentageToDP('5%'),
  },
});