import React, {Component} from 'react'
import CustomLivre from '../screens/CustomLivre'
import { View, Image, Text, FlatList, StyleSheet, ScrollView} from 'react-native'
import {livrea} from '../ressources/databaselivre/databaselivreannee.js'
import {livrec} from '../ressources/databaselivre/databaselivrecollection.js'
import {livrel} from '../ressources/databaselivre/databaselivrelocation.js'
import {livrep} from '../ressources/databaselivre/databaselivrepoche.js'
import { SearchBar } from 'react-native-elements';


export default class Livre extends React.Component {


  onItemClick = (item) => {
    this.props.navigation.navigate('LivreDescription', {seriemov: item})
  }
  render() {
    return (
      
    <View >
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={text => this.SearchFilterFunction(text)}
        onClear={text => this.SearchFilterFunction('')}
        placeholder="Type Here..."
        />
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Livre de l'année</Text>
    
       <FlatList style = {styles.liste}
       horizontal={true}
     data={livrea}
     renderItem={({item}) => <CustomLivre item={item} onItemClick={this.onItemClick}/>}
     keyExtractor={(item, index) => index.toString()}
   />

<Text style={styles.text}>Livre de Poche</Text>
<FlatList style = {styles.liste}
       horizontal={true}
     data={livrep}
     renderItem={({item}) => <CustomLivre item={item} onItemClick={this.onItemClick}/>}
     keyExtractor={(item, index) => index.toString()}
   />

<Text style={styles.text}>Collections</Text>
<FlatList style = {styles.liste}
       horizontal={true}
     data={livrec}
     renderItem={({item}) => <CustomLivre item={item} onItemClick={this.onItemClick}/>}
     keyExtractor={(item, index) => index.toString()}
   />

<Text style={styles.text}>Location</Text>
<FlatList style = {styles.liste}
       horizontal={true}
     data={livrel}
     renderItem={({item}) => <CustomLivre item={item} onItemClick={this.onItemClick}/>}
     keyExtractor={(item, index) => index.toString()}
   />


</ScrollView>
      
    </View>
  
    )
  }
}

const styles = StyleSheet.create({
  container: {
  
       // backgroundColor: '#ffffff',  // couleur de la page 
     
        
    },

    liste: {
      borderBottomWidth: 1,
    //borderWidth: 0.3,
      borderColor: '#d6d7da',
      color:'#000000',
    },
   
    
  text:{
    fontSize: 25,
    color:'#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 10,
    margin: 30,
    //textDecorationLine: 'line-through'
   
   
  },
  


})