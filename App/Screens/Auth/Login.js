import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import bloodImg from '../../Assets/blood-img.jpg';
import {useNavigation} from '@react-navigation/native';
import color from '../../constant/color';
import InputBox from '../../Components/TextInput/index';
import images from '../../Assets';
import scale from '../../constant/scale';
import SvgIcons from '../../Assets/svg';
import {SvgXml} from 'react-native-svg';
import OrSeparator from '../../Components/OrSeparator';
import auth from '@react-native-firebase/auth';
const Login = () => {
  const navigation = useNavigation();
  const [visiblePass, setVisiblePass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const HandleLogin = () => {
    navigation.navigate('SignIn');
  };
  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      console.log('Logged in user:', user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : ''}>
        <View style={styles.logoApp}>
          <Image source={bloodImg} alt="blood" style={styles.logo} />
          <Text style={styles.logoText}>Blood ICU</Text>
          <Text style={styles.MainText}>Welcome back!</Text>
        </View>
        <View style={styles.inputLogin}>
          <View>
            <InputBox
              containerStyle={{
                color: '#5b6b79',
              }}
              label={'Email'}
              textStyle={{color: '#5b6b79'}}
              placeholder="Enter email address"
              type="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={{paddingTop: 16}}>
            <InputBox
              containerStyle={{color: '#5b6b79'}}
              textStyle={{color: '#5b6b79'}}
              secureTextEntry={!visiblePass}
              placeholder="Enter Password"
              label={'Password'}
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
            backgroundColor: color.red,
          }}>
          <Text
            center
            style={{
              color: color.WHITE,
              fontSize: 16,
              fontFamily: 'Lato-Regular',
              fontWeight: '500',
              letterSpacing: 2,
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <View style={{paddingTop: 24}}>
          <OrSeparator />
        </View>
        <View style={{gap: 16, paddingTop: 24}}>
          <TouchableOpacity
            // onPress={onGoogleLogin}
            style={{
              height: 56,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              backgroundColor: color.red,
              flexDirection: 'row',
              gap: 8,
            }}>
            <View style={{width: 20, height: 20}}>
              <SvgXml xml={SvgIcons.googleIcon} />
            </View>
            <Text
              center
              style={{
                color: color.WHITE,
                fontSize: 16,
                fontFamily: 'Lato-Regular',
                fontWeight: '500',
                letterSpacing: 2,
                // width: 210,
              }}>
              Continue via Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={onFacebookLogin}
            style={{
              height: 56,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              backgroundColor: color.red,
              flexDirection: 'row',
              gap: 8,
            }}>
            <View style={{width: 20, height: 20}}>
              <SvgXml xml={SvgIcons.facebookIcon} />
            </View>
            <Text
              center
              style={{
                color: color.WHITE,
                fontSize: 16,
                fontFamily: 'Lato-Regular',
                fontWeight: '500',
                letterSpacing: 2,
                // width: 210,
              }}>
              Continue via Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}
          onPress={HandleLogin}>
          <Text style={styles.forgotText}>Create new account</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
    backgroundColor: color.WHITE,
    paddingTop: scale(16),
  },
  logoApp: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: color.Text_Red,
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Lato-Black',
    paddingTop: 8,
  },
  MainText: {
    fontSize: 40,
    fontWeight: '800',
    fontFamily: 'Lato-Black',
    color: color.Text_Red,
    paddingTop: 24,
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
    marginTop: scale(24, true),
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
    color: color.Gray_Text,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    paddingVertical: 20,
    paddingBottom: 18,
  },
  signUp: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    borderRadius: 16,
    borderColor: color.red,
  },
});

export default Login;
