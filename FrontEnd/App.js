import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/pages/HomeScreen';
import FormScreen from './src/pages/FormScreen';
import ListScreen from './src/pages/ListScreen';

const StackNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  List: {screen: FormScreen},
  Form: {screen: ListScreen},
});

const AppContainer = createAppContainer(StackNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
