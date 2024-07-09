import React from 'react';
import style from './style';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const CustomizeHeader = ({left, center, right, text, leftImage, rightImage, onLeftPress, onRightPress}) => {
  return (
    <View style={style.container}>
      {left && (
        <TouchableOpacity onPress={onLeftPress} style={style.button}>
          <Image source={leftImage} alt="left" style={style.img} />
        </TouchableOpacity>
      )}
      {center && (
        <View style={style.titleContainer}>
          <Text style={style.Title}>{text}</Text>
        </View>
      )}
      {right && (
        <TouchableOpacity onPress={onRightPress} style={style.button}>
          <Image source={rightImage} alt="right" style={style.img} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomizeHeader;


