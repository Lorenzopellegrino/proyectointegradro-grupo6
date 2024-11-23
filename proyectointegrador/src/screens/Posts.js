import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { db, auth } from '../firebase/config'

class Posts extends Component {
  constructor(props){
    super(props)
    this.state= {
      descPost: "",
    }
  }  

  crearPosteo(descPost, urlImagen) {
    if(descPost === ""){
      return "No puedes crear un posteo vacio"
    }
    db.collection("posteos").add({
      owner: auth.currentUser.email,
      createdAt: Date.now(),
      description: descPost,
      likes: [],
      comentarios: [],
    }).then(this.props.navigation.navigate("Home"))
    .catch(e => console.log(e))
  }

  render() {
    return (
      <View>
       <TextInput
       style={styles.input}
       placeholder='Agrega una descripción para tu posteo'
       value={this.state.descPost}
       onChangeText={(text) => this.setState({descPost: text})}
       />
       <TouchableOpacity onPress={()=> this.crearPosteo(this.state.descPost)}>
          <Text>Crear Posteo</Text>
       </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input:{
    borderWitdh: 2,
  }
})
export default Posts