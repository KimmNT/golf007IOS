import {
  Image,
  StyleSheet,
  Text,
  View,
  DimensionValue,
  Dimensions,
} from 'react-native';
import React from 'react';
import SplashBG from '../../assets/images/splash.png';
import share from '../../assets/global/styleShare';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Splash() {
  return (
    <View style={styles.splash__container}>
      <Image source={SplashBG} style={styles.splash_huge_image} />
      <View style={styles.splash_huge_image_blur}></View>
      <View style={styles.splash__center}>
        <Image source={SplashBG} style={styles.splash_small_image} />
      </View>
      <View style={styles.version}>
        <Text style={styles.version__num}>ver-1.0.3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splash__container: {
    position: 'relative',
    width: width,
    height: height,
  },
  splash_huge_image: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  splash_huge_image_blur: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    opacity: 0.8,
  },
  splash__center: {
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  splash_small_image: {
    width: height * 0.6,
    height: height * 0.6,
    resizeMode: 'contain',
  },
  version: {
    position: 'absolute',
    bottom: height * 0.08,
    left: height * 0.02,
    backgroundColor: '#FFF',
  },
  version__num: {
    paddingVertical: height * 0.005,
    paddingHorizontal: height * 0.02,
    fontSize: height * 0.013,
    color: share.colors.main,
  },
});
