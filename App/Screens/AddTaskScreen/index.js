import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import VersatileCard from '../../Components/Card/VersatileCard';
import SvgIcons from '../../Assets/svg';
import CustomizeHeader from '../../Components/Header/HomeHeader';
import {useNavigation} from '@react-navigation/native';
import arrow from '../../Assets/Backarrow.png';
import plus from '../../Assets/plus.jpg';

const AddTaskScreen = () => {
  const navigation = useNavigation();
  const HandleGoBack = () => {
    navigation.goBack('');
  };
  return (
    <View
      style={{
        flex: 1,
        // paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        // borderWidth: 1,
        paddingTop: 25,
      }}>
      <View style={{paddingHorizontal:15}}>
        <CustomizeHeader
          left
          center
          right
          text="Create Task"
          leftImage={arrow}
          rightImage={plus}
          onLeftPress={HandleGoBack}
          onRightPress={HandleGoBack}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingVertical: 20,
          gap: 20,
          paddingHorizontal: 20,
          backgroundColor: '#ffffff',
        }}>
        <VersatileCard
          icon={SvgIcons.edit}
          text="Create Task"
          onPress={() => {
            /* Handle press */
          }}
        />
        <VersatileCard icon={SvgIcons.plusBox} text="Create Project" />
        <VersatileCard icon={SvgIcons.users} text="Create Team" />
        <VersatileCard icon={SvgIcons.time} text="Create Evenet" />
      </View>
    </View>
  );
};

export default AddTaskScreen;
