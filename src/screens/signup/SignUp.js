import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import share from '../../../assets/global/styleShare';
import BackArrow from '../../../assets/global/BackArrow';

export default function SignUp({navigation}) {
  const [phone, setPhone] = useState('');
  const handlePhoneInput = txt => {
    setPhone(txt);
  };
  const navigateToOTP = () => {
    if (phone === '') {
      Alert.alert(
        'Missing some field',
        'You forget to enter your phone number!',
      );
    } else if (phone.length < 10 || phone.length > 10) {
      Alert.alert('Wrong Information', 'Phone number should 10-digits');
    } else {
      navigation.navigate('OTP');
    }
  };
  return (
    <View style={share.container}>
      <View style={share.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={share.headline}>Sign Up</Text>
      </View>
      <View style={share.content}>
        <Text style={share.signUp_title}>
          Let's start with your phone number
        </Text>
        <View style={share.form__input}>
          <TextInput
            onChangeText={handlePhoneInput}
            value={phone}
            keyboardType="numeric"
            placeholder="Your phone number"
            style={share.signUp_input}
          />
        </View>
        <TouchableOpacity onPress={navigateToOTP} style={share.signUp_btn}>
          <View style={share.signUp_btn_box}>
            <Text style={share.signUp_btn_text}>submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
