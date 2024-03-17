import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput as RNTextInput,
  useColorScheme,
} from 'react-native';
import color from '../../constant/color';
import { SvgXml } from 'react-native-svg';
import images from '../../Assets/index';

const InputBox = ({
  hidePassword = true,
  type,
  leftIcon,
  placeholder,
  handleOnChange,
  value = '',
  textStyle = {},
  ...props
}) => {

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {type === 'password' && leftIcon && <SvgXml xml={images.profile} />}
      <RNTextInput
        secureTextEntry={type === 'password' && hidePassword}
        style={[
          {
            color: color.ORANGE,
            borderBottomColor: color.TEXT_GREY,
            borderWidth: 0,
            borderBottomWidth: 0.6,
          },
          props.style,
        ]}
        value={value}
        placeholder={placeholder}
        onChangeText={handleOnChange}
        placeholderTextColor="#5b6b79"
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
    </KeyboardAvoidingView>
  );
};

export default InputBox;
