import React, {useState} from 'react';
import {Image, Pressable, Text, View, TextInput} from 'react-native';
import styles from './Style';
import bloodImg from '../../Assets/blood-img.jpg';
import {useNavigation} from '@react-navigation/native';
import OutlineButton from '../../Components/OutlineButton';
import color from '../../constant/color';
// import InputBox from '../../Components/TextInput/index';
const Login = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const HandleLogin = () => {
    navigation.navigate('SignIn');
  };
  const handleEmailChange = text => {
    setFormData({...formData, email: text});
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mv}>
        <Text style={styles.mainHeading}>Login In</Text>
      </View>

      <View style={styles.mainSection}>
        <View
          style={{
            flexDirection: 'column',
            // marginTop: '8%',
            justifyContent: 'space-around',
            // marginHorizontal: 25,
            gap: 5,
          }}>
          <Text style={{color: '#494F55', fontSize: 14, fontWeight: 'bold'}}>
            Email Address
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={formData.email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
          />
          {/* <InputBox
          placeholder="Enter email address"
          type="email"
          // value={formData.emailemail}
          // onChangeText={handleEmailChange}
        /> */}
        </View>
        {/* <OutlineButton
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
            Login
          </OutlineButton> */}
      </View>
    </View>
  );
};

export default Login;
