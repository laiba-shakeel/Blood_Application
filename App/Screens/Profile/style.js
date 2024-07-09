import {StyleSheet} from 'react-native';
import color from '../../constant/color';
import scale from '../../constant/scale';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(23),
    backgroundColor: color.WHITE,
    paddingTop: scale(15),
  },
  image: {
    justifyContent: 'center',
    width: '100%',
    // borderWidth: 1,
    // paddingVertical: 5,
    alignItems:'center',
    paddingHorizontal:20
  },
  heroContainer: {
    // borderWidth: 1,
    paddingTop:25,
    // flex: 1,
    alignItems:'center'
  },
  ImageContainer: {
    borderWidth: 1,
    borderColor:color.WHITE,
    backgroundColor:'#3580FF66',
    width: 135,
    height: 135,
    borderRadius: 65,
    alignSelf: 'center',
    justifyContent:'center',
    alignContent:'center'
  },
  footer: {
    borderWidth: 1,
    // paddingTop: 10,
  },
  SectionMainContainer: {
    // borderWidth:1,
    // marginTop: 20,
    // marginRight:25 ,
    // flex:1,
  },
  desc:{
    fontSize:12,
    lineHeight:12,
    fontWeight:'bold',
    color:'#848A94',
    bottom:13
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
