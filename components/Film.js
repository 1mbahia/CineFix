import React, {Component} from 'react'
import CustomMoviesListItem from '../screens/CustomMoviesListItem'
import { View, Image, TextInput,Text, FlatList, ActivityIndicator, StyleSheet, ScrollView, Platform} from 'react-native'
//import {movies} from '../ressources/database/imagedatabase.js'
import Accueil from './Accueil';
import { SearchBar } from 'react-native-elements';

export default class Film extends Component {
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

    async  componentDidMount() {
      let response1 = await fetch('http://www.omdbapi.com/?s=boy&type=movie&y=2019&apikey=480344f1&r=json');
      let newMovies = await response1.json() 
    
      let response2 = await fetch('http://www.omdbapi.com/?s=fun&type=movie&apikey=480344f1&r=json');
      let familyMovies = await response2.json() 
      
      let response3 = await fetch('http://www.omdbapi.com/?s=star&type=movie&apikey=480344f1&r=json');
      let collectionMovies = await response3.json() 

      let response4 = await fetch('http://www.omdbapi.com/?s=china&type=movie&apikey=480344f1&r=json');
      let foreignMovies = await response4.json() 

      this.setState({
        isLoading: false,
        newMovies : newMovies,
        familyMovies : familyMovies,
        foreignMovies: foreignMovies,
        collectionMovies : collectionMovies,
        });
    }

    async SearchFilterFunction(text) {
      //passing the inserted text in textinput
      //this.arrayholder = [this.state.dataSource];
      //http://www.omdbapi.com/?s=terminator&apikey=480344f1&r=json
       let response1 = await fetch('http://www.omdbapi.com/?s='+text+'&type=movie&y=2019&apikey=480344f1&r=json');
       let newMovies = await response1.json() 
     
       let response2 = await fetch('http://www.omdbapi.com/?s='+text+'&type=movie&apikey=480344f1&r=json');
       let familyMovies = await response2.json() 
       
       let response3 = await fetch('http://www.omdbapi.com/?s='+text+'&type=movie&apikey=480344f1&r=json');
       let collectionMovies = await response3.json() 

       let response4 = await fetch('http://www.omdbapi.com/?s='+text+'&type=movie&apikey=480344f1&r=json');
       let foreignMovies = await response4.json() 

       this.setState({
        isLoading: false,
        newMovies : newMovies,
        familyMovies : familyMovies,
        foreignMovies: foreignMovies,
        collectionMovies : collectionMovies,
        search:text,
        isFinish: true,
        });
    }

  onItemClick = (item) => {
    return fetch('http://www.omdbapi.com/?i='+ item.imdbID +'&apikey=480344f1&r=json')
    //return fetch('http://www.omdbapi.com/?i=tt0831387&apikey=480344f1&r=json')
    .then(response => response.json())
    .then(responseJson => {
          this.props.navigation.navigate('FilmDescription', {movie: responseJson})
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
          onChangeText={async text => await this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          />


<ScrollView style={styles.container}>    
 <Text style={styles.text}>Nouveautés</Text>
    
       <FlatList style = {styles.liste}
       horizontal={true}
       data={this.state.newMovies.Search}
       ItemSeparatorComponent={this.ListViewItemSeparator}
       horizontal={true}
     //data={movies}
     renderItem={({item}) =>(<CustomMoviesListItem item={item} onItemClick={this.onItemClick}/>
     )}
     enableEmptySections={true}
     style={{ marginTop: 10 }}
     keyExtractor={(item, index) => index.toString()}
   /> 
  


     
 <Text style={styles.text}>Films pour famille</Text>
    
       <FlatList style = {styles.liste}
       horizontal={true}
       data={this.state.familyMovies.Search}
       ItemSeparatorComponent={this.ListViewItemSeparator}
       horizontal={true}
     //data={movies}
     renderItem={({item}) =>(<CustomMoviesListItem item={item} onItemClick={this.onItemClick}/>
     )}
     enableEmptySections={true}
     style={{ marginTop: 10 }}
     keyExtractor={(item, index) => index.toString()}
   /> 
  
      
 <Text style={styles.text}>Collections</Text>
    
       <FlatList style = {styles.liste}
       horizontal={true}
       data={this.state.collectionMovies.Search}
       ItemSeparatorComponent={this.ListViewItemSeparator}
       horizontal={true}
     //data={movies}
     renderItem={({item}) =>(<CustomMoviesListItem item={item} onItemClick={this.onItemClick}/>
     )}
     enableEmptySections={true}
     style={{ marginTop: 10 }}
     keyExtractor={(item, index) => index.toString()}
   /> 


<Text style={styles.text}>Films international</Text>
    
    <FlatList style = {styles.liste}
    horizontal={true}
    data={this.state.foreignMovies.Search}
    ItemSeparatorComponent={this.ListViewItemSeparator}
    horizontal={true}
  //data={movies}
  renderItem={({item}) =>(<CustomMoviesListItem item={item} onItemClick={this.onItemClick}/>
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
    backgroundColor: '#000000',  // couleur de la page 
},

liste: {
  //borderWidth: 0.3,
  borderColor: '#d6d7da',
  borderBottomWidth: 2,
  borderBottomColor: '#d6d7da',
},


text:{
fontSize: 25,
color:'#ffffff',
textAlign: 'center',
fontWeight: 'bold',
paddingTop: 10,
margin: 30,
//textDecorationLine: 'line-through'
},
})
