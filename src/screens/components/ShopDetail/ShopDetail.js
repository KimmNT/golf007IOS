import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import share from '../../../../assets/global/styleShare';
import BackArrow from '../../../../assets/global/BackArrow';
import Bag from '../../../../assets/global/Bag';
import Icon from 'react-native-vector-icons/MaterialIcons';

const height = Dimensions.get('window').height;

export default function ShopDetail({navigation, route}) {
  const {product, bag} = route.params;
  return (
    <View style={share.container}>
      {/* <SafeAreaView> */}
      <View style={share.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={share.headline}>Product Detail</Text>
        <TouchableOpacity style={share.bag__box}>
          <Bag />
          <View style={share.item__count}>
            <Text style={share.counting}>{bag}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.prodetail__container}>
        <View style={[styles.prodetail__image, share.shadow]}>
          <Image source={{uri: product.productImg}} style={styles.image} />
        </View>
        <ScrollView>
          <View style={styles.prodetail__content}>
            <Text style={styles.prodetail__name}>{product.productName}</Text>
            <View style={styles.prodetail__line}>
              <Text style={styles.prodetail__price}>
                {product.productPrice} VND
              </Text>
              <View style={styles.prodetail__rate}>
                <Icon name="star" style={styles.rate__icon} />
                <Text style={styles.rate__num}>{product.productRating}</Text>
              </View>
            </View>
            <View style={styles.prodetail__desc}>
              <Text style={styles.title}>Description:</Text>
              <Text style={styles.content}>{product.productDetail}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* </SafeAreaView> */}
      <TouchableOpacity style={styles.button__container}>
        <Text style={styles.button__text}>add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  prodetail__content: {
    gap: 30,
    paddingVertical: height * 0.035,
    paddingHorizontal: height * 0.03,
    paddingBottom: height * 0.65,
  },
  prodetail__image: {
    width: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: height * 0.025,
    borderBottomLeftRadius: height * 0.035,
    borderBottomRightRadius: height * 0.035,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  image: {
    width: height * 0.3,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  prodetail__name: {
    fontSize: height * 0.04,
    fontWeight: '900',
    color: '#000',
  },
  prodetail__line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prodetail__price: {
    fontSize: height * 0.025,
    fontWeight: '600',
    color: '#000',
  },
  prodetail__rate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rate__icon: {
    fontSize: height * 0.025,
    color: '#FFC107',
  },
  rate__num: {
    fontSize: height * 0.025,
    color: '#000',
  },
  prodetail__desc: {
    gap: 10,
  },
  title: {
    fontSize: height * 0.025,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    fontSize: height * 0.018,
    lineHeight: height * 0.03,
    color: '#000',
  },
  button__container: {
    position: 'absolute',
    bottom: height * 0.04,
    right: height * 0.04,
    backgroundColor: share.colors.main,
    paddingVertical: height * 0.02,
    paddingHorizontal: height * 0.04,
    borderRadius: 5,
    alignItems: 'center',
  },
  button__text: {
    textTransform: 'uppercase',
    fontSize: height * 0.02,
    color: '#FFF',
    fontWeight: '600',
  },
});
