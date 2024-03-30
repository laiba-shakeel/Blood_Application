import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './Style';
import bloodImg from '../../Assets/blood-img.jpg';
import { useNavigation } from '@react-navigation/native';
import OutlineButton from '../../Components/OutlineButton';
import color from '../../constant/color';
const Welcome = () => {
  const navigation = useNavigation();
  const HandleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainSection}>
        <View style={styles.mb}>
          <Text style={styles.mainHeading}>Blood ICU</Text>
        </View>
        <Text style={styles.qoutation}>
          "Donate blood and be the reason for someone's existence"
        </Text>
        <View style={styles.imageContainer}>
          <Image source={bloodImg} alt="blood" style={styles.img} />
        </View>
        <TouchableOpacity
          onPress={HandleLogin}
          style={{
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            backgroundColor: color.red,
          }}>
          <Text
            center
            style={{
              color: color.WHITE,
              fontSize: 18,
              fontFamily: 'Lato-Regular',
              fontWeight: '500',
              letterSpacing: 2,
            }}>
         Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
