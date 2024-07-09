import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomizeHeader from '../../Components/Header/HomeHeader';
import backgroundImage from '../../Assets/Ellipse.png';
import styles from './style';
import UserCard from '../../Components/Card';
import ListCard from '../../Components/ListCard';
import sixtyPercentImage from '../../Assets/sixty.png';
import seventyPercentImage from '../../Assets/seventy.png';
import eightyPercentImage from '../../Assets/eighty.png';
import CategoryImage from '../../Assets/Category.png';
import NotificationImage from '../../Assets/Notifications.png';
import {useNavigation} from '@react-navigation/native';
import {SvgXml} from 'react-native-svg';
import SvgIcons from '../../Assets/svg';
import color from '../../constant/color';
const Home = () => {
  const navigation = useNavigation();

  const handleLeftPress = () => {
    navigation.navigate('TaskScreen');
  };

  const handleRightPress = () => {
    console.log('navigate');
  };

  const data = [
    {
      title: 'Productivity Mobile App',
      task: 'Create Detail Booking',
      time: '2 min',
      progressImage: sixtyPercentImage,
    },
    {
      title: 'Banking Mobile App',
      task: 'Revision Home Page',
      time: '5 min',
      progressImage: seventyPercentImage,
    },
    {
      title: 'Online Course',
      task: 'Working On Landing Page',
      time: '7 min',
      progressImage: eightyPercentImage,
    },
    {
      title: 'Productivity Mobile App',
      task: 'Create Detail Booking',
      time: '2 min',
      progressImage: sixtyPercentImage,
    },
    {
      title: 'Banking Mobile App',
      task: 'Revision Home Page',
      time: '5 min',
      progressImage: seventyPercentImage,
    },
    {
      title: 'Online Course',
      task: 'Working On Landing Page',
      time: '7 min',
      progressImage: eightyPercentImage,
    },
  ];

  return (
    <View style={styles.container}>
      <CustomizeHeader
        left
        center
        right
        text="Friday, 26"
        leftImage={CategoryImage}
        rightImage={NotificationImage}
        onLeftPress={handleLeftPress}
        onRightPress={handleRightPress}
      />
      <View style={styles.heroContainer}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="contain"
          style={styles.image}>
          <Text style={styles.qoutation}>Let’s make a habits together 🙌</Text>
        </ImageBackground>
      </View>
      <View style={styles.SectionMainContainer}>
        <ScrollView horizontal style={{paddingHorizontal: 10}}>
          <UserCard
            borderColor="white"
            mainTextColor="white"
            uiDesignKit="#C5DAFD"
            progress="#ffffff"
          />
          <UserCard
            bgcolor="white"
            borderColor="#000000"
            mainTextColor="black"
            uiDesignKit="gray"
            progress="2d2d2d"
          />
          <UserCard
            borderColor="white"
            mainTextColor="white"
            uiDesignKit="#C5DAFD"
            progress="#ffffff"
          />
          <UserCard
            bgcolor="white"
            borderColor="#000000"
            mainTextColor="black"
            uiDesignKit="gray"
            progress="2d2d2d"
          />
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 5,
          marginTop: 15,
          paddingVertical:10
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: color.BLACK,
            letterSpacing: 1,
          }}>
          In Progress
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TaskScreen');
          }}>
          <SvgXml xml={SvgIcons.rightArrow} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginTop: 1, paddingBottom: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator
        style={{ paddingVertical: 10, marginVertical: 10 }}
      >
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('ProgressScreen')}
          >
            <ListCard
              title={item.title}
              task={item.task}
              time={item.time}
              progressImage={item.progressImage}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    </View>
  );
};

export default Home;
