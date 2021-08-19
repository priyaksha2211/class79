import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import searchScreen from './screens/searchScreen';
import transactionScreen from './screens/transactionScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
        <AppContainer/>
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  transaction: {screen: transactionScreen},
  search: {screen: searchScreen},
})
const AppContainer = createAppContainer(TabNavigator);