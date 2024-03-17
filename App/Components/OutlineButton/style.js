import {StyleSheet} from 'react-native';
import colors from '../../constant/color';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    backgroundColor: "#FC46AA",
    borderRadius: 20 , 
    justifyContent:"center", 
    height:40,
    width:100,
    borderWidth:1,
    borderColor:'white'
  },
  text: {
    textAlign: 'center',
    fontSize: RFPercentage(2),
    color: colors.WHITE
  },
  buttonContainer: {
    marginTop: heightPercentageToDP('1.5%'),
    paddingHorizontal: widthPercentageToDP('30%'),
    // justifyContent:'center',
    // alignItems:'center',
  },
});
