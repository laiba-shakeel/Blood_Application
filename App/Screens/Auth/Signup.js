import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Modal,
  Text as TextDefault,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import images from '../../Assets';
import scale from '../../constant/scale';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import InputBox from '../../Components/TextInput/index';
import color from '../../constant/color';

const SignUp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [visiblePass, setVisiblePass] = useState(false);

  // const [SignUp, { isLoading }] = useSignupMutation();

  // const validatePassword = () => {
  //   if (password.length < 8) {
  //     setErrorMsg('Password must be at least 8 characters long');
  //     return false;
  //   }

  //   if (!/\d/.test(password)) {
  //     setErrorMsg('Password must contain at least one number');
  //     return false;
  //   }
  //   if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
  //     setErrorMsg('Password must contain at least one special character');
  //     return false;
  //   }
  //   return true;
  // };

  // const handleFirebaseSignUp = () => {
  //   setErrorMsg('');
  //   if (!isChecked) {
  //     setErrorMsg('Please Accept Terms and Conditions');
  //     return;
  //   }
  //   if (!validationEmail(email)) {
  //     setErrorMsg('Email not Valid');
  //     return;
  //   }
  //   if (!validatePassword()) {
  //     return;
  //   }
  //   if (firstName.length < 3 || lastName.length < 3) {
  //     setErrorMsg('Name Length less than 3 character');
  //     return;
  //   }
  //   auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(res => {
  //       if (res?.user?._user?.uid) {
  //         handleSignUp(res?.user?._user?.uid);
  //       } else {
  //         setErrorMsg('User UId Not found');
  //         return;
  //       }
  //     })
  //     .catch(err => {
  //       console.log('error', err);
  //     });
  // };

  // const handleSignUp = async uid => {
  //   const signUpPayload = {
  //     firstName,
  //     lastName,
  //     email,
  //     age,
  //     uid,
  //   };
  //   try {
  //     const res = await SignUp(signUpPayload).unwrap();
  //     console.log('res', res);
  //     navigation.navigate('Login');
  //   } catch (error) {
  //     console.log('error', error);
  //     setErrorMsg(error?.data?.message);
  //   }
  // };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'position' : ''}>
        <View style={styles.logoApp}>
          <TextDefault style={styles.MainText}>Sign up</TextDefault>
        </View>
        <View style={styles.inputLogin}>
          <View>
            <InputBox
              containerStyle={{
                color: '#5b6b79',
              }}
              label={'First Name'}
              textStyle={{ color: '#5b6b79' }}
              onChangeText={text => setFirstName(text)}
              value={firstName}
              placeholder={'Enter First Name'}
            />
          </View>
          <View>
            <InputBox
              containerStyle={{
                color: '#5b6b79',
              }}
              label={'Last Name'}
              textStyle={{ color: '#5b6b79' }}
              onChangeText={text => setLastName(text)}
              value={lastName}
              placeholder={'Enter Last Name'}
            />
          </View>

          <View>
            <InputBox
              containerStyle={{
                color: '#5b6b79',
              }}
              label={'Email'}
              textStyle={{ color: '#5b6b79' }}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder={'Enter Email'}
              keyboardType="email-address"
            />
          </View>
          <View>
            <InputBox
              containerStyle={{
                color: '#5b6b79',
              }}
              label={'Age'}
              textStyle={{ color: '#5b6b79' }}
              onChangeText={text => setAge(text)}
              value={age}
              placeholder={'Enter Age'}
              keyboardType="numeric"
            />
          </View>
          <View>
            <InputBox
              containerStyle={{ color: '#5b6b79' }}
              textStyle={{ color: '#5b6b79' }}
              secureTextEntry={!visiblePass}
              placeholder="Enter Password"
              value={password}
              label={'Password'}
              type="password"
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

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <TextDefault style={styles.termsText}>
            Please accept Terms and Conditions
          </TextDefault>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => handleFirebaseSignUp()}
          style={{
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            backgroundColor: color.red,
            marginTop: scale(24),
          }}>
          <TextDefault
            center
            style={{
              color: color.WHITE,
              fontSize: 16,
              fontFamily: 'Lato',
              fontWeight: '500',
            }}>
            Sign Up
          </TextDefault>
        </TouchableOpacity>
        <View style={styles.signUp}>
          <TextDefault style={styles.alreadyAccountText}>
            Already have an account?{' '}
          </TextDefault>
          <TextDefault
            style={styles.highlightText}
            onPress={() => navigation.navigate('Login')}>
            Login In
          </TextDefault>
        </View>
        {/* Modal  */}
        <Modal
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: scale(16),
              }}>
              <TextDefault style={styles.termsHeading}>
                By signing up I accept Terms and Conditions
              </TextDefault>
            </View>
            <TextDefault style={styles.modalText}>
              The application cannot and does not contain any malicious code or
              harmful elements intended to damage or disrupt users' devices or
              data. We prioritize the security and safety of our users and their
              information. Our development process adheres to strict standards
              and protocols to mitigate any potential risks or vulnerabilities.
              Additionally, we regularly update our systems and monitor for any
              emerging threats to ensure a secure user experience.
            </TextDefault>

            <View style={styles.modalContainer}>
              <CheckBox
                onClick={() => {
                  setIsChecked(!isChecked);
                  setModalVisible(false);
                }}
                isChecked={isChecked}
                checkBoxColor="#51677B"
              />
              <TextDefault style={styles.iAcceptText}>
                By signing up I accept Terms and Conditions
              </TextDefault>
            </View>
            <TouchableOpacity
              // onPress={() => handleFirebaseSignUp()}
              style={{
                height: 56,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16,
                backgroundColor: color.red,
                marginTop: scale(24),
              }}>
              <TextDefault
                center
                style={{
                  color: color.WHITE,
                  fontSize: 16,
                  fontFamily: 'Lato-Regular',
                  fontWeight: '500',
                }}>
                Sign Up
              </TextDefault>
            </TouchableOpacity>
            <View style={styles.signUp}>
              <TextDefault style={styles.alreadyAccountText}>
                Already have an account?{' '}

              </TextDefault>
              <TextDefault
                style={styles.highlightText}
                onPress={() => navigation.navigate('Login')}>
                Login In
              </TextDefault>
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </ScrollView>
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
    paddingBottom: 24,
  },
  logo: {
    marginBottom: scale(12, true),
    marginLeft: scale(12),
    width: scale(100),
    height: scale(100),
  },
  inputLogin: {
    rowGap: 16,
  },
  icon: {
    width: scale(24),
    height: scale(24, true),
  },
  margin24: {
    marginTop: scale(24, true),
  },
  forgot: {
    alignSelf: 'center',
    marginTop: scale(32, true),
  },
  signUp: {
    alignSelf: 'center',
    paddingTop: scale(24),
    justifyContent: 'flex-end',
    borderRadius: 16,
    flexDirection: 'row'
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  loginSocial: {
    marginTop: scale(80, true),
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameLoginSocial: {
    marginTop: scale(20, true),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: scale(40, true),
  },
  buttonFacebook: {
    flexDirection: 'row',
    marginTop: scale(15, true),
    width: scale(152),
    height: scale(50, true),
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.BLACK,
  },
  buttonTwitter: {
    flexDirection: 'row',
    marginTop: scale(15, true),
    width: scale(152),
    height: scale(50, true),
    borderRadius: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.BLACK,
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

  modalView: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  modalCloseContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalText: {
    textAlign: 'justify',
    color: '#182234',
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24
  },
  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: scale(16),
    gap: 8,
  },

  MainText: {
    fontSize: 40,
    fontWeight: '800',
    fontFamily: 'Lato-Black',
    color: color.Text_Red,
  },
  termsText: {
    color: color.Text_Red,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    paddingTop: 24,
  },
  alreadyAccountText: {
    color: color.TEXT_GREY,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
  },
  termsHeading: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Lato-Black',
    color: color.Text_Red,
  },
  iAcceptText: {
    fontFamily: 'Lato-Regular',
    fontWeight: '400',
    fontSize: 16,
    color: color.Text_Red,
  },
  highlightText: {
    color: color.Text_Red,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
  }
});

export default SignUp;
