/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TouchableOpacity, Text, View, Button} from 'react-native';



export default class Accueil extends Component {
  static navigationOptions = {
    title: "CineFlix",
    headerStyle: {
      backgroundColor: '#000000',
      textAlign: "center",
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
       fontFamily: "lucida grande",
       fontSize: 26,
       fontWeight: "normal",
       justifyContent: "center",
       textAlign: "center",
       //alignSelf: "center",
       width: "90%"
      }
      };

  navigateToFilm(){
    this.props.navigation.navigate({routeName: "Film"})
  }

  navigateToSerie(){
    this.props.navigation.navigate({routeName: "Serie"})
  }

  navigateToLivre(){
    this.props.navigation.navigate({routeName: "Livre"})
  }

  navigateToDessin(){
    this.props.navigation.navigate({routeName: "Dessin"})
  }

  render() {
    return (
          <View style={styles.container1}>
              <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.button1}
                    onPress={(param1)=>this.navigateToFilm(param1)} >
                    <Text style={styles.text}> Films </Text>
                    </TouchableOpacity>

                 <View style={styles.info}>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={(param1)=>this.navigateToSerie(param1)}>
                    <Text style={styles.text}> SeriesTV </Text>
                    </TouchableOpacity>
                  </View>
              </View>
       

              <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.button1}
                    onPress={(param1)=>this.navigateToLivre(param1)}>
                    <Text style={styles.text}> Livres </Text>
                    </TouchableOpacity>

                  <View style={styles.info}>
                      <TouchableOpacity
                      style={styles.button}
                      onPress={(param1)=>this.navigateToDessin(param1)}>
                      <Text style={styles.text}> Dessin </Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
            
        
      
    )
  }
}

const styles = StyleSheet.create({
  container1: {flex: 1,
     
    backgroundColor: '#000000',
    alignItems: 'center',       //  vieuw ranger au millieu de la ligne 
    justifyContent: 'center',  //  vieuw ranger au millieu de la page 
  },
  container: {
    flexDirection: "row",
    padding: 10,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: 180, 
    height: 140,
    alignItems: 'center', 
    justifyContent: 'center',
    //margin: 5
  },

  button1: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: 180, 
    height: 140,
    alignItems: 'center', 
    justifyContent: 'center',
    marginRight: 16
  },

  text:{
    fontSize: 30,
    color:'#000000',
    fontWeight: 'bold',
  }


 
});
