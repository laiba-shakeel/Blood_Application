import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import CustomizeHeader from '../../Components/Header/HomeHeader';
import arrow from '../../Assets/Backarrow.png';
import backgroundImage from '../../Assets/Ellipse.png';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import img2 from '../../Assets/humi.png';
const Profile = () => {
  const navigation = useNavigation();
  const HandleGoBack = () => {
    navigation.goBack('');
  };
  return (
    <View style={styles.container}>
      <CustomizeHeader
        left
        center
        text="Profile"
        leftImage={arrow}
        onLeftPress={HandleGoBack}
      />
      <View style={styles.heroContainer}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="contain"
          style={styles.image}>
          <View style={styles.ImageContainer}>
            <Image
              source={img2}
              resizeMode='cover'
              style={{width: 115, height: 120, alignSelf:'center', top:8}}
            />
          </View>
          <Text style={styles.qoutation}>Rosy Ainstain</Text>
          <Text style={styles.desc}>@albart.ainstain</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Profile;
