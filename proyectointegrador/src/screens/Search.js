import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { auth, db } from "../firebase/config";

class Search extends Component{
    constructor(p) {
        super(p);
        this.state = {
          users: [],
          loading: true,
        };
      }
}
export default Search;