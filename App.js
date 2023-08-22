import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Routing from './src/router/Routing';
import Splash from './src/screens/Splash';

export default function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2500);
  });

  return <>{splash ? <Splash /> : <Routing />}</>;
}

const styles = StyleSheet.create({});
