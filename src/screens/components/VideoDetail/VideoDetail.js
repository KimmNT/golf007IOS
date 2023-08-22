import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import share from '../../../../assets/global/styleShare';
import BackArrow from '../../../../assets/global/BackArrow';
import Icon from 'react-native-vector-icons/MaterialIcons';

const height = Dimensions.get('window').height;

export default function VideoDetail({route, navigation}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const {video} = route.params;
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <View style={share.container}>
      <View style={share.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={share.headline}>Uploaded Videos</Text>
      </View>
      <ScrollView>
        <View style={share.tabItem__container}>
          <View style={styles.video__detail_container}>
            <View style={styles.video__box}>
              <VideoPlayer
                source={{uri: video.videoURL}} // Can be a URL or a local file.
                ref={videoRef} // Store reference
                style={styles.item__video}
                resizeMode="cover"
                paused={!isPlaying}
                disableBack
                disablePlayPause
                disableFullscreen
              />
            </View>
            <View style={styles.control__container}>
              <Text style={styles.video__status}>
                {isPlaying ? 'Playing' : 'Paused'}
              </Text>
              <View style={styles.control__list}>
                <TouchableOpacity
                  style={[styles.control__btn, share.shadow]}
                  onPress={handlePlayPause}>
                  <View style={styles.btn__title}>
                    {isPlaying ? (
                      <Icon name="pause" style={styles.btn__icon} />
                    ) : (
                      <Icon name="play-arrow" style={styles.btn__icon} />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.video__content}>
              <View style={styles.video__headline}>
                <View style={styles.video__detail}>
                  <Text style={styles.title}>Title:</Text>
                  <Text style={styles.content}>{video.videoTitle}</Text>
                </View>
                <View style={styles.video__detail}>
                  <Text style={styles.title}>Date:</Text>
                  <Text style={styles.content}>{video.videoDate}</Text>
                </View>
              </View>
              <View style={styles.video__detail}>
                <Text style={styles.title}>Student's note:</Text>
                <Text style={styles.long__content}>{video.videoNote}</Text>
              </View>
              <View style={styles.video__detail}>
                <Text style={styles.title}>Teacher's reviews:</Text>
                <Text style={styles.long__content}>{video.teacherReview}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  video__box: {
    position: 'relative',
    width: '100%',
    height: height * 0.3,
  },
  control__container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  video__status: {
    color: '#000',
    fontSize: height * 0.02,
    paddingVertical: height * 0.01,
  },
  control__btn: {
    width: height * 0.055,
    height: height * 0.055,
    backgroundColor: share.colors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn__icon: {
    color: '#FFF',
    fontSize: height * 0.04,
  },
  item__video: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    borderRadius: height * 0.005,
  },
  video__detail_container: {
    gap: 20,
    paddingBottom: height * 0.2,
  },
  video__content: {
    gap: 20,
    width: '100%',
  },
  video__headline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  video__detail: {
    gap: 10,
  },
  title: {
    fontWeight: '900',
    fontSize: height * 0.02,
    color: '#000',
  },
  content: {
    color: '#000',
  },
  long__content: {
    backgroundColor: '#FFF',
    padding: height * 0.02,
    borderRadius: 5,
    fontSize: height * 0.015,
    lineHeight: height * 0.03,
    color: '#000',
  },
});
