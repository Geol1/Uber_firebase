import React, { Component } from 'react'
import { Text, View } from 'react-native'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import NavigatorsDrawer from './src/navigations/NavigatorsDrawer';
import Navigators from './src/navigations/Navigators';

export default class App extends React.Component {

  render(){
    return(
      <NavigationContainer>
        <Navigators />
      </NavigationContainer>
    )
  }
}

