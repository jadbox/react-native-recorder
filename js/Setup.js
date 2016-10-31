/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import MainMenu from './MainMenu';
import Record from './Record';
import Prompt from './Prompt';

export default class Setup extends Component {
  render() {
    const routes = [
    { title: 'First Scene', index: 0, id: 'main'}
    , { title: 'Second Scene', index: 1, id: 'record'}
  ];
  return (
    <Navigator
      initialRoute={routes[0]}
      initialRouteStack={routes}
      renderScene={this.navigatorRenderScene}
      style={{padding: 1}}
    />
  );
  }

  navigatorRenderScene(route, navigator) {
    console.log("MainMenu", MainMenu)
    //_navigator = navigator;
    switch (route.id) {

      case 'EULA':
        return (<Prompt navigator={navigator} title="record" style={styles.container} />); // TODO: make component
      case 'record':
        return (<Record navigator={navigator} title="record"/>); // TODO: make component
      case 'main':
      default:
        return (<MainMenu navigator={navigator} title="main"/> );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
