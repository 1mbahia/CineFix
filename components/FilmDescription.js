import React, {Component} from 'react'
import{View,Text,Image,TextInput,Button,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Star from 'react-native-star-view';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

export default class FilmDescription extends Component {
   static navigationOptions = {
       title: 'Films',
       headerStyle: {
         backgroundColor: '#000000',
       },
       headerTintColor: '#4d4dff',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
     };
   constructor (props){
       super(props)


this.state = {
   movie: this.props.navigation.getParam('movie')
}

}
      render() {
        const starStyle = {
          width: 100,
          height: 20,
          marginBottom: 5,
        };
          const{movie} = this.state
          return(
          <View style={styles.container}>
            <View style={styles.vieuw1}>
            <View>
              <Text>votre page film</Text>
              <Image source ={{uri:movie.Poster}} style={styles.image}></Image>
              </View >
              <View style={styles.textv}>
              <Text style={styles.text}>{movie.Title}</Text>
              <Text style={styles.text}>Genre:{"\n"}{movie.Genre}</Text>
              <Text style={styles.text}>Year: {movie.Year}</Text>
              <Text style={styles.text}>Actors:{"\n"}{movie.Actors}</Text>
              <Text style={styles.text}>Director: {movie.Director}</Text> 
              <Text style={styles.text}>Critics: </Text>
              <Star score={movie.imdbRating/2} style={starStyle} />
              <Text style={styles.text}>Users: </Text>
              <Star score={movie.imdbRating/2} style={starStyle} />
              </View>
              </View>
              <Text style={styles.textd}>Synopsis:{"\n"}{movie.Plot}</Text>
              
              <View style={styles.textAreaContainer} >
              <TextInput
    multiline={true}
    numberOfLines={10}
    placeholder="Votre commentaire..."
    style={{ height:100, backgroundColor:'#ffffff', margin:20, borderRadius: 15, padding:10, textAlignVertical: 'top',}}/>
    
    <View style={styles.hm}>
      
    <Star score={0} style={starStyle} /> 
          <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
            
          />
        }
        iconRight
        title="Submit"
        size = {15}
      />
      </View>

  </View>
  
          </View>
          )
      }

}

const styles = StyleSheet.create({
  hm:{
    flexDirection: "row",
    marginLeft: 30,
  },

 
 container: {
   //flexDirection: "column",
       backgroundColor: '#000000',  // couleur de la page
       height: '100%',
       borderTopWidth: 1,
       //borderWidth: 0.3,
         borderColor: '#d6d7da',
   },
   image: {
     width: 200,
     height: 260,
     //margin: 10,
 },

 textv:{
 marginTop: 10,
 marginLeft: 10,
 },

 vieuw1: {
   flexDirection: "row",
   width:200,
   padding: 10,
   marginBottom: 5,
   //height:200,
 },

text: {
 //margin: 10,
 color: '#ffffff',
},

textd: {
 //margin: 10,
 color: '#ffffff',
 padding:10,
}


 })