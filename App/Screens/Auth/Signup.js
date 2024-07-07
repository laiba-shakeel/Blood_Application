import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import googleIcon from '../../Assets/google.png';
import appleIcon from '../../Assets/path4.png';
import {useNavigation} from '@react-navigation/native';
import color from '../../constant/color';
import InputBox from '../../Components/TextInput/index';
import images from '../../Assets';
import scale from '../../constant/scale';
import SvgIcons from '../../Assets/svg';
import {SvgXml} from 'react-native-svg';
import OrSeparator from '../../Components/OrSeparator';
import auth from '@react-native-firebase/auth';
import welcomeStyle from './WelcomeStyle';
import HeaderSection from '../../Components/Header/Header';
const SignIn = () => {
  const navigation = useNavigation();
  const [visiblePass, setVisiblePass] = useState(false);
  const [email, setEmail] = useState('');
  const [name , setName] = useState('')
  const [password, setPassword] = useState('');
  const HandleLogin = () => {
    navigation.navigate('Home');
  };

  const handleLogin = () => {
    navigation.navigate('Home');
  };
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : ''}>
        <View style={styles.header}>
          <HeaderSection text="Sign In" />
        </View>
        <Text style={styles.qoutation}>Create Account</Text>
        <View style={styles.consize}>
          <Text style={styles.description}>
            Please Inter your email address and password for Login
          </Text>
        </View>
        <View style={styles.inputLogin}>
          <View>
            <InputBox
              containerStyle={{
                color: '#5b6b79',
              }}
              textStyle={{color: '#756EF3'}}
              placeholder="Albert Einestine"
              type="email"
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={{paddingTop: 5}}>
            <InputBox
              containerStyle={{
                color: '#5b6b79',
              }}
              textStyle={{color: '#756EF3'}}
              placeholder="albart.einestine@gmail.com"
              type="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={{paddingTop: 5}}>
            <InputBox
              containerStyle={{color: '#5b6b79'}}
              textStyle={{color: '#5b6b79'}}
              secureTextEntry={!visiblePass}
              placeholder="Enter Your Password"
              type="password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <SvgXml
              xml={!visiblePass ? images.eyeClose : images.eyeOpen}
              style={{
                width: 25,
                height: 25,
                alignSelf: 'flex-end',
                flexDirection: 'row',
                position: 'absolute',
                bottom: '20%',
                justifyContent: 'center',
                alignItems: 'center',
                right: '5%',
              }}
              onPress={() => setVisiblePass(!visiblePass)}
            />
          </View>
        </View>
        <TouchableOpacity
        // onPress={resetLogin}
        >
          <Text style={styles.forgotText}>Forgot the password?</Text>
        </TouchableOpacity>
        {/* <ActivityIndicator color={color.red} size={'large'} /> */}
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
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
            Sign In
          </Text>
        </TouchableOpacity>
        <View style={styles.SocialAppDiv}>
          <Text style={styles.centerGray}>Signin with</Text>
          <View style={styles.appDiv}>
            <TouchableOpacity style={styles.button}>
              <Image source={googleIcon} alt="blood" style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image source={appleIcon} alt="blood" style={styles.img} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.centerGray}>
            Not Registrar Yet?{' '}
            <Pressable onPress={HandleLogin}>
              <Text style={styles.space}>Sign Up</Text>
            </Pressable>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(25),
    backgroundColor: color.WHITE,
    paddingTop: scale(16),
    paddingBottom:35
  },
  img: {
    width: 100,
    height: 100,
  },
  space: {
    color: color.TextColor,
    fontWeight:'700',
    textAlign:'center',
  },
  SocialAppDiv: {
    // borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    borderWidth: 1,
    borderColor: color.BACKGROUND_LIGHT,
    width: 65,
    gap: 5,
    // flex:1,
    height: 65,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    // borderWidth: 1,
    marginVertical: 5,
    paddingBottom:20
  },
  img: {
    width: 25,
    height: 28,
  },
  consize: {
    width: 220,
  },
  appDiv: {
    // borderWidth: 1,
    paddingTop: 25,
    flexDirection: 'row',
    gap: 15,
  },
  description: {
    color: color.TEXT_GREY,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
  },
  qoutation: {
    fontWeight: '700',
    fontFamily: 'Lato-Regular',
    fontSize: 25,
    color: color.BLACK,
    paddingTop: 30,
    paddingBottom: 5,
  },
  MainText: {
    fontSize: 40,
    fontWeight: '800',
    fontFamily: 'Lato-Black',
    color: color.Text_Red,
    paddingTop: 24,
  },
  centerGray: {
    color: color.TEXT_GREY,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    fontSize: 14,
    textAlign: 'center',
  },
  icons: {
    height: '100%',
    width: '100%',
  },
  logo: {
    width: 100,
    height: 50,
  },
  inputLogin: {
    marginTop: scale(15, true),
  },
  input: {
    borderWidth: 0.2,
    borderRadius: 3,
    paddingHorizontal: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  forgot: {
    alignSelf: 'center',
    marginTop: scale(32, true),
  },
  forgotText: {
    color: color.BLACK,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    paddingTop: 10,
    paddingBottom: 35,
    left: 170,
    // paddingBottom: 18,
  },
  signUp: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    borderRadius: 16,
    borderColor: color.red,
  },
});

export default SignIn;
