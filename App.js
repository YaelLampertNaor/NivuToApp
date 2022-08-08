import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ParkingScreen from './Screen/ParkingScreen';
import BusinessScreen from './Screen/BusinessScreen';
import LoginScreen from './Screen/LoginScreen';
import Profile from './Screen/Profile';
import ActiveUsers from './Screen/ActiveUsers';
import InactiveUsers from './Screen/InactiveUsers';
import Businesses from './Screen/Businesses';
import EditBusiness from './Screen/EditBusiness';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function RegUserTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { fontSize: 12}}}>
      <Tab.Screen name="ParkingReg" component={ParkingScreen} options={{ tabBarBadge: 1, tabBarLabel: 'ניווט', tabBarIcon:()=>(<MaterialCommunityIcons name="map" size={35} color="black"/>)}}/>
      <Tab.Screen name="BusinessReg" component={BusinessScreen} options={{ tabBarLabel: 'בתי עסק', tabBarIcon:()=>(<MaterialCommunityIcons name="shopping" size={35} color="black"/>) }} />
    </Tab.Navigator>
  )
}

function SignedUserTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { fontSize: 12} }}>
      <Tab.Screen name="ParkingSigned" component={ParkingScreen} options={{ tabBarBadge: 1, tabBarLabel: 'ניווט', tabBarIcon:()=>(<MaterialCommunityIcons name="map" size={35} color="black"/>) }} />
      <Tab.Screen name="BusinessSigned" component={BusinessScreen} options={{ tabBarLabel: 'בתי עסק', tabBarIcon:()=>(<MaterialCommunityIcons name="shopping" size={35} color="black"/>) }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'פרופיל אישי', tabBarIcon:()=>(<MaterialCommunityIcons name="account" size={35} color="black"/>) }} />
    </Tab.Navigator>
  )
}

function AdminTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarLabelStyle: { fontSize: 12 } }}>
      <Tab.Screen name="ActiveUsers" component={ActiveUsers} options={{tabBarLabel: 'משתמשים פעילים', tabBarIcon:()=>(<MaterialCommunityIcons name="publish" size={24} color="black"/>) }} />
      {/* <Tab.Screen name="InactiveUsers" component={InactiveUsers} options={{ tabBarLabel: 'משתמשים לא פעילים', tabBarIcon:()=>(<MaterialCommunityIcons name="publish-off" size={24} color="black"/>) }} /> */}
      <Tab.Screen name="Businesses" component={Businesses} options={{ tabBarLabel: 'בתי עסק', tabBarIcon:()=>(<MaterialCommunityIcons name="shopping-outline" size={24} color="black"/>) }} />
      <Tab.Screen name="EditBusiness" component={EditBusiness} options={{ tabBarLabel: 'עדכון בית עסק', tabBarIcon:()=>(<MaterialCommunityIcons name="shopping-search" size={24} color="black"/>) }} />
    </Tab.Navigator>
  )
}

export default function App(props) {
  const [notification, setNotification] = useState('')

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AdminTabs" component={AdminTabs} />
        <Stack.Screen name="RegUserTabs" component={RegUserTabs} />
        <Stack.Screen name="SignedUserTabs" component={SignedUserTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
