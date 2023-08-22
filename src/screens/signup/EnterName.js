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

export default function EnterName({navigation}) {
  const [name, setName] = useState('');
  const handleNameInput = txt => {
    setName(txt);
  };

  const navigateToSuccess = () => {
    if (name === '') {
      Alert.alert('Missing some field', 'You forget to enter your name');
    } else if (name.length > 15) {
      Alert.alert(
        'A bit too much',
        'Your name should least than 15 characters',
      );
    } else {
      navigation.navigate('SignUpOK');
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
        <Text style={share.signUp_title}>Let's us know your name</Text>
        <View style={share.form__input}>
          <TextInput
            keyboardType="numeric"
            onChangeText={handleNameInput}
            value={name}
            placeholder="Your name here"
            style={{color: '#000'}}
          />
        </View>
        <TouchableOpacity onPress={navigateToSuccess} style={share.signUp_btn}>
          <View style={share.signUp_btn_box}>
            <Text style={share.signUp_btn_text}>submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
