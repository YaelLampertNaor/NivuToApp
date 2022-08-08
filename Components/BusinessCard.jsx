import { View, Text, Image, Modal, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useState } from 'react';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BusinessCard(props) {

  const [modalVisible, setModalVisible] = useState(false);
  const [currentBusiness, SetCurrentBusiness] = useState(null);
  let keyP = props.keyP
  let sourceP = props.image

  const ClickImg = (business) => {
    setModalVisible(true);
    SetCurrentBusiness(business);
    console.log(business);
  }

  const RateBusiness = () => {
    alert('דרג בית עסק')
  }

  const DirectToBusiness = () => {
    props.NavigateToBusiness(currentBusiness)
  }

  const ShowBusinessModal = () => {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible((prev) => !prev);
          }}>
          <View style={{ display: 'flex', height: 200, marginVertical: '50%', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', borderWidth: 1, borderRadius: 10, width: '70%', backgroundColor: 'white', padding: 10 }}>
            <Text style={{ borderBottomWidth: 1, fontSize: 24, color: '#a72029', borderColor: '#a72029' }}>{currentBusiness.business_name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="star" size={24} color="yellow" />
              <MaterialCommunityIcons name="star" size={24} color="yellow" />
              <MaterialCommunityIcons name="star" size={24} color="yellow" />
              <MaterialCommunityIcons name="star" size={24} color="yellow" />
              <MaterialCommunityIcons name="star" size={24} color="black" />
            </View>
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={RateBusiness}>
                <Text style={{ color: '#0f4d6d', margin: 10 }}>דרג את {currentBusiness.business_name}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={DirectToBusiness}>
                <Text style={{ color: '#0f4d6d' }}>כוון אותי</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  return (
    <View style={{ flex: 0.5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginVertical: 5, height: 170, borderRadius: 15 }}>
      <TouchableHighlight onPress={() => { ClickImg(props.business) }}>
        <Image source={sourceP} key={keyP} style={{ flex: 1, width: 350, height: 200 }} />
      </TouchableHighlight>
      {currentBusiness ? ShowBusinessModal() : null}
    </View>
  )
}

