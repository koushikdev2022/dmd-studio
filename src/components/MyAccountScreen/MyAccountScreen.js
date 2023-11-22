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
    Pressable,
    TouchableOpacity
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import appLogo from '../../../assets/image/logo-recent.png';
import bubbleBG from '../../../assets/image/bubble_bg.png';
import appCars from '../../../assets/image/car_bottom.png';
import carWashImg from '../../../assets/image/car_wash_img.jpg';



const Tab = createBottomTabNavigator();


const MyAccountScreen = ({ navigation }) => {

    useEffect(() => {
    }, []);


    const getService = () => {
        Alert("Get Service");
    }

    const userLogout = () => {
        //Alert("Logout Successfully!");
        navigation.navigate("LogoutConfirmScreen");
    }


    return (

        <View style={[styles.container]}>


            <View style={[styles.bubbleImg]}>
                <Image source={bubbleBG} />
            </View>

            <View style={[styles.headerSection]}>
                {/* <TouchableOpacity style={[styles.backPoint]} onPress={navigation.goBack}>
                    <Text style={[styles.backPointText]}><AntDesign name="left" size={20} color={"#ffffff"} /> Back</Text>
                </TouchableOpacity> */}
                <View style={[styles.logoArea]}>
                    <Image source={appLogo} style={{ height: 80, width: 80 }} />
                </View>
            </View>

            <Text style={[styles.serviceSelectTitle]}>Please Select Your Option</Text>

            <View style={[styles.serviceAreaList]}>

                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity
                        style={[styles.serviceAreaListBox]}
                        onPress={() => navigation.navigate('MyProfileScreen')} 
                    >
                        <FontAwesome5 name="user-circle" size={25} color={"#0066ff"} />
                        <Text style={[styles.serviceTitle]}>My profile <AntDesign name="right" size={18} color={"#ffffff"} /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.serviceAreaListBox]}
                        onPress={() => navigation.navigate('ServiceHistoryScreen')}
                    >
                         <AntDesign name="customerservice" size={25} color={"#0066ff"} />
                        <Text style={[styles.serviceTitle]}>Booking History <AntDesign name="right" size={18} color={"#ffffff"} /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.serviceAreaListBox]}
                        onPress={userLogout}
                    >
                         <AntDesign name="logout" size={25} color={"#0066ff"} />
                        <Text style={[styles.serviceTitle]}>Logout <AntDesign name="right" size={18} color={"#ffffff"} /></Text>
                    </TouchableOpacity>


                </ScrollView>

            </View>



        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        backgroundColor: "#020d26",
        paddingTop: 0,
        paddingBottom: 180,
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
    serviceAreaList: {
        // flex: 1,
        height: 450,
    },
    serviceAreaListBox: {
        flexDirection: "row",
        //backgroundColor: "#e68422",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: 360,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomColor: "#013e99",
        borderBottomWidth: 1,
    },
    serviceAreaListImgBox: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
    serviceTitle: {
        fontSize: 19,
        lineHeight: 42,
        color: "#ffffff",
        //textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 0,
        paddingLeft: 10,
    },
    serviceSelectTitle: {
        fontSize: 20,
        lineHeight: 20,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 20,
    },
    headerSection: {
        position: "relative", 
    },
    backPoint: {
        position:"absolute", 
        left: -125, 
        top: 20,
    },
    backPointText: {
        color: "#ffffff", 
        fontSize: 18,
    },
    errorMessage: {
        fontSize: 13,
        color: 'red',
        marginLeft: 42,
        marginBottom: 0,
    },
})

export default MyAccountScreen