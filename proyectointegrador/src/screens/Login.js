import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { auth, db } from "../firebase/config";

class Login extends Component {
    constructor(p) {
      super(p);
      this.state = {
        email: "",
        password: "",
        logued: false,
        error: "",
      };
    }

    componentDidMount(){
      auth.onAuthStateChanged(user => console.log ('El usuario es:', JSON.stringify(user,null,4)))
    }

    handleSubmit(){
      auth
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((response) => this.setState({logued: true}))
        .then(()=> this.props.navigation.navigate("HomeMenu"))
        .catch((error) => this.setState({error: "Fallo el login"}));
    } 

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.heading}>Ingresar</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="Ingrese su email"
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
          <TextInput
            placeholder="Ingrese su contrasena"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
          />
          <TouchableOpacity onPress={() => this.handleSubmit() }  style={[styles.button, styles.buttonSecondary]}>
            <Text>Acceder</Text>
          </TouchableOpacity>
          <Text>Navegación cruzada a Register: </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Register")}
            style={styles.button}
          >
            <Text>No tengo cuenta</Text>
          </TouchableOpacity>
          <Text>
            Navegación cruzada a ingresar a la app. Este paso se hará
            automaticamente cuando veamos la funcionalidad de loguin{" "}
          </Text>      
        </View>
      );
    }


}

const styles = StyleSheet.create({
  container: {
    
  }
})
export default Login;