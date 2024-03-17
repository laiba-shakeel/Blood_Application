import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './Style';
import bloodImg from '../../Assets/blood-img.jpg';
import {useNavigation} from '@react-navigation/native';
import OutlineButton from '../../Components/OutlineButton';
import {widthPercentageToDP} from 'react-native-responsive-screen';
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
          <Text style={styles.mainHeading}>Blood Donation</Text>
        </View>
        <Text style={styles.qoutation}>
          "Donate blood and be the reason for someone's existence"
        </Text>
        <View style={styles.imageContainer}>
          <Image source={bloodImg} alt="blood" style={styles.img} />
        </View>
        <OutlineButton
          containerStyle={{
            width: '100%',
            height: 55,
            backgroundColor: color.red,
          }}
          onPress={HandleLogin}
          textStyle={{
            fontSize: 25,
            fontFamily: 'Roboto',
            letterSpacing: 0.8,
            fontWeight: '500',
          }}>
          Get Started
        </OutlineButton>
      </View>
    </View>
  );
};

export default Welcome;
