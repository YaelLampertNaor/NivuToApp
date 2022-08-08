import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Lesson(props) {
    const [course, setCourse] = useState(props.course);
    const [lecturer, setLecturer] = useState(props.lecturer);
    const [location, setLocation] = useState(props.location);
    const [time, setTime] = useState(props.time);

  return (
    <View>
      <View style={{display:'flex', flexDirection:'column', justifyContent:'space-around', borderWidth: 1, borderRadius: 10, paddingHorizontal: 15, paddingVertical:5, marginVertical:5}}>
        <View style={{display:'flex', flexDirection:'row-reverse'}}>
            <Text style={{borderBottomColor: '#000', borderBottomWidth:1}}>קורס:</Text>
            <Text>  {course}    </Text>
        </View>
        <View style={{display:'flex', flexDirection:'row-reverse'}}>
            <Text style={{borderBottomColor: '#000', borderBottomWidth:1}}>מרצה:</Text>
            <Text>  {lecturer}  </Text>
        </View>
        <View style={{display:'flex', flexDirection:'row-reverse'}}>
            <Text style={{borderBottomColor: '#000', borderBottomWidth:1}}>מיקום:</Text>
            <Text>  {location}  </Text>
        </View>
        <View style={{display:'flex', flexDirection:'row-reverse'}}>
            <Text style={{borderBottomColor: '#000', borderBottomWidth:1}}>מתקיים:</Text>
            <Text>  {time}  </Text>
        </View>
        <TouchableOpacity>
            <Text style={{display:'flex', alignSelf:'flex-start', color:'#0f4d6d', paddingTop:10}}>כוון אותי לכיתה</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}