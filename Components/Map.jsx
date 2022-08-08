import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker, Polyline } from 'react-native-maps'

export default function Map(props) {
  const marks = props;

  const ShowMarker = () => {
    let coordinates = [
      { latitude: marks.latitudeProp, longitude: marks.longitudeProp },
    ]
    if (props.businessCoords) {
      coordinates.push({ latitude: marks.businessCoords.latitude, longitude: marks.businessCoords.longitude })
    }
    else {
      coordinates.push({ latitude: marks.parking.latitude, longitude: marks.parking.longitude })
    }

    return (
      <>
        <Marker
          coordinate={{ latitude: coordinates[1].latitude, longitude: coordinates[1].longitude }}
          title="ניווט"
        />
        <Polyline
          coordinates={coordinates}
          strokeColor="#0f4d6d"
          strokeWidth={6}
        />
      </>
    )
  }

  return (
    <View>
      <MapView style={{ height: 400, width: 350 }} region={{ latitude: marks.latitudeProp, longitude: marks.longitudeProp, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} showsUserLocation={true}>
        {
          (props?.parking?.latitude !== 0 && props?.parking?.longitude !== 0) || (props?.route?.params?.businessCoords?.latitude !== 0 && props?.route?.params?.businessCoords?.longitude !== 0)  ? ShowMarker() : null
        }
      </MapView>
    </View>
  )
}