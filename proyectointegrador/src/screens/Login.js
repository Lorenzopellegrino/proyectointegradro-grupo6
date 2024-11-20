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

}
export default Login;