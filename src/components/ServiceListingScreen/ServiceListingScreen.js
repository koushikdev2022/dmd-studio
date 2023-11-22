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


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import appLogo from '../../../assets/image/logo-recent.png';
import bubbleBG from '../../../assets/image/bubble_bg.png';
import appCars from '../../../assets/image/car_bottom.png';
import carWashImg from '../../../assets/image/car_wash_img.jpg';



const Tab = createBottomTabNavigator();


const ServiceListingScreen = ({ route, navigation }) => {

    const getServiceListApi = API_URL + 'get-services';
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height - 250;

    const [getServiceList, setGetServiceList] = useState([]);
    const [locationAreaId, setLocationAreaId] = useState();
    const [isLoading, setLoading] = useState(true);
    const { category_id } = route.params;

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('locationId');
            if (value !== null) {
                setLocationAreaId(value);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const cat_id = category_id;
    var location_id = null;
    location_id = locationAreaId;
    const serviceListParams = { cat_id, location_id };
    useEffect(() => {
        const promiseThen = new Promise((resolve, reject) => {
            retrieveData();
            return resolve
        }).then(
            axios.post(getServiceListApi, serviceListParams, {
                headers: {
                    token: TOKEN
                }
            })
                .then(function (response) {
                    setGetServiceList(response.data.results);
                    setLoading(false);
                })
                .catch(function (error) {
                })
        )

    }, [location_id]);


    const getService = () => {
        Alert("Get Service");
    }


    console.log(getServiceList, "getServiceList Get service ID");


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

            <Text style={[styles.serviceSelectTitle]}>Please Select Your Service</Text>

            <View style={[styles.serviceAreaList]}>

                <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>

                    {/* <TouchableOpacity
                        style={[styles.serviceAreaListBox]}
                        onPress={() => navigation.navigate('BookingScreen')}
                    >
                        <FontAwesome name="car" size={25} color={"#0066ff"} />
                        <Text style={[styles.serviceTitle]}>Car Foam Wash <AntDesign name="right" size={18} color={"#ffffff"} /></Text>
                    </TouchableOpacity> */}


                    {/* {getServiceList != null ?
                        <>
                            {
                                getServiceList.map((item, key) =>
                                    <TouchableOpacity
                                        key={key}
                                        style={[styles.serviceAreaListBox]}
                                        onPress={() => navigation.navigate('BookingScreen')}
                                    >
                                        <FontAwesome name="car" size={25} color={"#0066ff"} />
                                        <Text style={[styles.serviceTitle]}>{item.service_name} <AntDesign name="right" size={18} color={"#ffffff"} /></Text>
                                    </TouchableOpacity>
                                )
                            }
                        </>
                        :
                        <><ActivityIndicator size="small" color="#fff" /></>
                    } */}


                    {isLoading ?
                        <View style={{ paddingHorizontal: 20, display: 'flex', height: windowHeight, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <ActivityIndicator size="large" color="#fff" />
                        </View>
                        :
                        <>
                            {
                                getServiceList.map((item, key) =>
                                    <TouchableOpacity
                                        key={key}
                                        style={[styles.serviceAreaListBox]}
                                        //onPress={() => navigation.navigate('BookingScreen')}
                                        onPress={() => navigation.navigate('BookingScreen', {
                                            serviceId: item.service_id,
                                        })}
                                    >
                                        <FontAwesome name="car" size={25} color={"#0066ff"} />
                                        <Text style={[styles.serviceTitle]}>{item.service_name} <AntDesign name="right" size={18} color={"#ffffff"} /></Text>
                                    </TouchableOpacity>
                                )
                            }
                        </>
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
        fontSize: 17,
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

export default ServiceListingScreen