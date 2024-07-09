import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCard = ({ task }) => {
  return (
    <View style={[styles.card, { backgroundColor: task.color }]}>
      <Text style={styles.time}>{task.time}</Text>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.people}>
        {task.people.map((person, index) => (
          <Text key={index} style={styles.person}>{person}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  time: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginTop: 5,
  },
  people: {
    flexDirection: 'row',
    marginTop: 10,
  },
  person: {
    fontSize: 18,
    color: '#fff',
    marginRight: 5,
  },
});

export default TaskCard;
