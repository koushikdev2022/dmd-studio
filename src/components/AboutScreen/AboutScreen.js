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



const AboutScreen = ({ navigation }) => {

    useEffect(() => {
    }, []);



    return (

        <View style={[styles.container]}>


            <View style={[styles.bubbleImg]}>
                <Image source={bubbleBG} />
            </View>

            <View style={[styles.logoArea]}>
                <Image source={appLogo} style={{ height: 80, width: 80 }} />
            </View>

            <View style={[styles.contentArea]}>

                <ScrollView>
                    <Text style={[styles.contentAreaCont]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <Text style={[styles.contentAreaCont]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <Text style={[styles.contentAreaCont]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </ScrollView>

            </View>

            <View style={[styles.carBox]}>
                <Image source={appCars} style={{ height: 100, width: 300 }} />
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
        marginBottom: 30,
    },
    contentArea: {
        paddingHorizontal: 20,
        height: 400,
    },
    contentAreaCont: {
        color: "#ffffff",
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 15,
    },
    carBox: {
        marginTop: 15,
    },
    errorMessage: {
        fontSize: 13,
        color: 'red',
        marginLeft: 42,
        marginBottom: 0,
    },
})

export default AboutScreen