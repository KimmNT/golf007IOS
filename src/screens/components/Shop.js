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
import React, {useEffect, useState} from 'react';
import share from '../../../assets/global/styleShare';
import productsData from '../../../databases/products.json';
import Bag from '../../../assets/global/Bag';

const height = Dimensions.get('window').height;

export default function Shop({navigation}) {
  const [bag, setBag] = useState(0);
  const navigateToDetail = product => {
    navigation.navigate('ShopDetail', {product, bag});
  };
  const addToCart = () => {};
  const navigateToCheckOut = () => {};
  return (
    <View style={share.container}>
      {/* <SafeAreaView> */}
      <View style={share.header}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity> */}
        <Text style={share.headline}>Shopping</Text>
        <TouchableOpacity style={share.bag__box}>
          <Bag />
          <View style={share.item__count}>
            <Text style={share.counting}>{bag}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={share.tabItem__container}>
          <View style={share.thumbnail}>
            <Text style={share.thumbnail__text}>Explore our</Text>
            <Text style={share.thumbnail__text_highlight}>Accessories</Text>
          </View>
          <View style={styles.shop__container}>
            {productsData.products.map(product => (
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
      </ScrollView>
      {/* </SafeAreaView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  shop__container: {
    paddingBottom: height * 0.1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
