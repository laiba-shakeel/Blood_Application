import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import CustomizeHeader from '../../Components/Header/HomeHeader';
import arrow from '../../Assets/Backarrow.png';
import edit from '../../Assets/edit.png';
import calendarIcon from '../../Assets/calender.jpg'; // Add your calendar icon here
import TaskCard from '../../Components/Card/TaskCard'; // Assuming TaskCard is a separate component
import color from '../../constant/color';

const TaskScreen = () => {
  const [selectedDate, setSelectedDate] = useState('2024-07-09');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const dates = [
    '2024-07-19',
    '2024-07-20',
    '2024-07-21',
    '2024-07-22',
    '2024-07-23',
    '2024-07-19',
    '2024-07-20',
  ];

  const HandleGoBack = () => {
    navigation.goBack('');
  };

  const tasks = [
    {
      time: '10:00am - 11:00am',
      title: 'Wireframe elements',
      color: '#5DBCD2',
      people: ['👤', '👤'],
    },
    {
      time: '11:40am - 12:40pm',
      title: 'Mobile app Design',
      color: '#A3D57F',
      people: ['👤', '👤', '👤'],
    },
    {
      time: '01:20pm - 02:30pm',
      title: 'Design Team call',
      color: '#F2B36F',
      people: ['👤', '👤', '👤', '👤', '👤'],
    },
    {
      time: '03:00pm - 04:00pm',
      title: 'Client Meeting',
      color: '#FF9A9E',
      people: ['👤', '👤'],
    },
    {
      time: '04:30pm - 05:30pm',
      title: 'Code Review',
      color: '#D5B8FF',
      people: ['👤', '👤', '👤'],
    },
  ];

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <CustomizeHeader
          left
          center
          right
          text="Today Task"
          leftImage={arrow}
          rightImage={edit}
          onLeftPress={HandleGoBack}
          onRightPress={HandleGoBack}
        />
        <View style={styles.header}>
        <View style={styles.headerRight}>
            <Text style={styles.headerText}>October, 20</Text>
            <Text style={styles.headerSubText}>15 tasks today</Text>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={calendarIcon} style={styles.calendarIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dates}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => setSelectedDate(item)}>
              <View
                style={[
                  styles.dateContainer,
                  selectedDate === item && styles.selectedDate,
                ]}>
                <Text style={styles.dateText}>{new Date(item).getDate()}</Text>
                <Text style={styles.dayText}>
                  {new Date(item).toLocaleString('en-us', {weekday: 'short'})}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.dateList}
        />
        <FlatList
          data={tasks}
          renderItem={({item}) => <TaskCard task={item} />}
          keyExtractor={(item, index) => index.toString()}
          style={styles.taskList}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <View style={styles.modalView}>
            <Calendar
              current={selectedDate}
              onDayPress={day => {
                setSelectedDate(day.dateString);
                setModalVisible(false);
              }}
              markedDates={{
                [selectedDate]: {selected: true, marked: true},
              }}
            />
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 28,
    paddingHorizontal:10
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth:1,
    gap:2,
    textAlign:'center'
  },
  headerSubText: {
    fontSize: 16,
    color: '#999',
    marginRight: 10,
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
  dateList: {
    marginVertical: 10,
  },
  dateContainer: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#eee',
    borderWidth:1,
    borderColor:color.WHITE
  },
  selectedDate: {
    backgroundColor: '#5DBCD2',
  },
  dateText: {
    fontSize: 18,
  },
  dayText: {
    fontSize: 14,
    color: '#999',
  },
  taskList: {
    marginTop: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#333',
  },
});

export default TaskScreen;
