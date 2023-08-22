import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
// import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-controls';

const height = Dimensions.get('window').height;

//DB
import videoData from '../../../databases/videosList.json';

//STYLE
import share from '../../../assets/global/styleShare';

export default function AllVideo({navigation}) {
  const navigateToDetail = video => {
    navigation.navigate('VideoDetail', {video});
  };
  return (
    <View style={share.container}>
      {/* <SafeAreaView> */}
      <View style={share.header}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity> */}
        <Text style={share.headline}>Your Uploaded Videos</Text>
      </View>
      <ScrollView>
        <View style={share.tabItem__container}>
          <View style={share.thumbnail}>
            <Text style={share.thumbnail__text}>See what the teacher</Text>
            <Text style={share.thumbnail__text_highlight}>Said</Text>
          </View>
          <View style={styles.video__list}>
            {videoData.videos.map(video => (
              <TouchableOpacity
                style={[styles.video__item, share.shadow]}
                key={video.videoID}
                onPress={() => navigateToDetail(video)}>
                {/* <View style={styles.video__box}>
                  <Video
                    source={{uri: video.videoURL}} // Can be a URL or a local file.
                    ref={videoRef}
                    resizeMode="contain"
                    style={styles.item__video}
                  />
                  <View style={styles.box__layer}></View>
                </View> */}
                <View style={styles.item__vertical_line}></View>
                <View style={styles.item__content}>
                  <View style={styles.item__detail}>
                    <Text style={styles.item__title}>Title: </Text>
                    <Text style={styles.item__text}>{video.videoTitle} </Text>
                  </View>
                  <View style={styles.item__detail}>
                    <Text style={styles.item__title}>Posted day: </Text>
                    <Text style={styles.item__text}>{video.videoDate} </Text>
                  </View>
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
  video__list: {
    gap: 20,
    paddingBottom: height * 0.2,
    width: '100%',
  },
  video__item: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: height * 0.02,
    borderRadius: height * 0.005,
    gap: 30,
    width: '100%',
  },
  item__content: {
    gap: 10,
  },
  item__vertical_line: {
    height: height * 0.02,
    width: height * 0.02,
    backgroundColor: share.colors.main,
    borderRadius: (height * 0.02) / 2,
  },
  item__detail: {
    fontSize: height * 0.02,
    width: '100%',
    color: '#000',
    flexDirection: 'row',
  },
  item__title: {
    fontWeight: '600',
    color: '#000',
  },
  item__text: {
    color: '#000',
  },
  video__box: {
    position: 'relative',
    width: 140,
    height: 100,
  },
  box__layer: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    opacity: 0.3,
    borderRadius: height * 0.005,
  },
  item__video: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    borderRadius: height * 0.005,
  },
});
