import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Menu from './src/components/Menu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Register"
            component={Register}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeMenu"
            component={Menu}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

