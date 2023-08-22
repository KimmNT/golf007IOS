import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Upload from '../screens/components/Upload';
import Shop from '../screens/components/Shop';
import Course from '../screens/components/Course';
import AllVideo from '../screens/components/AllVideo';
import Home from '../screens/Home';

//DIMENSIONS
height = Dimensions.get('window').height;

//ICON
import Icon from 'react-native-vector-icons/MaterialIcons';
//STYLE
import share from '../../assets/global/styleShare';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={Home}
      screenOptions={({route}) => ({
        tabBarIcon: ({focus, color}) => {
          let iconName;
          let rn = route.name;
          if (rn === 'Home') {
            iconName = focus ? 'home' : 'home';
          } else if (rn === 'Shop') {
            iconName = focus ? 'shopping-bag' : 'shopping-bag';
          } else if (rn === 'Upload') {
            iconName = focus ? 'add-circle' : 'add-circle';
          } else if (rn === 'AllVideo') {
            iconName = focus ? 'videocam' : 'videocam';
          } else if (rn === 'Course') {
            iconName = focus ? 'book' : 'book';
          }
          return <Icon name={iconName} size={28} color={color} />;
        },
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: '#757575',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: share.colors.highlight,
          height: height * 0.1,
          // paddingBottom: 30,
          //   marginBottom: 10,
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="AllVideo" component={AllVideo} />
      <Tab.Screen name="Shop" component={Shop} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
