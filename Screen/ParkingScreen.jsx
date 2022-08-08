import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Map from '../Components/Map'
import { useState, useEffect, useCallback } from 'react'
import { getAssetByID, registerAsset } from 'react-native-web';
import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';



export default function ParkingScreen(props) {

    const [latitudeMap, setLatitudeMap] = useState(32.3416004);
    const [longitudeMap, setLongitudeMap] = useState(34.9113918);
    const [parking, SetParking] = useState({ latitude: 0, longitude: 0 });
    const isFocused = useIsFocused();

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLatitudeMap(location.coords.latitude);
        setLongitudeMap(location.coords.longitude);
        // alert("lat: "+latitudeMap+" "+"long: "+longitudeMap)
        try {
            await AsyncStorage.setItem("lat", JSON.stringify(latitudeMap));
            await AsyncStorage.setItem("lng", JSON.stringify(longitudeMap));
        }
        catch (e) {
            console.error(e);
        }
    }

    const showParkingLocation = async () => {
        try {
            let lat = await AsyncStorage.getItem("lat");
            let lng = await AsyncStorage.getItem("lng");
            SetParking(() => ({ latitude: parseFloat(lat), longitude: parseFloat(lng) }));
        } catch (e) {
            console.error(e)
        }
    }

    // useEffect(() => {
    //     if (isFocused) {
    //         GetCurrentLocation();
    //         console.log(props.route.params.businessCoords)
    //     }
    // });

    useFocusEffect(
        useCallback(() => {
            GetCurrentLocation();
            console.log(props?.route?.params?.businessCoords)          
            return ()=>{};
        }, [props])
    );

    return (
        <ScrollView>
            <View style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', flex: 0.1, width: '90%', marginTop: 100, justifyContent: 'space-between' }}>
                <Image source={require('../assets/images/logo.png')} style={{ width: '70%', alignSelf: 'center', marginBottom: 30 }} />
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Text style={{ borderWidth: 2, paddingHorizontal: 25, paddingVertical: 15, borderRadius: 15, borderColor: '#a81e28', color: '#a81e28', fontSize: 25 }}>נקירת מיקום חניה</Text> */}
                    <Map businessCoords={props?.route?.params?.businessCoords} latitudeProp={latitudeMap} longitudeProp={longitudeMap} parking={parking} />
                </View>
                <View style={{ paddingBottom: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <TouchableOpacity style={style.button} onPress={GetCurrentLocation}>
                        <Text style={{ color: '#0f4d6d' }}>נקירת מיקום חנייה</Text>
                    </TouchableOpacity>
                    <TouchableOpacity key={'show'} style={style.button} onPress={showParkingLocation}>
                        <Text style={{ color: '#0f4d6d', opacity: 1 }}>איפה חניתי ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1
    },
    button: {
        alignItems: "center",
        padding: 7,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'transparent',
        marginHorizontal: 10,
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});
