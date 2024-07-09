import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import ChatCard from '../../Components/Card/ChatCard'; 
import SvgIcons from '../../Assets/svg';
import CustomizeHeader from '../../Components/Header/HomeHeader';
import arrow from '../../Assets/Backarrow.png';
import plus from '../../Assets/plus.jpg'
import { useNavigation } from '@react-navigation/native';
import { dummyData } from '../../Utils/DummyData';
const DataList = ({data}) => (
  <View style={styles.dataList}>
    {data.map(item => (
      <ChatCard key={item.id} icon={item.icon} text={item.text} />
    ))}
  </View>
);

const ChatScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const HandleGoBack = () => {
    navigation.goBack('');
  };
  const filteredData = searchText
    ? dummyData.filter(item =>
        item.text.toLowerCase().includes(searchText.toLowerCase()),
      )
    : dummyData;

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
      <DataList data={filteredData} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal:20,
        backgroundColor: '#fff',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 10,
        marginVertical:25
      },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 20,
  },
  dataList: {
    marginTop: 10,
  },
  searchBar: {
    flex: 1,
    height: 55,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});

export default ChatScreen;
