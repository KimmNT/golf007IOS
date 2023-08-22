import {Platform, StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
export default StyleSheet.create({
  colors: {
    main: '#005C52',
    highlight: '#1E2E38',
    background: '#F0F0F0',
  },
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
    // backgroundColor: "tomato",
  },
  content: {
    position: 'relative',
    paddingVertical: height * 0.08,
    paddingHorizontal: height * 0.025,
  },
  title: {
    // fontSize: Platform.OS === "ios" ? 20 : 17,
    fontSize: height * 0.025,
    color: '#1E2E38',
    fontWeight: '600',
  },
  form__input_container: {
    position: 'absolute',
    top: height * -0.01,
    left: height * 0.015,
    backgroundColor: '#F0F0F0',
    zIndex: 1,
  },
  form__input_title: {
    color: '#005C52',
    paddingHorizontal: 10,
    fontSize: height * 0.015,
    fontWeight: '600',
  },
  signUp_title: {
    fontSize: height * 0.04,
    width: '80%',
    color: '#000',
    fontWeight: '600',
  },
  // signUp_input: {
  //   width: '100%',
  //   // backgroundColor: 'tomato',
  //   borderWidth: 1,
  //   borderColor: '#000',
  //   marginTop: height * 0.05,
  //   paddingHorizontal: height * 0.02,
  //   borderRadius: 5,
  //   color: '#000',
  // },
  form__input: {
    width: '100%',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: Platform.OS === 'ios' ? height * 0.015 : 0,
    paddingHorizontal: height * 0.01,
    fontSize: 20,
    marginTop: height * 0.05,
  },
  signUp_btn: {
    marginTop: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUp_btn_box: {
    backgroundColor: '#005C52',
    paddingHorizontal: height * 0.06,
    paddingVertical: height * 0.01,
    borderRadius: 5,
  },
  signUp_btn_text: {
    color: '#FFF',
    fontSize: height * 0.03,
    textTransform: 'uppercase',
  },
  tabItem__container: {
    paddingVertical: height * 0.035,
    paddingHorizontal: height * 0.03,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: Platform.OS === "android" ? height * 0.05 : height * 0.03,
    paddingHorizontal: height * 0.02,
    paddingVertical: height * 0.01,
    paddingTop: Platform.OS === 'ios' ? height * 0.1 : 0,
    paddingBottom: height * 0.03,
    // backgroundColor: "teal",
  },
  headline: {
    fontSize: height * 0.03,
    fontWeight: '900',
    color: '#000',
  },
  thumbnail: {
    // paddingVertical: height * 0.03,
    // backgroundColor: "tomato",
    paddingBottom: height * 0.03,
  },
  thumbnail__text: {
    fontSize: height * 0.04,
    color: '#000',
  },
  thumbnail__text_highlight: {
    fontSize: height * 0.06,
    fontWeight: '700',
    color: '#1E2E38',
    marginVertical: height * 0.02,
  },
  shadow: {
    shadowColor: '#424242',
    shadowOffset: {
      width: -3,
      height: 9,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9.11,

    elevation: 20,
    borderRadius: 5,
  },
  bag__box: {
    position: 'relative',
  },
  item__count: {
    position: 'absolute',
    top: height * -0.007,
    right: height * -0.007,
    width: height * 0.025,
    height: height * 0.025,
    borderRadius: (height * 0.025) / 2,
    backgroundColor: '#005C52',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counting: {
    color: '#FFF',
    fontSize: height * 0.012,
  },
});
