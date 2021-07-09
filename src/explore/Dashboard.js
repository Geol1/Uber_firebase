import * as React from 'react';
import {Dimensions,Button,View,Text,SafeAreaView } from 'react-native';
import HomeMap from '../components/HomeMap';

const FirstPage = ({ navigation }) => {
  return (

    <View>
      <View style={{height: Dimensions.get('window').height - 100}}>
        <HomeMap />
      </View>
    </View>
    
  );
}

export default FirstPage;