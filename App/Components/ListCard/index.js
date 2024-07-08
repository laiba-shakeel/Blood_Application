import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
const ListCard = ({title, task, time, progress , progressImage}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.col}> 
          <Text style={styles.task}>{task}</Text>
          <Text style={styles.time}>{time} ago</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 25,
            width: 45,
            height: 45,
            justifyContent:'flex-end', 
            alignSelf:'flex-end',
            alignItems:'flex-end'
          }}>
          <Image source={progressImage} alt='progress' style={{width:'100%' , height:'100%'}} />
        </View>
      </View>
      <View style={styles.cardFooter}>
        {/* <View style={styles.progress}>
          <View style={[styles.progressBar, { width: `${progress}%` }]}>
            <Text style={styles.progressText}>{progress}%</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default ListCard;
