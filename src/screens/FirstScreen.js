import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

//IMAGE
import ImageFirstScreen from '../../assets/images/firstScreen.png';

//STYLE
import share from '../../assets/global/styleShare';

export default function FirstScreen({navigation}) {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={share.container}>
      <Image source={ImageFirstScreen} style={styles.image} />
      <View style={styles.fs__btn_list}>
        <TouchableOpacity
          onPress={navigateToLogin}
          style={[styles.fs__btn, styles.login_btn, share.shadow]}>
          <Text style={[styles.fs__btn_text, styles.login_text]}>log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToSignUp}
          style={[styles.fs__btn, styles.signup_btn, share.shadow]}>
          <Text style={[styles.fs__btn_text, styles.signup_text]}>sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  fs__btn_list: {
    position: 'absolute',
    bottom: height * 0.2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  fs__btn: {
    height: height * 0.07,
    width: height * 0.25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fs__btn_text: {
    textTransform: 'uppercase',
    fontSize: height * 0.025,
    fontWeight: '600',
  },
  login_btn: {
    backgroundColor: share.colors.main,
  },
  signup_btn: {
    backgroundColor: '#FFF',
  },
  login_text: {
    color: '#FFF',
  },
  signup_text: {
    color: share.colors.main,
  },
});
