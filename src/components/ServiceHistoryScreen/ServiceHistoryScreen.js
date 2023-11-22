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


const ServiceHistoryScreen = ({ navigation }) => {

    const getBookingHistoryApi = API_URL + 'booking-history';
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height - 300;
    const [bookingHistoryList, setBookingHistoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    var mobile = "9830021396"
    const serviceHistoryParams = { mobile };

    useEffect(() => {
        axios.post(getBookingHistoryApi, serviceHistoryParams, {
            headers: {
                token: TOKEN,
            },

        })
            .then(function (response) {
                //console.log(response);
                //console.log(response.data.results, "Booking");
                setBookingHistoryList(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);


    const serviceBooked = () => {
        //console.log("Your Service Booking Successfully!");
        navigation.navigate('BookingConfirmScreen');
    }


    console.log(bookingHistoryList, "bookingHistoryList 5555");


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

            <Text style={[styles.serviceSelectTitle]}>Your Booking History</Text>

            <View style={[styles.serviceArea]}>

                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>


                    {bookingHistoryList != '' ?
                        <>
                            {
                                bookingHistoryList.map((item, key) =>
                                    <View
                                        key={key}
                                        style={[styles.serviceHistoryBox]}
                                    >
                                        <View style={[styles.HistoryBox]}>
                                            <FontAwesome name="car" size={20} color={"#0066ff"} />
                                            <Text style={[styles.HistoryBoxText]}>{item.service_name}</Text>
                                        </View>
                                        <View style={[styles.HistoryBox]}>
                                            <FontAwesome name="calendar" size={20} color={"#0066ff"} />
                                            <Text style={[styles.HistoryBoxText]}>{item.date}</Text>
                                        </View>
                                    </View>
                                )
                            }
                        </>
                        :
                        <View style={{ paddingHorizontal: 20, display: 'flex', height: windowHeight, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator size="large" color="#fff" />
                        </View>
                    }


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
    serviceArea: {
        //flex: 1,
        paddingHorizontal: 20,
        width: "100%",
        marginTop: 20,
        height: "100%",
        paddingBottom: 20,
    },

    serviceHistoryBox: {
        backgroundColor: "#000033",
        padding: 20,
        borderColor: "#0053c9",
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 20,
    },
    HistoryBox: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 5,
    },
    HistoryBoxText: {
        color: "#ffffff",
        fontSize: 18,
        lineHeight: 20,
        paddingLeft: 10,
    },


    // serviceAreaBox: {
    //     backgroundColor: "#e68422",
    //     borderRadius: 100,
    //     width: 100,
    //     height: 100,
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     margin: 20,
    // },
    // serviceTitle: {
    //     fontSize: 18,
    //     lineHeight: 20,
    //     color: "#ffffff",
    //     textTransform: "uppercase",
    //     textAlign: "center",
    //     marginBottom: 20,
    // },
    serviceSelectTitle: {
        fontSize: 20,
        lineHeight: 28,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 20,
        paddingHorizontal: 30,
    },
    // button: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     paddingVertical: 12,
    //     paddingHorizontal: 32,
    //     borderRadius: 50,
    //     elevation: 3,
    //     backgroundColor: '#ffcc00',
    //     marginTop: 0,
    // },
    // text: {
    //     fontSize: 18,
    //     lineHeight: 21,
    //     fontWeight: 'bold',
    //     letterSpacing: 0.25,
    //     color: '#000000',
    // },
    // inputField: {
    //     borderWidth: 1,
    //     borderColor: "#002f3f",
    //     borderRadius: 25,
    //     backgroundColor: "#ffffff",
    //     width: 320,
    //     height: 50,
    //     color: "#000000",
    //     paddingHorizontal: 15,
    //     fontSize: 20,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
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

export default ServiceHistoryScreen