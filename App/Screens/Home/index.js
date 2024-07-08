import React from 'react';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import CustomizeHeader from '../../Components/Header/HomeHeader';
import backgroundImage from '../../Assets/Ellipse.png';
import styles from './style';
import UserCard from '../../Components/Card';
import ListCard from '../../Components/ListCard';
import sixtyPercentImage from '../../Assets/sixty.png';
import seventyPercentImage from '../../Assets/seventy.png';
import eightyPercentImage from '../../Assets/eighty.png';
const Home = () => {
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
  ];

  return (
    <View style={styles.container}>
      <CustomizeHeader
        left={true}
        right={true}
        center={true}
        text="Friday, 26"
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
        </ScrollView>
      </View>
      <View style={{flex: 1, marginTop: 15, paddingBottom: 10}}> 
        <ScrollView
          showsVerticalScrollIndicator
          style={{paddingVertical: 10, marginVertical: 20}}>
          {data.map((item, index) => (
            <ListCard
              key={index}
              title={item.title}
              task={item.task}
              time={item.time}
              progressImage={item.progressImage}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default Home;
