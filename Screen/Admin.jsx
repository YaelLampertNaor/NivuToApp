import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Admin({navigation}) {
    const Businesses = () =>{
        navigation.navigate("Profile")
    }
    const Users = () =>{
        navigation.navigate("UserMan")
    }
    
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignSelf:'center', flex: 0.1, marginTop: 100, justifyContent: 'space-around'}}>
        <View>
            <TouchableOpacity onPress={Users}>
                <Text style={{marginBottom:10}}>ניהול משתמשים</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Businesses}>
                <Text style={{marginBottom:10}}>ניהול בתי עסק</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}