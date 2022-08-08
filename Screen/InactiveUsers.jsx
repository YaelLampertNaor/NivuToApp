import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function InactiveUsers() {
  return (
    <View style={{display: 'flex', flexDirection: 'column', alignSelf:'center', flex: 0.1, width: '90%', marginTop: 100, justifyContent: 'space-between'}}>
      <Text>InactiveUsers</Text>
      <FlatList>
        
      </FlatList>
    </View>
  )
}