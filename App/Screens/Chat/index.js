import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ChatCard from '../../Components/Card/ChatCard';
import CustomizeHeader from '../../Components/Header/HomeHeader';
import arrow from '../../Assets/Backarrow.png';
import plus from '../../Assets/plus.jpg';
import {useNavigation} from '@react-navigation/native';
import {dummyData} from '../../Utils/DummyData';

const ChatScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const HandleGoBack = () => {
    navigation.goBack('');
  };
  const handleChatPress = (item) => {
    console.log("Chat pressed:", item);
    // Navigate or handle chat item press
  };
  return (
    <View style={styles.container}>
      <CustomizeHeader
        left
        center
        right
        text="Chat"
        leftImage={arrow}
        rightImage={plus}
        onLeftPress={HandleGoBack}
        onRightPress={HandleGoBack}
      />
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={styles.dataList}>
        {dummyData.map(item => (
          <TouchableOpacity key={item.id} onPress={() => handleChatPress(item)}>
            <ChatCard img={item.icon} title={item.text} hour="10:00 AM" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  searchBar: {
    flex: 1,
    height: 55,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  dataList: {
    marginTop: 10,
    paddingHorizontal: 8,
  },
});

export default ChatScreen;
