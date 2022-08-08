import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Lesson from '../Components/Lesson'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Profile() {
    const [luz, setLuz] = useState([{ course: "פייתון", lecturer: "אניטה אולמן", location: "שברון 11", time: "יום א' 09:45" }, { course: "React Native UI", lecturer: "ניר חן", location: "מעבדת מחשבים 8", time: "יום א' 12:00" }])
    const [user, setUser] = useState({})

    const LoadUser = async () => {
        let u = await AsyncStorage.getItem('user');
        setUser(JSON.parse(u));
    }

    useEffect(()=>{
        LoadUser()
    }, [])

    return (
        <ScrollView>
            <View style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', flex: 0.1, width: '90%', marginTop: 100, justifyContent: 'space-between' }}>
                <Image source={require('../assets/images/profile.png')} style={{ width: 150, height: 150, alignSelf: 'center', marginBottom: 30 }} />
                <View>
                    <TextInput style={{ borderWidth: 1, borderRadius: 15, margin: 15, padding: 2, paddingHorizontal: 6 }} placeholder="חיפוש בניין/כיתה/בית עסק" >
                        <MaterialCommunityIcons name="magnify" size={24} color="black" />
                    </TextInput>
                </View>
                {/* <TouchableOpacity style={{marginBottom:15}}>
                <Text style={{ color: '#0f4d6d'}}>עריכת פרופיל אישי</Text>
            </TouchableOpacity> */}
                <View>
                    <Text style={{ fontSize: 30, marginBottom: 5, color: '#a81e28' }}> מערכת שעות עבור {user.user_first_name} {user.user_last_name}</Text>
                    {
                        luz.map((item, index) => {
                            return (
                                <Lesson course={item.course} lecturer={item.lecturer} location={item.location} time={item.time} key={index} />
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}