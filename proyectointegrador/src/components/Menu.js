import React, { Component } from 'react';
import { auth } from "../firebase/config";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Posts from '../screens/Posts';

const Tab = createBottomTabNavigator();

class Menu extends Component {
    constructor(p) {
        super(p);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            if (!user) {
                this.props.navigation.navigate("Login");
            }
        });
        this.setState({ loading: false });
    }

    render() {
        return (
            <Tab.Navigator >

                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />

                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Users"
                    component={Search}
                />

                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Profile"
                    component={Profile}
                />

                <Tab.Screen
                    options={{ headerShown: false }}
                    name="Posts"
                    component={Posts}
                />


            </Tab.Navigator>
        )
    }
};

export default Menu;