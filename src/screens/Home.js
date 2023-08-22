import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

//DIMENSIONS
const height = Dimensions.get('window').height;

//STYLE
import share from '../../assets/global/styleShare';

//ICONS
import Icon from 'react-native-vector-icons/MaterialIcons';

//IMAGE
import CourseImg from '../../assets/images/course/golf-swing.jpg';
import VideoImage from '../../assets/images/img-video/video2.jpg';
import Product1 from '../../assets/images/products/pro-hat-1.png';
import Product2 from '../../assets/images/products/pro-hat-2.png';
import Product3 from '../../assets/images/products/pro-shirt-1.png';
import Product4 from '../../assets/images/products/pro-stick-3.png';

//DB
import productsData from '../../databases/products.json';

export default function Home({navigation}) {
  const [bag, setBag] = useState(0);
  const navigateToCheckOut = () => {
    // navigation.navigate("CheckOut");
  };
  const navigateToDetail = product => {
    navigation.navigate('ShopDetail', {product, bag});
  };
  const handleLogOut = () => {
    Alert.alert('Logout Warning!', 'Do you want to log out ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Nah! Missclick!'),
      },
      {
        text: 'OK',
        onPress: () => navigation.goBack(),
      },
    ]);
  };
  return (
    <View style={share.container}>
      {/* <SafeAreaView> */}
      <ScrollView>
        <View style={share.content}>
          <View style={styles.home__container}>
            <View style={styles.header}>
              <Text style={styles.welcome}>Hi, Andrea!</Text>
              <View style={styles.header__icon}>
                <View style={styles.bag__box}>
                  <Icon name="local-mall" style={styles.bag} />
                  <TouchableOpacity
                    onPress={navigateToCheckOut}
                    style={styles.item__count}>
                    <Text style={styles.counting}>{bag}</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.user__bg}
                  onPress={handleLogOut}>
                  <Icon name="logout" style={styles.user} />
                </TouchableOpacity>
              </View>
            </View>
            {/* horizontal navbar */}
            <ScrollView horizontal></ScrollView>
            <View style={styles.nav__list}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Upload')}
                style={styles.nav__item}>
                <View style={styles.nav__item_icon}>
                  <Icon name="publish" style={styles.icon} />
                </View>
                <Text style={styles.nav__item_text}>Upload</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Shop')}
                style={styles.nav__item}>
                <View style={styles.nav__item_icon}>
                  <Icon name="shopping-bag" style={styles.icon} />
                </View>
                <Text style={styles.nav__item_text}>Shopping</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Course')}
                style={styles.nav__item}>
                <View style={styles.nav__item_icon}>
                  <Icon name="book" style={styles.icon} />
                </View>
                <Text style={styles.nav__item_text}>Courses</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.home__box}>
              <Text style={share.title}>Explore our courses</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Course')}
                style={[styles.box__container, share.shadow]}>
                <View style={styles.box__image_container}>
                  <Image source={CourseImg} style={styles.box__image} />
                  <View style={styles.box__image_layer}></View>
                </View>
                <View style={styles.box__btn_container}>
                  <Text style={styles.box__btn}>Enroll</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.home__box}>
              <Text style={share.title}>Teacher's reviews</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('AllVideo')}
                style={[styles.box__container, share.shadow]}>
                <View style={styles.box__image_container}>
                  <Image source={VideoImage} style={styles.box__image} />
                  <View style={styles.box__image_layer}></View>
                </View>
                <View style={styles.play__btn_container}>
                  <Icon name="play-arrow" style={styles.play__btn} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.home__box}>
              <Text style={share.title}>Suggested for you</Text>
              <View style={styles.shop__container}>
                {productsData.products.slice(3, 7).map(product => (
                  <TouchableOpacity
                    key={product.productID}
                    style={[styles.shop__item, share.shadow]}
                    onPress={() => navigateToDetail(product)}>
                    <View style={styles.image__box}>
                      <Image
                        source={{uri: product.productImg}}
                        style={styles.product__image}
                      />
                    </View>
                    <View style={styles.product__detail}>
                      <Text style={styles.product__name}>
                        {product.productName.substring(0, 15)}...
                      </Text>
                      <Text style={styles.product__price}>
                        {product.productPrice} VND
                      </Text>
                      <TouchableOpacity
                        style={styles.button__container}
                        onPress={() => setBag(bag + 1)}>
                        <Text style={styles.button__text}>add to cart</Text>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  home__container: {
    paddingBottom: height * 0.06,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: height * 0.02,
    // paddingTop: height * 0.08,
    paddingBottom: height * 0.03,
  },
  welcome: {
    fontSize: height * 0.035,
    fontWeight: '600',
    color: share.colors.highlight,
  },
  header__icon: {
    flexDirection: 'row',
    gap: 30,
  },
  bag__box: {
    position: 'relative',
  },
  bag: {
    fontSize: height * 0.03,
    color: share.colors.highlight,
  },
  item__count: {
    position: 'absolute',
    top: height * -0.007,
    right: height * -0.007,
    width: height * 0.02,
    height: height * 0.02,
    borderRadius: (height * 0.02) / 2,
    backgroundColor: share.colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counting: {
    color: '#FFF',
    fontSize: height * 0.012,
  },
  user__bg: {
    padding: height * 0.005,
    backgroundColor: share.colors.main,
    borderRadius: height * 0.005,
  },
  user: {
    fontSize: height * 0.025,
    color: '#FFF',
  },
  nav__list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: "space-between",
    gap: 10,
    marginVertical: height * 0.025,
  },
  nav__item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: share.colors.main,
    paddingHorizontal: height * 0.01,
    paddingVertical: height * 0.01,
    borderRadius: 5,
    // width: "47%",
    gap: 20,
  },
  nav__item_icon: {
    width: height * 0.035,
    height: height * 0.035,
    borderRadius: height * (0.035 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  icon: {
    fontSize: height * 0.02,
    color: share.colors.main,
  },
  nav__item_text: {
    fontSize: height * 0.025,
    color: '#FFF',
  },

  box__container: {
    marginVertical: height * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  box__image_container: {
    width: '100%',
    height: 150,
    position: 'relative',
  },
  box__image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  box__image_layer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.4,
    borderRadius: 5,
  },
  box__btn_container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    paddingHorizontal: height * 0.05,
    paddingVertical: height * 0.01,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  box__btn: {
    color: share.colors.highlight,
    fontSize: height * 0.02,
  },
  play__btn_container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: height * 0.07,
    height: height * 0.07,
    borderRadius: height * (0.07 / 2),
  },
  play__btn: {
    color: share.colors.main,
    fontSize: height * 0.04,
  },
  shop__container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: height * 0.05,
  },
  shop__item: {
    backgroundColor: '#FFF',
    width: '47%',
    padding: height * 0.01,
    marginBottom: height * 0.02,
  },
  product__image: {
    width: '100%',
    height: height * 0.2,
    resizeMode: 'contain',
  },
  product__detail: {
    marginTop: height * 0.01,
    gap: 20,
    // backgroundColor: "tomato",
  },
  product__name: {
    fontSize: height * 0.025,
    fontWeight: '600',
    color: '#000',
  },
  product__price: {
    fontSize: height * 0.02,
    color: '#000',
  },
  button__container: {
    backgroundColor: share.colors.main,
    paddingVertical: height * 0.01,
    paddingHorizontal: height * 0.009,
    borderRadius: 5,
    alignItems: 'center',
  },
  button__text: {
    textTransform: 'uppercase',
    fontSize: height * 0.015,
    color: '#FFF',
    fontWeight: '600',
  },
});
