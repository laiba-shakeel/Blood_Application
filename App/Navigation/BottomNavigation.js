import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import {SvgXml} from 'react-native-svg';
import SvgIcons from '../Assets/svg';
import ProgressScreen from '../Screens/ProgressScreen';
import AddTaskScreen from '../Screens/AddTaskScreen';
import ChatScreen from '../Screens/Chat';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconXml;
          if (route.name === 'Home') {
            iconXml = SvgIcons.home;
          } else if (route.name === 'ProgressScreen') {
            iconXml = SvgIcons.projects;
          } else if (route.name === 'Add') {
            iconXml = SvgIcons.plus;
          } else if (route.name === 'Chat') {
            iconXml = SvgIcons.chat;
          } else if (route.name === 'Profile') {
            iconXml = SvgIcons.profile;
          }
          return (
            <SvgXml xml={iconXml} width={25} height={35} fill={color} />
          );
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: '#2d2d2d2d',
        tabBarShowLabel: false,
        tabBarStyle: {height: 60, paddingBottom: 1, paddingTop: 5},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ProgressScreen" component={ProgressScreen} />
      <Tab.Screen
        name="Add"
        component={AddTaskScreen}
        options={{
          tabBarIconStyle: {
            width: 50,
            height: 50,
            borderRadius:50,
            backgroundColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;


