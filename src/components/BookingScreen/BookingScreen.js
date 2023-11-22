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
import DatePicker from 'react-native-date-picker';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import appLogo from '../../../assets/image/logo-recent.png';
import bubbleBG from '../../../assets/image/bubble_bg.png';
import appCars from '../../../assets/image/car_bottom.png';



const Tab = createBottomTabNavigator();


const BookingScreen = ({ route, navigation }) => {

    const getBookingSlotsApi = API_URL + 'get-booking-slots';
    const [locationAreaId, setLocationAreaId] = useState();

    const { serviceId } = route.params;

    //console.log(serviceId, "serviceId from prev screen");

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isApiLoading, setApiLoading] = useState(false);

    const confirmBookingApi = API_URL + 'confirm-booking';

    const [availableDateSlot, setAvailableDateSlot] = useState();

    const [dateSelect, setDateSelect] = useState(new Date());
    const [openSelectDate, setOpenSelectDate] = useState(false);
    const [newformatdate, setnewformatdate] = useState();
    const [newDay, setNewDay] = useState();


    const [isLoading, setLoading] = useState(true);

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

    var location_id = null;
    location_id = locationAreaId;
    const serviceGetBookingSlotsParams = { location_id };

    useEffect(() => {
        const promiseThen = new Promise((resolve, reject) => {
            retrieveData();
            return resolve
        }).then(
            axios.post(getBookingSlotsApi, serviceGetBookingSlotsParams, {
                headers: {
                    token: TOKEN
                }
            })
                .then(function (response) {
                    setAvailableDateSlot(response.data.results);
                })
                .catch(function (error) {
                })
        )

    }, [location_id]);

    useEffect(() => {
    }, []);


    const [isOpenTime, setIsOpenTime] = useState(false);
    const [currentTimeValue, setCurrentTimeValue] = useState("");
    const [availableTimeList, setAvailableTimeList] = useState([]);


    const date = new Date(dateSelect)
    const formattedDate = date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    })
    useEffect(() => {
        setnewformatdate(formattedDate)
    }, [formattedDate]);


    var weekdayNum = date.toLocaleDateString("en-GB", {
        weekday: 'long',
    });


    console.log(availableDateSlot, "availableDateSlot 77777777777");

    useEffect(() => {
        (async () => {
        setNewDay(weekdayNum.toLowerCase(weekdayNum))
           console.log("sdsdsd 1st");
        if (availableDateSlot != undefined) {
            var dd = JSON.stringify(availableDateSlot);
            console.log("sdsdsd 2st" + dd);
            // var found = await availableDateSlot.filter(entry => entry.day === newDay);
             let found = await availableDateSlot.find(o => o.day === newDay);
            // const found  = search(newDay, availableDateSlot);
            // console.log(resultObject)
            //var found = await availableDateSlot.find(e => e.day === newDay);

            console.log(found,"ffffffffff");
            let timeList = [];
            var startTime = (found.start_time) ? found.start_time : "00:00:00";
            var endTime = (found.end_time) ? found.end_time : "18:00:00";

            console.log(found.start_time+" start");
            console.log(found.end_time+" end");

            console.log(startTime, "startTime 55555")

            function addMinutes(time, minutes) {
                var date = new Date(new Date('01/01/2015 ' + time).getTime() + minutes * 60000);
                var tempTime = ((date.getHours().toString().length == 1) ? '0' + date.getHours() : date.getHours()) + ':' +
                    ((date.getMinutes().toString().length == 1) ? '0' + date.getMinutes() : date.getMinutes()) + ':' +
                    ((date.getSeconds().toString().length == 1) ? '0' + date.getSeconds() : date.getSeconds());
                return tempTime;
            }

            var starttime = startTime;
            var interval = "30";
            var endtime = endTime;
            var timeslots = [starttime];


            while (starttime != endtime) {

                starttime = addMinutes(starttime, interval);
                timeslots.push(starttime);

            }

            console.log(timeslots + "sdsdsd timeslot");

            //console.log(startTime, "startTime 66666")

            var res = timeslots.map(item => ({ 'label': item, 'value': item }));
            setAvailableTimeList(res);

            //console.log(startTime, "startTime 77777")
        }
        else{
            console.log("No recodr found");
        }
    })();
    return () => {
        // this now gets called when the component unmounts
      };
    }, [formattedDate]);

    useEffect(() => {
    }, []);


    const [finalTimeGet, setFinalTimeGet] = useState();

    const selectTimeHandler = (val) => {

        var dt = new Date();
        var array = val.split(':');
        console.log(array[0]);
        var hours = array[0];
        console.log(val, 'ffffffff');
        var AmOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = (hours % 12) || 12;
        var minutes = array[1];
        var finalTime = "Time  - " + hours + ":" + minutes + " " + AmOrPm;
        setFinalTimeGet(finalTime);
        console.log(finalTime, 'final time');
        console.log(AmOrPm, "AmOrPm 55555");
    }

    console.log(finalTimeGet, 'final time out');


    var mobileParams = 9830021396
    var otpParams = 1111
    var sendDateParams = "2023-09-17" 
    var sendTimeParams = "10:30 PM"
    var service_ids = [2]
    var quantityParams = 1

    
    console.log(new Date(dateSelect) , "send data");
    

    const serviceBooked = () => {


        console.log(mobileParams, "mobileParams 111");
        console.log(otpParams, "otpParams 222");
        console.log(sendDateParams, "sendDateParams 333");
        console.log(sendTimeParams, "sendTimeParams 444");
        console.log(service_ids, "service_ids 555");
        console.log(quantityParams, "quantityParams 666");

        setApiLoading(true);

        fetch(confirmBookingApi, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                token: TOKEN
            },
            body: JSON.stringify({
                mobile: "9830021396",
                otp: otpParams,
                date: sendDateParams,
                time: sendTimeParams,
                service_ids: service_ids,
                quantity: quantityParams,
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
                        navigation.navigate('BookingConfirmScreen');
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

            <Text style={[styles.serviceSelectTitle]}>Please Select Your Booking Date and Time</Text>

            <View style={[styles.serviceArea]}>


                <View style={styles.eachField}>
                    <TouchableOpacity onPress={() => setOpenSelectDate(true)}>
                        <TextInput style={styles.inputField}
                            placeholder="Select Date"
                            placeholderTextColor="#000000"
                            editable={false}
                            name='Date'
                            value={newformatdate}
                            onChangeText={dateSelect => onChangeText(dateSelect)}
                        />
                    </TouchableOpacity>

                    <DatePicker
                        modal
                        open={openSelectDate}
                        date={dateSelect}
                        mode="date"
                        onConfirm={(dateSelect) => {
                            setOpenSelectDate(false)
                            setDateSelect(dateSelect)
                        }}
                        onCancel={() => {
                            setOpenSelectDate(false)
                        }}
                    />
                </View>

                <View style={{ marginTop: 20, zIndex: 1000 }}>
                    <DropDownPicker
                        items={availableTimeList}
                        open={isOpenTime}
                        listMode="MODAL"
                        setOpen={() => setIsOpenTime(!isOpenTime)}
                        value={currentTimeValue}
                        setValue={(val) => setCurrentTimeValue(val)}
                        maxHeight={200}
                        autoScroll
                        placeholder='Select Your Service Time'
                        placeholderStyle={{ color: "#000000", fontSize: 16, lineHeight: 40, fontWeight: "700" }}
                        showTickIcon={true}
                        defaultIndex={0}
                        containerStyle={{ height: 40 }}
                        style={[styles.inputField]}
                        onChangeValue={(e) => selectTimeHandler(e)}
                    />
                </View>

                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity
                        style={[styles.button]}
                        onPress={serviceBooked}
                    >
                        <Text style={[styles.text]}>Book Your Service</Text>
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
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "700",
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

export default BookingScreen