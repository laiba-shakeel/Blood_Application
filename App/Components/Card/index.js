import React from 'react';
import {Image, Text, View} from 'react-native';
import color from '../../constant/color';
import people from '../../Assets/People.png';
const UserCard = ({
  bgcolor = color.TextColor,
  borderColor,
  mainTextColor,
  uiDesignKit,
  progress,
}) => {
  return (
    <View
      style={{
        marginTop: 20,
        paddingVertical: 25,
        backgroundColor: bgcolor,
        justifyContent: 'center',
        borderRadius: 20,
        paddingHorizontal: 12,
        gap: 5,
        borderWidth: 1,
        borderColor: borderColor,
        marginRight:10
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          lineHeight: 18,
          color: mainTextColor,
        }}>
        Application Design
      </Text>
      <Text
        style={{
          color: uiDesignKit,
          //   color: '#C5DAFD',
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 12,
          paddingTop: 5,
        }}>
        UI Design Kit
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          //   borderWidth: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Image
          source={people}
          alt="people"
          style={{width: 60, height: 30, resizeMode: 'contain'}}
        />
        <Text
          style={{
            color: uiDesignKit,
            fontSize: 12,
            fontWeight: '400',
            lineHeight: 20,
            paddingTop: 5,
            borderBottomWidth: 3.5,
            borderBottomColor: 'white',
          }}>
          Progress
        </Text>
        <Text
          style={{
            color: progress,
            fontSize: 12,
            fontWeight: '400',
            lineHeight: 12,
            paddingTop: 5,
          }}>
          50/80
        </Text>
      </View>
    </View>
  );
};

export default UserCard;
