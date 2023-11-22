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
    TouchableOpacity,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import axios from 'react-native-axios';
import { API_URL } from '../../../config';
import { TOKEN } from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AntDesign from 'react-native-vector-icons/AntDesign';

import DropDownPicker from 'react-native-dropdown-picker';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import appLogo from '../../../assets/image/logo-recent.png';
import bubbleBG from '../../../assets/image/bubble_bg.png';
import appCars from '../../../assets/image/car_bottom.png';



const Tab = createBottomTabNavigator();


const MyProfileScreen = ({ navigation }) => {

    const updateProfileApi = API_URL + 'update-profile';
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isApiLoading, setApiLoading] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [allValues, setAllValues] = useState([]);

    console.log(updateProfileApi, "sdsdsdsd");

    useEffect(() => {
    }, []);


    const serviceBooked = () => {
        //console.log("Your Service Booking Successfully!");
        navigation.navigate('BookingConfirmScreen');
    }


    const updateProfileHandler = async () => {
        console.log(allValues, "allValues 123");

        var name = allValues.your_name;
        var email = allValues.your_email;
        var mobile = allValues.phone;

        setApiLoading(true);

        fetch(updateProfileApi, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: TOKEN
            },
            body: JSON.stringify({
                name: name,
                email: email,
                mobile: "9830021396"
            })

        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                //Success 
                console.log(responseJson, "99999");
                if (responseJson.status = "true") {
                    setApiLoading(false);
                    setSuccessMessage(responseJson.message);
                    setTimeout(() => {
                        navigation.goBack();
                    }, 1500);
                }
            })
            //If response is not in json then in error
            .catch((error) => {
                //Error 
                console.error(error, "88888");
            });
    }



    return (

        <View style={[styles.container]}>


            <View style={[styles.bubbleImg]}>
                <Image source={bubbleBG} />
            </View>

            <View style={[styles.headerSection]}>
                <TouchableOpacity style={[styles.backPoint]} onPress={navigation.goBack}>
                    <Text style={[styles.backPointText]}><AntDesign name="left" size={20} color={"#ffffff"} /> Back</Text>
                </TouchableOpacity>
                <View style={[styles.logoArea]}>
                    <Image source={appLogo} style={{ height: 80, width: 80 }} />
                </View>
            </View>

            <Text style={[styles.serviceSelectTitle]}>Your Profile</Text>

            <View style={[styles.serviceArea]}>

                <View>
                    <TextInput
                        style={[styles.inputField]}
                        placeholder="Your Name"
                        name='your_name'
                        value={allValues.your_name}
                        onChangeText={(e) => setAllValues({
                            ...allValues,
                            your_name: e
                        })}
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.inputField]}
                        placeholder="Your Email"
                        name='your_email'
                        value={allValues.your_email}
                        autoCapitalize='none'
                        onChangeText={(e) => setAllValues({
                            ...allValues,
                            your_email: e
                        })}
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.inputField]}
                        placeholder="9830021396"
                        editable={false}
                        selectTextOnFocus={false}
                        name='phone'
                        value="9830021396"
                    />
                </View>

                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={updateProfileHandler}
                    >
                        <Text style={[styles.text]}>Update Profile</Text>
                    </TouchableOpacity>
                </View>

            </View>

            {isApiLoading ? <ActivityIndicator size="small" color="#fff" /> : ''}
            {errorMessage != '' ? <Text style={{ color: 'red', textAlign: 'center', marginTop: 20, fontSize: 15, }}>{errorMessage}</Text> : <></>}
            {successMessage != '' ? <Text style={{ color: '#fff', textAlign: 'center', marginTop: 20, fontSize: 15, }}>{successMessage}</Text> : <></>}


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
    serviceArea: {
        flex: 1,
        paddingHorizontal: 100,
        // flexDirection: "row",
        // paddingHorizontal: 50,
        // flexWrap: 'wrap',
    },
    serviceAreaBox: {
        backgroundColor: "#e68422",
        borderRadius: 100,
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
    },
    serviceTitle: {
        fontSize: 18,
        lineHeight: 20,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 20,
    },
    serviceSelectTitle: {
        fontSize: 20,
        lineHeight: 28,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
        backgroundColor: '#ffcc00',
        marginTop: 0,
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000000',
    },
    inputField: {
        borderWidth: 1,
        borderColor: "#002f3f",
        borderRadius: 25,
        backgroundColor: "#ffffff",
        width: 320,
        height: 50,
        color: "#000000",
        paddingHorizontal: 15,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    inputTextareaField: {
        borderWidth: 1,
        borderColor: "#002f3f",
        borderRadius: 25,
        backgroundColor: "#ffffff",
        width: 320,
        height: 100,
        color: "#000000",
        paddingHorizontal: 15,
        fontSize: 20,
        lineHeight: 20,
        marginBottom: 0,
        textAlignVertical: 'top'
    },
    headerSection: {
        position: "relative",
    },
    backPoint: {
        position: "absolute",
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

export default MyProfileScreen