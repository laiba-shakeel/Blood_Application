import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import welcomeStyle from './WelcomeStyle';
import bannerImage from '../../Assets/welcomeimg.png';
import leftFowrwardImage from '../../Assets/rectangle.png';
import arrowImage from '../../Assets/arrow.png';
import {useNavigation} from '@react-navigation/native';
import OutlineButton from '../../Components/OutlineButton';
import color from '../../constant/color';
const WelcomeScreenThree = () => {
  const navigation = useNavigation();
  const HandleNextScreen = () => {
    navigation.navigate('WelcomeScreenFour');
  };
  const HandleGoBack = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView style={welcomeStyle.mainContainer}>
      <View style={welcomeStyle.imageContainer}>
        <Image source={bannerImage} alt="blood" style={welcomeStyle.img} />
      </View>
      <View style={welcomeStyle.mainSection}>
        <View style={welcomeStyle.mb}>
          <Text style={welcomeStyle.mainHeading}>Task Management</Text>
        </View>
        <Text style={welcomeStyle.qoutation}>
          Work more <Text style={welcomeStyle.space}>Structured</Text> and
          Organized 👌
        </Text>
      </View>
      <View style={welcomeStyle.footer}>
        <Pressable onPress={HandleGoBack}>
          <Text style={welcomeStyle.description}>Skip</Text>
        </Pressable>
        <Pressable onPress={HandleNextScreen}>
          <View style={welcomeStyle.fowardContainer}>
            <Image
              source={leftFowrwardImage}
              alt="blood"
              style={welcomeStyle.imageCover}
            />
          </View>
          <Image
            source={arrowImage}
            alt="blood"
            style={welcomeStyle.arrowStyle}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default WelcomeScreenThree;
