/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  Pressable
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import Router from './src/router/Router/Router';

import TabScreen from './src/components/TabScreen/TabScreen';


function App(): JSX.Element {


  return (

    // <Router />
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    backgroundColor: "#020d26",
    paddingTop: 170,
    paddingBottom: 230,
    position: "relative",
  },
  bubbleImg: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  logoArea: {
    marginBottom: 55,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#002f3f",
    borderRadius: 50,
    backgroundColor: "#ffffff",
    width: 320,
    height: 50,
    color: "#000000",
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#e68422',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  carBox: {
    position: "absolute",
    left: 50,
    bottom: 30,
  }
});

export default App;
