import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './App/Navigation/index';
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <View style={{flex: 1}}>
          <MainStack />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}
export default App;
