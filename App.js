

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Accueil from './components/Accueil'
import Film from './components/Film'
import Serie from './components/Serie'
import Dessin from './components/Dessin'
import Livre from './components/Livre'
import FilmDescription from './components/FilmDescription'
import SerieDescription from './components/SerieDescription'
import LivreDescription from './components/LivreDescription'
import Icon from 'react-native-vector-icons/FontAwesome';


const TabNavigator  = createBottomTabNavigator({
  
 /*Film: Film,
 Serie: Serie,
 Dessin: Dessin,
 Livre: Livre,
});*/

Film: { screen: Film,
  navigationOptions:{
    tabBarLabel: 'Film',
  tabBarIcon: ({tintColor})=>(<Icon name="film" size={22} color={tintColor}/>)
 
      }
          },
 Serie: { screen: Serie, navigationOptions:{
  tabBarLabel: 'Serie',
  tabBarIcon: ({tintColor})=>(<Icon name="tv" size={22} color={tintColor}/>)
      }},
 Dessin: { screen: Dessin, navigationOptions:{
  tabBarLabel: 'Dessin',
  tabBarIcon: ({tintColor})=>(<Icon name="id-card" size={22} color={tintColor}/>)
      }},
 Livre: { screen: Livre, navigationOptions:{
 
  tabBarLabel: 'Livre',
  tabBarIcon: ({tintColor})=>(<Icon name="book" size={22} color={tintColor}/>)
      }},
 },{
 initialRouteName: 'Film',
 //order:['Film', 'Serie', 'Dessin', 'Livre'],
 activeTintColor: '#4d4dff',
 inactiveColor: '#a6a6a6',
 //shifting: true,
 swipeEnabled: true,
 animationEnabled: false,
 
 barStyle: { backgroundColor: '#262626', borderTopColor: 'white', borderTopWidth: 0.5 },
 tabBarOptions: {
  showIcon: true,
 }
 });

const StackNavigator = createStackNavigator ({
  Accueil: { screen : Accueil, title: "Accueil"},
  Home: { screen: TabNavigator, navigationOptions: {
    header: null,
  }},
  FilmDescription: {screen: FilmDescription},
  SerieDescription: {screen: SerieDescription},
  LivreDescription: {screen: LivreDescription}

})
export default createAppContainer(StackNavigator);

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 TabNavigator: {
   backgroundColor: '#000000',
   color: '#ffffff'
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