import React, {Component} from 'react'
import{View, Text, StyleSheet} from 'react-native';


export default class LivreDescription extends Component {
    static navigationOptions = {
        title: 'Livre',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#4d4dff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    constructor (props){
        super(props)


this.state = {
  seriemov: this.props.navigation.getParam('seriemov')
}   

}
       render() {
           const{seriemov} = this.state
           return(
           <View style={styles.container}>
               <Text>votre page LIVRE</Text>
               
               <Text style={styles.text}>{seriemov.title}</Text>
               <Text style={styles.text}>{seriemov.genre}</Text>
               <Text style={styles.text}>{seriemov.annee}</Text>
               <Text style={styles.text}>{seriemov.acteur}</Text>
               <Text style={styles.text}>{seriemov.realisateur}</Text>
               <Text style={styles.text}>{seriemov.description}</Text>
           </View>
           )
       }

}

const styles = StyleSheet.create({
  container: {
  
        //backgroundColor: '#ffffff',  // couleur de la page 
        borderTopWidth: 1,
        //borderWidth: 0.3,
          borderColor: '#d6d7da',
    },

text: {
  color: '#000000',
}


  })