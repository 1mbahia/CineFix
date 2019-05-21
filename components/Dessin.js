import React, {Component} from 'react'
import CustomMoviesListItem from '../screens/CustomMoviesListItem'
import { View, Image, TextInput,Text, FlatList, ActivityIndicator, StyleSheet, ScrollView, Platform} from 'react-native'
//import {movies} from '../ressources/database/imagedatabase.js'
import Accueil from './Accueil';
import { SearchBar } from 'react-native-elements';

export default class Dessin extends Component {
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
   let response1 = await fetch('http://www.omdbapi.com/?s=pokemon&type=movie&apikey=480344f1&r=json');
   let newDessin = await response1.json() 
 
   let response2 = await fetch('http://www.omdbapi.com/?s=cartoon&type=movie&apikey=480344f1&r=json');
   let familyDessin  = await response2.json() 
   
   let response3 = await fetch('http://www.omdbapi.com/?s=bugs bunny&type=movie&apikey=480344f1&r=json');
   let collectionDessin  = await response3.json() 

   let response4 = await fetch('http://www.omdbapi.com/?s=china&type=movie&apikey=480344f1&r=json');
   let foreignDessin  = await response4.json() 

   this.setState({
     isLoading: false,
     newDessin  : newDessin ,
     familyDessin  : familyDessin,
     collectionDessin : collectionDessin ,
     foreignDessin  : foreignDessin ,
     isFinish: true,
     });
  }

  async SearchFilterFunction(text) {
    //passing the inserted text in textinput
    //this.arrayholder = [this.state.dataSource];
    //http://www.omdbapi.com/?s=terminator&apikey=480344f1&r=json
            let response1 = await fetch('http://www.omdbapi.com/?s='+text+'&type=movie&y=2019&apikey=480344f1&r=json');
            let newDessin = await response1.json() 
          
            let response2 = await fetch('http://www.omdbapi.com/?s='+text+'&type=movie&apikey=480344f1&r=json');
            let familyDessin  = await response2.json() 
    
            let response3 = await fetch('http://www.omdbapi.com/?s='+text+'&type=movie&apikey=480344f1&r=json');
            let collectionDessin  = await response3.json() 
         
            let response4 = await fetch('http://www.omdbapi.com/?s='+text+'&type=movie&apikey=480344f1&r=json');
            let foreignDessin  = await response4.json() 
         
            this.setState({
              isLoading: false,
              newDessin  : newDessin ,
              familyDessin  : familyDessin,
              collectionDessin : collectionDessin ,
              foreignDessin  : foreignDessin ,
              isFinish: true,
              search:text,
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
        onChangeText={text => this.SearchFilterFunction(text)}
        onClear={text => this.SearchFilterFunction('')}
        placeholder="Type Here..."
        value={this.state.search}
        />


<ScrollView style={styles.container}>    
<Text style={styles.text}>Nouveautés</Text>
  
     <FlatList style = {styles.liste}
     horizontal={true}
     data={this.state.newDessin.Search}
     ItemSeparatorComponent={this.ListViewItemSeparator}
     horizontal={true}
   //data={movies}
   renderItem={({item}) =>(<CustomMoviesListItem item={item} onItemClick={this.onItemClick}/>
   )}
   enableEmptySections={true}
   style={{ marginTop: 10 }}
   keyExtractor={(item, index) => index.toString()}
 /> 



   
<Text style={styles.text}>Dessin famille</Text>
  
     <FlatList style = {styles.liste}
     horizontal={true}
     data={this.state.familyDessin.Search}
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
     data={this.state.collectionDessin.Search}
     ItemSeparatorComponent={this.ListViewItemSeparator}
     horizontal={true}
   //data={movies}
   renderItem={({item}) =>(<CustomMoviesListItem item={item} onItemClick={this.onItemClick}/>
   )}
   enableEmptySections={true}
   style={{ marginTop: 10 }}
   keyExtractor={(item, index) => index.toString()}
 /> 


<Text style={styles.text}>Dessins international</Text>
  
  <FlatList style = {styles.liste}
  horizontal={true}
  data={this.state.foreignDessin.Search}
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
borderBottomWidth: 1,
//borderWidth: 0.3,
borderColor: '#d6d7da',
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
