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


import appLogo from '../../../assets/image/logo-recent.png';
import bubbleBG from '../../../assets/image/bubble_bg.png';
import appCars from '../../../assets/image/car_bottom.png';



const LoginScreen = ({navigation}) => {

    useEffect(() => {
    }, []);


    const loginSubmit = () => {
        //console.log("Login Submit");
        navigation.navigate("HomeScreen");
    }


    return (

        <View style={[styles.container]}>


            <View style={[styles.bubbleImg]}>
                <Image source={bubbleBG} />
            </View>

            <View style={[styles.logoArea]}>
                <Image source={appLogo} style={{ height: 155, width: 155 }} />
            </View>

            <View>

                <Text style={[styles.labelText]}>Please enter your recent OTP</Text>
                <View style={[styles.otpFieldBox]}>
                    <TextInput
                        style={[styles.inputFieldOtp]}
                        placeholder=""
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={[styles.inputFieldOtp]}
                        placeholder=""
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={[styles.inputFieldOtp]}
                        placeholder=""
                        keyboardType='numeric'
                    />
                    <TextInput
                        style={[styles.inputFieldOtp]}
                        placeholder=""
                        keyboardType='numeric'
                    />
                </View>
                <Pressable
                    style={styles.button}
                    //onPress={() => Alert.alert('Submit')}
                    onPress={loginSubmit}
                >
                    <Text style={styles.text}>SUBMIT</Text>
                </Pressable>

            </View>

            <View style={[styles.carBox]}>
                <Image source={appCars} style={{ height: 120, width: 320 }} />
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
        paddingTop: 50,
        paddingBottom: 200,
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
    labelText: {
        fontSize: 18,
        lineHeight: 32,
        color: "#ffffff",
        textAlign: "center",
        paddingBottom: 10,
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
    otpFieldBox: {
       flexDirection: "row"
    },
    inputFieldOtp: {
        borderWidth: 1,
        borderColor: "#002f3f",
        borderRadius: 50,
        backgroundColor: "#ffffff",
        width: 60,
        height: 60,
        color: "#000000",
        paddingHorizontal: 15,
        fontSize: 20,
        textAlign: "center",
        marginHorizontal: 5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#ffcd00',
        marginTop: 15,
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000000',
    },
    carBox: {
        marginTop: 100,
    },
    errorMessage: {
        fontSize: 13,
        color: 'red',
        marginLeft: 42,
        marginBottom: 0,
    },
})

export default LoginScreen