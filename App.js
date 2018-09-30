/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SearchBarComponent from './Components/SearchBarComponent';
import { createStackNavigator } from 'react-navigation';
import ResultsComponent from './Components/ResultsComponent';

const RootStack = createStackNavigator(
  {
    Home : SearchBarComponent,
    Results: ResultsComponent,
  },
  {
    initialRouteName : 'Home'
  }
);


export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  
});
