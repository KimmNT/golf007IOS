import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Upload from '../screens/components/Upload';
import Shop from '../screens/components/Shop';
import Course from '../screens/components/Course';
import Tab from './Tab';
import Success from '../screens/components/Success';
import VideoDetail from '../screens/components/VideoDetail/VideoDetail';
import ShopDetail from '../screens/components/ShopDetail/ShopDetail';
import CourseDetail from '../screens/components/CourseDetail/CourseDetail';
import FirstScreen from '../screens/FirstScreen';
import SignUp from '../screens/signup/SignUp';
import OTP from '../screens/signup/OTP';
import EnterName from '../screens/signup/EnterName';
import SignUpOK from '../screens/signup/SignUpSuccess';

const Stack = createNativeStackNavigator();

export default function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="EnterName" component={EnterName} />
        <Stack.Screen name="SignUpOK" component={SignUpOK} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Upload" component={Upload} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Course" component={Course} />
        {/* <Stack.Screen name="AllVideo" component={AllVideo} /> */}
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="VideoDetail" component={VideoDetail} />
        <Stack.Screen name="ShopDetail" component={ShopDetail} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
