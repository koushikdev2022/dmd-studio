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



const OTPScreen = ({navigation}) => {

    useEffect(() => {
    }, []);


    const getOTP = () => {
        //console.log("Get otp");
        navigation.navigate("Login");
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

                <Text style={[styles.labelText]}>Please enter your mobile number</Text>
                <TextInput
                    style={[styles.inputField]}
                    placeholder="Mobile Number"
                    keyboardType='numeric'
                />
                <Pressable
                    style={styles.button}
                    // onPress={() => Alert.alert('Get OTP')}
                    onPress={getOTP}
                >
                    <Text style={styles.text}>Get OTP</Text>
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
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
        marginTop: 110,
    },
    errorMessage: {
        fontSize: 13,
        color: 'red',
        marginLeft: 42,
        marginBottom: 0,
    },
})

export default OTPScreen