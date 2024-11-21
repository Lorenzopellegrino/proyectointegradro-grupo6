import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { auth, db } from "../firebase/config";

class Home extends Component () {
    constructor(p) {
        super(p);
        this.state = {
            posts: [],
        };
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f5f5f5",
    },
    heading: {
      fontSize: 30,
      fontWeight: "700",
      marginBottom: 20,
    },  
    logoutButton: {
      backgroundColor: "#ff4444",
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    logoutText: {
      color: "white",
      textAlign: "center",
    },
  });

export default Home;