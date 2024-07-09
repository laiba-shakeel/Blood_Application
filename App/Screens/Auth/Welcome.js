import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './Style';
import heroImage from '../../Assets/banner-purple.png';
import {useNavigation} from '@react-navigation/native';
import OutlineButton from '../../Components/OutlineButton';
import color from '../../constant/color';
const Welcome = () => {
  const navigation = useNavigation();
  const HandleLogin = () => {
    navigation.navigate('WelcomeScreenTwo');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image source={heroImage} alt="blood" style={styles.img} />
      </View>
      <View style={styles.mainSection}>
        <View style={styles.mb}>
          <Text style={styles.mainHeading}>Taskey</Text>
        </View>
        <Text style={styles.qoutation}>Building Better Workplaces </Text>
        <Text style={styles.description}>Create a unique emotional story that describes better than words</Text>
        <TouchableOpacity
          onPress={HandleLogin}
          style={{
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            marginTop:25,
            backgroundColor: color.TextColor,
          }}>
          <Text
            center
            style={{
              color: color.WHITE,
              fontSize: 20,
              fontFamily: 'Lato-Regular',
              fontWeight: '700',
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
