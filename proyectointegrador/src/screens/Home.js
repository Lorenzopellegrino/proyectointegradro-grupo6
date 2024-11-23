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

    compnentDidMount() {
      auth.onAuthStateChanged(user => {
        if (!user) {
          this.props.navigation.navigate("Login");
        } else {
          db.collection("users").where("email", "==", auth.currentUser.email).onSnapshot(snap => {
            if(!snap.empty) {
              const data = snap.docs[0];
              this.setState({ user: data.data().user });
            }
          })
        }
      })
      this.fetchPosts();
    }

    fetchPosts = () => {
      db.collection("posts").orderBy("createdAt").onSnapshot(query => {
        const posts = query.docs.map(data => ({
          id: data.id,
          data: data.data()
        }))
        this.setState({posts: posts})
      }).catch(e => console.log(e))
    }

    logout() {
      auth
        .signOut()
        .then(() => {
          this.props.navigation.navigate("Login");
        })
        .catch((error) => console.log(error));
    }


    render() {
      if (this.state.posts.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No hay novedades</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>



            </View>
        );
    }
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