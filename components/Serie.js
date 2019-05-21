import React, {Component} from 'react'
import CustomSerie from '../screens/CustomSerie'
import { View, Image, TextInput,Text, FlatList, ActivityIndicator, StyleSheet, ScrollView, Platform} from 'react-native'
//import {movies} from '../ressources/database/imagedatabase.js'
import Accueil from './Accueil';
import { SearchBar } from 'react-native-elements';

export default class Serie extends Component {
  constructor(props) {
    super(props);
    
    //setting default state
    this.state = { isLoading: true, search: ''};
    this.arrayholder = [];
  }
  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  async componentDidMount() {
    let response1 = await fetch('http://www.omdbapi.com/?s=game&type=series&apikey=480344f1&r=json');
      let newSeries = await response1.json() 
    
      let response2 = await fetch('http://www.omdbapi.com/?s=friends&type=series&apikey=480344f1&r=json');
      let familySeries = await response2.json() 
      
      let response3 = await fetch('http://www.omdbapi.com/?s=lost&type=series&apikey=480344f1&r=json');
      let collectionSeries = await response3.json() 

      let response4 = await fetch('http://www.omdbapi.com/?s=china&type=series&apikey=480344f1&r=json');
      let foreignSeries = await response4.json() 

      this.setState({
        isLoading: false,
        newSeries : newSeries,
        familySeries : familySeries,
        collectionSeries: collectionSeries,
        foreignSeries : foreignSeries,
        isFinish: true,
        });
  }

  async SearchFilterFunction(text) {
    //passing the inserted text in textinput
    //this.arrayholder = [this.state.dataSource];
    //http://www.omdbapi.com/?s=terminator&apikey=480344f1&r=json
    let response1 = await fetch('http://www.omdbapi.com/?s='+text+'&type=series&y=2019&apikey=480344f1&r=json');
    let newSeries = await response1.json() 
  
    let response2 = await fetch('http://www.omdbapi.com/?s='+text+'&type=series&apikey=480344f1&r=json');
    let familySeries = await response2.json() 
    
    let response3 = await fetch('http://www.omdbapi.com/?s='+text+'&type=series&apikey=480344f1&r=json');
    let collectionSeries = await response3.json() 

    let response4 = await fetch('http://www.omdbapi.com/?s='+text+'&type=series&apikey=480344f1&r=json');
    let foreignSeries = await response4.json() 

    this.setState({
      isLoading: false,
      newSeries : newSeries,
      familySeries : familySeries,
      collectionSeries: collectionSeries,
      foreignSeries : foreignSeries,
      search:text,
      isFinish: true,
      });
  }

onItemClick = (item) => {
  return fetch('http://www.omdbapi.com/?i='+ item.imdbID +'&apikey=480344f1&r=json')
  //return fetch('http://www.omdbapi.com/?i=tt0831387&apikey=480344f1&r=json')
  .then(response => response.json())
  .then(responseJson => {
        this.props.navigation.navigate('SerieDescription', {movie: responseJson})
  })
}

render() {
  if (this.state.isLoading) {
    //Loading View while data is loading
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
  

  <View  style={styles.viewStyle}>
  <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={text => this.SearchFilterFunction(text)}
        onClear={text => this.SearchFilterFunction('')}
        placeholder="Type Here..."
        value={this.state.search}
        />


<ScrollView style={styles.container}>    
<Text style={styles.text}>Nouveautés</Text>
  
     <FlatList style = {styles.liste}
     horizontal={true}
     data={this.state.newSeries.Search}
     ItemSeparatorComponent={this.ListViewItemSeparator}
     horizontal={true}
   //data={movies}
   renderItem={({item}) =>(<CustomSerie item={item} onItemClick={this.onItemClick}/>
   )}
   enableEmptySections={true}
   style={{ marginTop: 10 }}
   keyExtractor={(item, index) => index.toString()}
 /> 



   
<Text style={styles.text}>Serie famille</Text>
  
     <FlatList style = {styles.liste}
     horizontal={true}
     data={this.state.familySeries.Search}
     ItemSeparatorComponent={this.ListViewItemSeparator}
     horizontal={true}
   //data={movies}
   renderItem={({item}) =>(<CustomSerie item={item} onItemClick={this.onItemClick}/>
   )}
   enableEmptySections={true}
   style={{ marginTop: 10 }}
   keyExtractor={(item, index) => index.toString()}
 /> 

    
<Text style={styles.text}>Collections</Text>
  
     <FlatList style = {styles.liste}
     horizontal={true}
     data={this.state.collectionSeries.Search}
     ItemSeparatorComponent={this.ListViewItemSeparator}
     horizontal={true}
   //data={movies}
   renderItem={({item}) =>(<CustomSerie item={item} onItemClick={this.onItemClick}/>
   )}
   enableEmptySections={true}
   style={{ marginTop: 10 }}
   keyExtractor={(item, index) => index.toString()}
 /> 


<Text style={styles.text}>Serie international</Text>
  
  <FlatList style = {styles.liste}
  horizontal={true}
  data={this.state.foreignSeries.Search}
  ItemSeparatorComponent={this.ListViewItemSeparator}
  horizontal={true}
//data={movies}
renderItem={({item}) =>(<CustomSerie item={item} onItemClick={this.onItemClick}/>
)}
enableEmptySections={true}
style={{ marginTop: 10 }}
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
