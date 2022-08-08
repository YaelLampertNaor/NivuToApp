import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import BusinessCard from '../Components/BusinessCard'
import { useState, useEffect } from 'react';
import { Get } from '../Fetch';

export default function BusinessScreen({navigation, route}) {
  const pre = '../assets/images/';
  const [businesses, SetBusinesses] = useState([])

  const [imageList, setImageList] = useState([
    require(pre + 'artura.jpg'),
    require(pre + 'branch.jpg'),
    require(pre + 'karnaf.jpg'),
    require(pre + 'miclol.jpg'),
    // require(pre + 'Library2.jpg'),
  ])

  const GetAllBusinesses = async () => {
    //data = רשימת העסקים המתקבלת מהשרת
    let data = await Get('api/business');
    if (data.length) {
      SetBusinesses(data);
    }
  }

  const NavigateToBusiness=(b)=>{
    if(route.name === "BusinessReg"){
      navigation.navigate('ParkingReg', {businessCoords: {latitude: b.latitude, longitude: b.longitude} })

    }
    else{
      navigation.navigate('ParkingSigned', {businessCoords: {latitude: b.latitude, longitude: b.longitude} })
    }
  }

  useEffect(() => {
    GetAllBusinesses();
    console.log(route)
  }, []);



  return (
    <ScrollView style={{marginTop:40}}>
      <View style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', flex: 0.1, width: '90%', justifyContent: 'space-between' }}>
        <Image source={require('../assets/images/logo.png')} style={{ width: '70%', alignSelf: 'center', marginBottom: 30 }} />
        {/* <Text style={{ fontSize: 35, marginBottom: 20, textAlign: 'center' }}>בתי עסק</Text> */}
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', flexWrap: 'wrap', marginBottom: 230 }}>
        {
          businesses.map((item, index) => {
            return (
              <BusinessCard business={item} image={imageList[index]} keyP={index} key={index} NavigateToBusiness={NavigateToBusiness} />
            )
          })
        }
      </View>
    </ScrollView>
  )
}
