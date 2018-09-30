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

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './Redux/Reducer';

const client = axios.create({
  baseURL: 'http://www.omdbapi.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));



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
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  
});
