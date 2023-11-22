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

import Swiper from 'react-native-swiper';
import axios from 'react-native-axios';
import { API_URL } from '../../../config';
import { TOKEN } from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import appLogo from '../../../assets/image/logo-recent.png';
import bubbleBG from '../../../assets/image/bubble_bg.png';
import appCars from '../../../assets/image/car_bottom.png';

import bannerImage01 from '../../../assets/image/ceramic02.jpg';
import bannerImage02 from '../../../assets/image/head_light_resto_03.jpg';
import bannerImage03 from '../../../assets/image/pinstrip01.jpg';
import bannerImage04 from '../../../assets/image/ppf_new02.jpg';

// import bannerImage05 from '../../../assets/image/car_wash_slide.jpg';

import appCatIcon01 from '../../../assets/image/appCatIconBike.jpg';



const Tab = createBottomTabNavigator();


const HomeScreen = ({ navigation }) => {

    const getCategoriesApi = API_URL + 'get-categories';
    const getLocationApi = API_URL + 'get-location';
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height - 300;
    //console.log(getCategoriesApi, "getCategoriesApi");
    const [getCategoryList, setGetCategoryList] = useState([]);
    const [locationAreaId, setLocationAreaId] = useState();
    const [isLoading, setIsLoading] = useState(false);



    // Set Location Details to Localhost
    const storeData = async (val, locationValId) => {
        const locationDetails = JSON.stringify(val);
        const locationId = JSON.stringify(locationValId);
        try {
            await AsyncStorage.setItem('locationDetails', locationDetails);
            await AsyncStorage.setItem('locationId', locationId);
        } catch (error) {
            // Error saving data
        }
    };

    useEffect(() => {
        axios.get(getLocationApi, {
            headers: {
                token: TOKEN
            }
        })
            .then(function (response) {
                console.log(response);
                console.log(response.data.results, "Location");
                storeData(response.data.results, response.data.results[0].id);
                //setGetCategoryList(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get(getCategoriesApi, {
            headers: {
                token: TOKEN
            },
            // params: {
            //     token: tokenForApiCall
            // }
        })
            .then(function (response) {
                //console.log(response.data.results);
                setGetCategoryList(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    // Get Location Details to Localhost
    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('locationId');
            if (value !== null) {
                // We have data!!
                //console.log(value, "55555");
                setLocationAreaId(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };
    useEffect(() => {
        retrieveData();
    }, []);

    //console.log(locationAreaId, "locationAreaId From Local Stote From Home Page");

    console.log(getCategoryList, "getCategoryList 111");



    const getService = () => {
        Alert("Get Service");
    }


    return (

        <View style={[styles.container]}>


            <Swiper
                loop
                autoplay
                autoplayTimeout={5}
                showsButtons={false}
                dot={<View style={{ backgroundColor: '#ffffff', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
                activeDot={<View style={{ backgroundColor: '#ffcc00', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
            >
                <View>
                    <Image source={bannerImage01} style={[styles.sliderImage]} />
                </View>
                <View>
                    <Image source={bannerImage02} style={[styles.sliderImage]} />
                </View>
                <View>
                    <Image source={bannerImage03} style={[styles.sliderImage]} />
                </View>
                <View>
                    <Image source={bannerImage04} style={[styles.sliderImage]} />
                </View>
            </Swiper>


            {/* 
            <View style={[styles.bubbleImg]}>
                <Image source={bubbleBG} />
            </View> */}

            <View style={[styles.logoArea]}>
                <Image source={appLogo} style={{ height: 80, width: 80 }} />
            </View>

            <Text style={[styles.serviceSelectTitle]}>Please Select Your Service Type</Text>

            <View style={[styles.serviceArea]}>

                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('ServiceListingScreen')}
                >
                    <View style={[styles.serviceAreaBox]}>
                        <MaterialCommunityIcons name="bike" size={45} color={"#000000"} />
                    </View>
                    <Text style={[styles.serviceTitle]}>Bike</Text>
                </TouchableOpacity> */}

                {/* {isLoading ? <ActivityIndicator size="small" color="#fff" /> : ''} */}

                {getCategoryList != '' ?
                    <>
                        {
                            getCategoryList.map((item, key) =>
                                <TouchableOpacity
                                    key={key}
                                    onPress={() => navigation.navigate('ServiceListingScreen', {
                                        category_id: item.cat_id,
                                    })}
                                >
                                    <View style={[styles.serviceAreaBox]}>
                                        <Image source={{ uri: `${item.icon_name}` }} style={[styles.serviceAreaBoxImg]} />
                                    </View>
                                    <Text style={[styles.serviceTitle]}>{item.cat_name}</Text>
                                </TouchableOpacity>
                            )
                        }
                    </>
                    :
                    <View style={{ paddingHorizontal: 20, display: 'flex', height: windowHeight, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                }


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
        position: "absolute",
        left: "40%",
        top: 15,
        zIndex: 1,
    },
    serviceArea: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 50,
        flexWrap: 'wrap',
    },
    serviceAreaBox: {
        backgroundColor: "#49a4dd",
        borderRadius: 100,
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        // borderColor: "#49a4dd",
        // borderWidth: 10,
        // borderStyle: "solid",
    },
    serviceAreaBoxImg: {
        borderRadius: 100,
        width: 80,
        height: 80,
    },
    serviceTitle: {
        fontSize: 18,
        lineHeight: 20,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 10,
    },
    serviceSelectTitle: {
        fontSize: 20,
        lineHeight: 22,
        color: "#ffffff",
        textTransform: "uppercase",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 30,
    },
    errorMessage: {
        fontSize: 13,
        color: 'red',
        marginLeft: 42,
        marginBottom: 0,
    },
    sliderImage: {
        width: "100%",
        height: 254,
    },
})

export default HomeScreen