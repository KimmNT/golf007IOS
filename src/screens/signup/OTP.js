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

export default function OTP({navigation}) {
  const [otp, setOTP] = useState('');
  const handleOTPInput = txt => {
    setOTP(txt);
  };
  console.log(otp);
  const navigateToName = () => {
    if (otp === '123456') {
      navigation.navigate('EnterName');
    } else {
      Alert.alert(
        'Wrong Information',
        'OTP is not correct!\n\nPlease check again!',
      );
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
        <Text style={share.signUp_title}>Enter the OTP we just sent you</Text>
        <View style={share.form__input}>
          <TextInput
            keyboardType="numeric"
            onChangeText={handleOTPInput}
            value={otp}
            placeholder="OTP 6-digits (123456)"
            style={share.signUp_input}
          />
        </View>
        <TouchableOpacity onPress={navigateToName} style={share.signUp_btn}>
          <View style={share.signUp_btn_box}>
            <Text style={share.signUp_btn_text}>submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
