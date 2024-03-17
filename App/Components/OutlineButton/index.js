import {RFPercentage} from 'react-native-responsive-fontsize';
import style from './style';
import color from '../../constant/color';

const {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} = require('react-native');

const OutlineButton = ({
  children,
  onPress,
  containerStyle,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[style.container, containerStyle]}
      onPress={onPress}>
      <Text style={[style.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export const LoadingButton = ({isLoading, onPress, text, disabled = false}) => {
  return (
    // <View style={[style.buttonContainer, {backgroundColor:'pink'}]}>
    <TouchableOpacity
      style={{
        backgroundColor: color.red,
        borderRadius: 20,
        justifyContent: 'center',
        height: 40,
        alignItems: 'center',
        width: '100%',
      }}
      disabled={disabled}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator
          size={'small'}
          color="white"
          style={{alignSelf: 'center'}}
        />
      ) : (
        <Text style={{fontSize: RFPercentage(2.5), color: 'white'}}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
    // </View>
  );
};

export default OutlineButton;
