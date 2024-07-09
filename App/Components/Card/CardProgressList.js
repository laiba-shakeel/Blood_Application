import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar'; // Import the progress bar library

const CardProgressList = ({ data }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{data.title} <Text style={styles.emoji}>{data.emoji}</Text></Text>
        <Text style={styles.cardSubtitle}>{data.category}</Text>
        <View style={styles.cardFooter}>
          <Image source={data.image} style={styles.profileImage} />
          <ProgressBar progress={data.progress} width={200} color={data.progressColor} />
          <Text style={styles.progressText}>{data.progress * 20}/20</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 20,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10,
  },
  progressText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#888',
  },
});

export default CardProgressList;
