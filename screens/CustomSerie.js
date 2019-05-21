import React, {Component} from 'react';
import{View, Text ,Image, TouchableOpacity } from 'react-native';

export default class CustomSerie extends Component{
  /*  onItemClick(item) {
        //this.props.navigation.navigate('FilmDescription', {movie: item})
    }*/

   render(){
      /// const { title, date, imgSrc}=this.props            
      const {item, onItemClick}=this.props
       return(
        <TouchableOpacity onPress={() => onItemClick(item)}>
        <View style={styles.container}>
               <Image source ={{uri:item.Poster}} style={styles.image}></Image>

               <View style={styles.infosRightSide}>
               <Text style={styles.title}>{item.Title}</Text>
               <Text style={styles.date}>{item.Year}</Text>
               
               </View>
           </View>
           
           </TouchableOpacity>
       )
   }


}

const styles = {
  
    
    container: {
        flexDirection: 'column'
    },
    image: {
        width: 120,
        height: 160,
        margin: 10
    },
    infosRightSide: {
        margin: 10
    },
  title: {
   fontSize: 16,
   color: '#000000',
  }, 

  date: {
    fontSize: 12,
   color: '#000000',
   }, 

}