import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TextInput as RNTextInput,
  Text,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import color from '../../constant/color';
import images from '../../Assets';
const InputBox = ({
  hidePassword = true,
  type,
  leftIcon,
  placeholder,
  handleOnChange,
  value = '',
  textStyle = {},
  label,
  keyboardType = 'default',
  ...props
}) => {
  const isDarkMode = true;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {type === 'password' && leftIcon && <SvgXml xml={images.profile} />}
      <Text
        style={{
          color: '#51677B',
          fontSize: 12,
          fontWeight: '600',
          fontFamily: 'Lato-Bold',
          paddingBottom: 8
        }}>
        {label}
      </Text>
      <RNTextInput
        secureTextEntry={type === 'password' && hidePassword}
        style={[
          {
            color: '#51677B',
            fontSize: 16,
            fontWeight: '400',
            borderBottomColor: color.TEXT_GREY,
            borderWidth: 1,
            borderColor:'#E9F1FF',
            backgroundColor: color.WHITE,
            borderRadius: 16,
            height: 56,
            paddingHorizontal: 12
          },
          props.style,
        ]}
        value={value}
        placeholder={placeholder}
        onChangeText={handleOnChange}
        keyboardType={keyboardType}
        placeholderTextColor="#5b6b79"
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
    </KeyboardAvoidingView>
  );
};

export default InputBox;
