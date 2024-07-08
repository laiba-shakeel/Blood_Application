import React from 'react';
import style from './style';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Category from '../../Assets/Category.png';
import Notification from '../../Assets/Notifications.png';
import {useNavigation} from '@react-navigation/native';
const CustomizeHeader = ({left, center, right, text}) => {
  const navigation = useNavigation();
  const HandleGoBack = () => {
    navigation.goBack('');
  };
  return (
    <View style={style.container}>
      {left && (
        <TouchableOpacity onPress={HandleGoBack} style={style.button}>
          <Image source={Category} alt="blood" style={style.img} />
        </TouchableOpacity>
      )}
      {center && (
        <View style={style.titleContainer}>
          <Text style={style.Title}>{text}</Text>
        </View>
      )}
      {right && (
        <TouchableOpacity onPress={HandleGoBack} style={style.button}>
          <Image source={Notification} alt="blood" style={style.img} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomizeHeader;
