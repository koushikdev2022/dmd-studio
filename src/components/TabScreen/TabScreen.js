import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OTPScreen from '../OTPScreen/OTPScreen';
import Login from '../Login/Login';
import HomeScreen from '../HomeScreen/HomeScreen';
import AboutScreen from '../AboutScreen/AboutScreen';
import ServiceListingScreen from '../ServiceListingScreen/ServiceListingScreen';
import BookingScreen from '../BookingScreen/BookingScreen';
import BookingConfirmScreen from '../BookingConfirmScreen/BookingConfirmScreen';

import MyAccountScreen from '../MyAccountScreen/MyAccountScreen';
import MyProfileScreen from '../MyProfileScreen/MyProfileScreen';
import ServiceHistoryScreen from '../ServiceHistoryScreen/ServiceHistoryScreen';
import LogoutConfirmScreen from '../LogoutConfirmScreen/LogoutConfirmScreen';


//Home tab screen
const HomeStack = createNativeStackNavigator();
const HomeStackScreens = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name='OTP' component={OTPScreen} />
            <HomeStack.Screen name='Login' component={Login} />
            <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
            <HomeStack.Screen name='ServiceListingScreen' component={ServiceListingScreen} />
            <HomeStack.Screen name='BookingScreen' component={BookingScreen} />
            <HomeStack.Screen name='BookingConfirmScreen' component={BookingConfirmScreen} />
        </HomeStack.Navigator>
    )
}

//About tab screen
const AboutStack = createNativeStackNavigator();
const AboutStackScreens = () => {
    return (
        <AboutStack.Navigator screenOptions={{ headerShown: false }}>
            <AboutStack.Screen name='AboutScreen' component={AboutScreen} />
            <AboutStack.Screen name='Login' component={Login} />
            <AboutStack.Screen name='OTP' component={OTPScreen} />
        </AboutStack.Navigator>
    )
}

//My Account tab screen
const MyAccountStack = createNativeStackNavigator();
const MyAccountStackScreens = () => {
    return (
        <MyAccountStack.Navigator screenOptions={{ headerShown: false }}>
            <MyAccountStack.Screen name='MyAccountScreen' component={MyAccountScreen} />
            <MyAccountStack.Screen name='MyProfileScreen' component={MyProfileScreen} /> 
            <MyAccountStack.Screen name='ServiceHistoryScreen' component={ServiceHistoryScreen} />
            <MyAccountStack.Screen name='LogoutConfirmScreen' component={LogoutConfirmScreen} />
        </MyAccountStack.Navigator>
    )
}

const TabStack = createBottomTabNavigator();
const TabScreen = ({ }) => {

    return (

        <>
            <StatusBar
                animated={true}
                backgroundColor="#020d26"
            />
            <TabStack.Navigator screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopWidth: 0,
                    backgroundColor: '#000027',
                },
                tabBarInactiveTintColor: '#ffffff',
                tabBarActiveTintColor: "#ffcc00"
            }}>
                <TabStack.Screen name="Home" component={HomeStackScreens}
                    options={{
                        tabBarShowLabel: true,
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="home" size={28} color={color} />
                        ),
                    }}
                />
                <TabStack.Screen name="About" component={AboutStackScreens}
                    options={{
                        tabBarShowLabel: true,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="car" size={25} color={color} />
                        ),
                    }}
                />
                <TabStack.Screen name="My Account" component={MyAccountStackScreens}
                    options={{
                        tabBarShowLabel: true,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome5 name="user-alt" size={25} color={color} />
                        ),
                    }}
                />

            </TabStack.Navigator>
        </>

    )
}
export default TabScreen;