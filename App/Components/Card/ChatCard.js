import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import color from '../../constant/color';
import { SvgXml } from 'react-native-svg';
import SvgIcons from '../../Assets/svg';

const ChatCard = ({task}) => {
  return (
    <View style={[styles.card, {backgroundColor: color.WHITE}]}>
      <View
        style={{
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image  />
        <View
          style={{
            borderWidth: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text></Text>
          <Text></Text>
        </View>
        <SvgXml xml={SvgIcons.camera}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
  },
  time: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginTop: 5,
  },
  people: {
    flexDirection: 'row',
    marginTop: 10,
  },
  person: {
    fontSize: 18,
    color: '#fff',
    marginRight: 5,
  },
});

export default ChatCard;
