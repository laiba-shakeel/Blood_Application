import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';
import SignIn from '../Screens/Auth/Signup';
import Welcome from '../Screens/Auth/Welcome';
import WelcomeScreenTwo from '../Screens/Auth/WelcomeScreenTwo';
import WelcomeScreenThree from '../Screens/Auth/WelcomeScreenThree';
import WelcomeScreenFour from '../Screens/Auth/WelcomeScreenFour';
import Home from '../Screens/Home';

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Welcome'}
      screenOptions={{headerShown: false}}>
      <>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="WelcomeScreenTwo" component={WelcomeScreenTwo} />
        <Stack.Screen name='WelcomeScreenThree' component={WelcomeScreenThree} />
        <Stack.Screen name='WelcomeScreenFour' component={WelcomeScreenFour} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </>
    </Stack.Navigator>
  );
}
export default MainStack;
