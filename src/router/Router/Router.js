import React, { Component, useState, useEffect, useRef } from 'react';

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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OTPScreen from '../../components/OTPScreen/OTPScreen';
import Login from '../../components/Login/Login';
import HomeScreen from '../../components/HomeScreen/HomeScreen';

const RouterScreen = () => {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar
                animated={true}
                backgroundColor="#020d26"
            />
            <NavigationContainer>
                <Stack.Navigator initialRouteName='OTPScreen'>
                    <Stack.Screen
                        name="OTPScreen"
                        component={OTPScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}


export default RouterScreen