import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const height = Dimensions.get('window').height;

//STYLE
import share from '../../../assets/global/styleShare';

//IMAGEa
import SuccessBox from '../../../assets/images/success.png';

export default function SignUpSuccess({navigation}) {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.success__container}>
      <Image source={SuccessBox} />
      <Text style={styles.success__text}>Sign Up Successfully</Text>
      <TouchableOpacity
        onPress={navigateToLogin}
        style={styles.button__container}>
        <View style={styles.button__text_container}>
          <Text style={styles.button__text}>back to login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  success__container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  success__text: {
    fontSize: height * 0.03,
    fontWeight: '600',
    color: '#000',
  },
  button__container: {
    backgroundColor: share.colors.main,
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.065,
    borderRadius: 5,
  },
  button__text: {
    textTransform: 'uppercase',
    fontSize: height * 0.02,
    color: '#FFF',
    fontWeight: '600',
    textAlign: 'center',
  },
});
