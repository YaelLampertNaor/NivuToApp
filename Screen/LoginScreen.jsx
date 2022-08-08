import { View, Text, Image, TouchableOpacity, DrawerLayoutAndroidComponent } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { Post } from '../Fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LoginScreen({ navigation }) {

  const LOGO = '../assets/images/logo.png'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let checkCredintials = async () => {
    // alert(email + " " + password)

    let objToSend = {
      user_email: email,
      user_password: password
    }

    if (email.toLowerCase() == "g@g.com" && password.toLowerCase() == "abc123") {
      navigation.navigate("AdminTabs")
    }
    else {
      let user = await Post('api/user/login', objToSend);
      if (user.user_email === email){
        await AsyncStorage.setItem('user', JSON.stringify(user)) 
        navigation.navigate("SignedUserTabs")
      }
      else
        alert('שגיאה בפרטי המשתמש')
    }
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', flex: 0.1, width: '90%', marginTop: 100, justifyContent: 'space-between' }}>
      <Image source={require(LOGO)} style={{ width: '70%', alignSelf: 'center', marginBottom: 30 }} />
      <View>
        <TextInput underlineColor='transparent' style={{ borderRadius: 10 }} placeholder="Email" onChangeText={(txt) => { setEmail(txt) }} />
        <TextInput underlineColor='transparent' style={{ marginTop: 30, borderRadius: 10 }} placeholder="Password" onChangeText={(txt) => { setPassword(txt) }} />
        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 30 }} onPress={checkCredintials}>
          <Text style={{ color: '#0f4d6d' }}>כניסה</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 30 }} onPress={() => { navigation.navigate("RegUserTabs") }}>
          <Text style={{ color: '#0f4d6d' }}>כניסה כאורח/ת</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

