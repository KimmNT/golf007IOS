import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
//DIMENSIONS
const height = Dimensions.get('window').height;
//IMAGE
import LoginBG from '../../assets/images/background-blur.png';
import Name from '../../assets/images/name.png';
//STYLE
import share from '../../assets/global/styleShare';

export default function Login({navigation}) {
  const [phonenum, setPhonenum] = useState();

  const handlePhoneInput = txt => {
    setPhonenum(txt);
  };
  const handleLogin = () => {
    phonenum === '123456'
      ? navigation.navigate('Tab')
      : Alert.alert(
          'Wrong information!',
          'Your phone number is not correct or was not registered.\n\nPlease check again!',
        );
  };
  const navigateToRegister = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={share.container}>
      <Image source={LoginBG} style={styles.login__bg} />
      <SafeAreaView>
        <KeyboardAvoidingView behavior="position">
          <View style={share.content}>
            <View style={styles.login__container}>
              <Image source={Name} style={styles.brand__name} />
              <View style={styles.login__form}>
                <View style={styles.form__input}>
                  <TextInput
                    keyboardType="numeric"
                    onChangeText={handlePhoneInput}
                    value={phonenum}
                    placeholder="Your registered phone number (123456)"
                    style={{color: '#000'}}
                  />
                </View>
                <TouchableOpacity onPress={navigateToRegister}>
                  <Text style={styles.register__name}>
                    Sign up with your phone number!
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleLogin}
                  style={styles.button__container}>
                  <View style={styles.button__text_container}>
                    <Text style={styles.button__text}>log in</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  login__bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -2,
  },
  login__container: {
    position: 'relative',
    // backgroundColor: 'maroon',
    paddingBottom: 500,
  },
  brand__name: {
    width: height * 0.3,
    height: height * 0.05,
    resizeMode: 'cover',
  },
  login__form: {
    position: 'absolute',
    bottom: height * 0.01,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: height * 0.03,
    paddingVertical: height * 0.05,
    gap: 35,
    alignItems: 'center',
  },
  form__input: {
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: Platform.OS === 'ios' ? height * 0.015 : 0,
    paddingHorizontal: height * 0.01,
    fontSize: 20,
  },
  register__name: {
    fontWeight: '600',
    color: share.colors.main,
    fontStyle: 'italic',
  },
  button__container: {
    backgroundColor: share.colors.main,
    paddingVertical: height * 0.015,
    paddingHorizontal: height * 0.065,
    borderRadius: 5,
  },
  button__text: {
    textTransform: 'uppercase',
    fontSize: height * 0.025,
    color: '#FFF',
    fontWeight: '600',
  },
});
