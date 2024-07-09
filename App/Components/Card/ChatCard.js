import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import color from '../../constant/color';
import {SvgXml} from 'react-native-svg';
import SvgIcons from '../../Assets/svg';
import {launchCamera} from 'react-native-image-picker';
const ChatCard = ({img, title, hour}) => {
  const handleCameraPress = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        console.log('Image URI: ', response.assets[0].uri);
        // Do something with the captured image URI
      }
    });
  };

  return (
    <View style={[styles.card, {backgroundColor: color.WHITE}]}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={img}
          style={{width: 40, height: 40, borderWidth: 1, borderRadius: 25}}
        />
        <View
          style={{
            gap: 5,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.descp}>{hour}</Text>
        </View>
        <View
          style={{
            paddingRight: 15,
            justifyContent: 'flex-end',
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={handleCameraPress}>
            <SvgXml xml={SvgIcons.camera} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E9F1FF',
  },
  time: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontSize: 14,
    color: '#002055',
    fontWeight: '500',
    // marginTop: 5,
  },
  descp: {
    fontSize: 11,
    lineHeight: 11,
    color: '#848A94',
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
