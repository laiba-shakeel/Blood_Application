import {StyleSheet} from 'react-native';
import color from '../../constant/color';

const welcomeStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  // headerImageContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 25,
  //   width: '100%',
  // },
  mainSection: {
    backgroundColor: 'white',
    // borderWidth: 1,
    flexDirection: 'column',
    flex: 1,
    // bottom: 20,
    paddingHorizontal: 25,
    // borderColor: 'black',
  },
  imageContainer: {
    // paddingVertical: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 434,
    width: '100%',
    // borderWidth: 1,
  },
  footer: {
    // borderWidth: 1,
    flex:1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    // paddingVertical: 25,
    width:'100%'
  },
  description: {
    paddingVertical:2,
    // borderWidth:1,
    color:color.TEXT_GREY,
    textAlign:'center',
    fontSize:14,
    fontWeight:'500',
    lineHeight:24,
    paddingHorizontal:25
  },
  img: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  imageCover:{
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  arrowStyle:{
    height:25,
    width:30,
    // position:'absolute',
    // backgroundColor:'black',
    left:100,
    alignItems:'center',
    bottom:50
  },
  mb: {
    paddingTop: 16,
    // marginBottom: 10,
  },
  mainHeading: {
    color: color.TextColor,
    fontSize: 18,
    lineHeight: 18,
    fontWeight: '400',
    fontFamily: 'Lato-Black',
  },
  qoutation: {
    fontWeight: '700',
    fontFamily: 'Lato-Regular',
    fontSize: 37,
    // textAlign: 'center',
    color: color.BLACK,
    paddingVertical: 10,
    letterSpacing: 0.9,
    lineHeight: 45,
    // borderWidth:1
  },
  space: {
    color: color.TextColor,
  },
  fowardContainer:{
      // justifyContent: 'center',
      // alignItems: 'center',
      height: 100,
      width: 139,
      padding:0,
      paddingLeft:79,
      position:'relative'
      // borderWidth: 1,
  }
});
export default welcomeStyle;
