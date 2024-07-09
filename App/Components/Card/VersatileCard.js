import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';
import color from '../../constant/color';

const VersatileCard = ({icon, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <SvgXml xml={icon} size={20} color="black" style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor:"#2d2d2d2d",
    gap:5
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight:'500',
    color:color.Gray_Text,
    lineHeight:18,
    letterSpacing:1
  },
});

export default VersatileCard;
