import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';

const height = Dimensions.get('window').height;

//STYLE
import share from '../../../assets/global/styleShare';
import BackArrow from '../../../assets/global/BackArrow';

//ICON
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Upload({navigation}) {
  const handleLogin = () => {
    Alert.alert('Before Save!', 'Make sure your information is correct!', [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
      {text: 'OK', onPress: () => navigation.navigate('Success')},
    ]);
  };
  return (
    <View style={share.container}>
      {/* <SafeAreaView> */}
      <KeyboardAvoidingView behavior="height">
        <View style={share.header}>
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity> */}
          <Text style={share.headline}>Upload Your Video</Text>
        </View>
        <ScrollView>
          <View style={share.tabItem__container}>
            <View style={styles.upload__content}>
              <View style={share.thumbnail}>
                <Text style={share.thumbnail__text}>Let's upload your</Text>
                <Text style={share.thumbnail__text_highlight}>Works</Text>
              </View>

              <View style={styles.upload__area}>
                <TouchableOpacity style={styles.upload__icon}>
                  <Icon name="publish" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.upload__text}>Upload your video</Text>
              </View>
              <View style={[styles.upload__info, styles.login__form]}>
                <Text style={share.title}>More details</Text>
                <View style={{position: 'relative'}}>
                  <View style={share.form__input_container}>
                    <Text style={share.form__input_title}>Your name</Text>
                  </View>
                  <View style={styles.form__input}>
                    <TextInput style={styles.input__color} />
                  </View>
                </View>
                <View style={{position: 'relative'}}>
                  <View style={share.form__input_container}>
                    <Text style={share.form__input_title}>Video title</Text>
                  </View>
                  <View style={styles.form__input}>
                    <TextInput style={styles.input__color} />
                  </View>
                </View>
                <View style={{position: 'relative'}}>
                  <View style={share.form__input_container}>
                    <Text style={share.form__input_title}>Note</Text>
                  </View>
                  <View style={styles.form__input}>
                    <TextInput
                      multiline
                      style={[
                        styles.input__color,
                        {paddingVertical: height * 0.015},
                      ]}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  onPress={handleLogin}
                  style={styles.button__container}>
                  <View style={styles.button__text_container}>
                    <Text style={styles.button__text}>submit</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  upload__content: {
    paddingBottom: height * 0.3,
  },
  upload__area: {
    width: '100%',
    // backgroundColor: "tomato",
    borderColor: share.colors.main,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: height * 0.05,
    paddingVertical: height * 0.03,
    gap: height * 0.03,
  },
  upload__icon: {
    width: height * 0.05,
    height: height * 0.05,
    borderRadius: height * (0.05 / 2),
    backgroundColor: share.colors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: height * 0.02,
    color: '#FFF',
  },
  upload__text: {
    fontSize: height * 0.02,
    color: '#000',
  },
  login__form: {
    width: '100%',
    borderRadius: 10,
    gap: 35,
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
  input__color: {
    color: '#000',
  },
  upload__info: {
    marginTop: height * 0.05,
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
    // fontWeight: 600,
    textAlign: 'center',
  },
});
