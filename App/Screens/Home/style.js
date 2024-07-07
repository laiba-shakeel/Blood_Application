import {StyleSheet} from 'react-native';
import color from '../../constant/color';
import scale from '../../constant/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
    backgroundColor: color.WHITE,
    paddingTop: scale(16),
  },
  image: {
    justifyContent: 'center',
    width: '100%',
  },
  heroContainer: {
    // borderWidth: 1,
    width: '77%',
  },
  footer: {
    borderWidth: 1,
    paddingTop:10
  },
  SectionMainContainer: {
    // borderWidth:1,
    marginTop: 20,
    // marginRight:25 ,
    // flex:1,
  },
  qoutation: {
    fontWeight: '700',
    fontFamily: 'Lato-Regular',
    fontSize: 26,
    paddingVertical: 20,
    // textAlign: 'center',
    color: color.BLACK,
    // paddingVertical: 10,
    letterSpacing: 1,
    lineHeight: 35,
    // borderWidth:1
  },
});
export default styles;
