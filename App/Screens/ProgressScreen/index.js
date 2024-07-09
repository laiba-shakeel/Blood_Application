import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import CardProgressList from '../../Components/Card/CardProgressList';
import notificationIcon from '../../Assets/Notifications.png';
import peoples from '../../Assets/People.png'
import arrow from '../../Assets/Backarrow.png';
import plus from '../../Assets/plus.jpg'
import CustomizeHeader from '../../Components/Header/HomeHeader';
import { useNavigation } from '@react-navigation/native';
const ProgressScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('Favourites');
  const navigation = useNavigation();
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Unity Dashboard',
      category: 'Design',
      emoji: '😄',
      progress: 0.5,
      progressColor: '#6FCF97',
      image: peoples,
    },
    {
      id: 2,
      title: 'Instagram Shots',
      category: 'Marketing',
      emoji: '✍️',
      progress: 0.6,
      progressColor: '#F2994A',
      image: peoples,
    },
    {
      id: 3,
      title: 'Cubbles',
      category: 'Design',
      emoji: '😃',
      progress: 0.3,
      progressColor: '#56CCF2',
      image: peoples,
    },
    {
      id: 4,
      title: 'Ui8 Platform',
      category: 'Design',
      emoji: '😎',
      progress: 0.8,
      progressColor: '#6FCF97',
      image: peoples,
    },
  ]);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const HandleGoBack = () => {
    navigation.goBack('');
  };
  const handleTabChange = tab => {
    setSelectedTab(tab);
    // Update the cards data based on the selected tab
    // This is a placeholder, replace it with your actual data fetching logic
    setCards([
      {
        id: 1,
        title: `${tab} Task 1`,
        category: 'Design',
        emoji: '😄',
        progress: 0.5,
        progressColor: '#6FCF97',
        image: peoples,
      },
      {
        id: 2,
        title: `${tab} Task 2`,
        category: 'Marketing',
        emoji: '✍️',
        progress: 0.6,
        progressColor: '#F2994A',
        image: peoples,
      },
      {
        id: 1,
        title: `${tab} Task 1`,
        category: 'Design',
        emoji: '😄',
        progress: 0.5,
        progressColor: '#6FCF97',
        image: peoples,
      },
      {
        id: 2,
        title: `${tab} Task 2`,
        category: 'Marketing',
        emoji: '✍️',
        progress: 0.6,
        progressColor: '#F2994A',
        image: peoples,
      },
      {
        id: 1,
        title: `${tab} Task 1`,
        category: 'Design',
        emoji: '😄',
        progress: 0.5,
        progressColor: '#6FCF97',
        image: peoples,
      },
      {
        id: 2,
        title: `${tab} Task 2`,
        category: 'Marketing',
        emoji: '✍️',
        progress: 0.6,
        progressColor: '#F2994A',
        image: peoples,
      },
    ]);
  };

  return (
    <View style={styles.container}>
       <CustomizeHeader
          left
          center
          right
          text="Today Task"
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
      <View style={styles.tabs}>
        {['Favourites', 'Recents', 'All'].map(tab => (
          <TouchableOpacity key={tab} onPress={() => handleTabChange(tab)}>
            <Text
              style={[styles.tab, selectedTab === tab && styles.selectedTab]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredCards}
        renderItem={({item}) => <CardProgressList data={item} />}
        keyExtractor={item => item.id.toString()}
        style={styles.cardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
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
    flex: 1,
    height: 40,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  notificationIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  tab: {
    fontSize: 16,
    color: '#999',
  },
  selectedTab: {
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  cardList: {
    marginTop: 10,
  },
});

export default ProgressScreen;
