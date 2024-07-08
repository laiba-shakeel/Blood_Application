import React from 'react';
import style from './style';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import arrow from '../../Assets/Backarrow.png';
import {useNavigation} from '@react-navigation/native';
const HeaderSection = ({text}) => {
  const navigation = useNavigation();
  const HandleGoBack = () => {
    navigation.goBack('');
  };
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={HandleGoBack} style={style.button}>
        <Image source={arrow} alt="blood" style={style.img} />
      </TouchableOpacity>
      <View style={style.titleContainer}>
        <Text style={style.Title}>{text}</Text>
      </View>
    </View>
  );
};

export default HeaderSection;
