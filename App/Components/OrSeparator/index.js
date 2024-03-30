import {View, Text, SafeAreaView} from 'react-native';
import style from './style';

const OrSeparator = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.horizontalSeparator}></View>
      <Text style={style.text}>Or</Text>
    </SafeAreaView>
  );
};

export default OrSeparator;