import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import share from '../../../../assets/global/styleShare';
import BackArrow from '../../../../assets/global/BackArrow';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import Icon from 'react-native-vector-icons/MaterialIcons';

const height = Dimensions.get('window').height;

export default function CourseDetail({navigation, route}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const {course} = route.params;
  return (
    <View
      style={{
        position: 'relative',
        backgroundColor: '#F0F0F0',
        width: '100%',
        height: '100%',
      }}>
      <View style={styles.csdetail__image_box}>
        <Image
          source={{uri: course.courseThumbnail}}
          style={styles.csdetail__image}
        />
        <View style={styles.csdetail__layer}></View>
      </View>
      <View>
        <View style={[share.header, {paddingBottom: height * 0.2}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={share.headline}>Course Detail</Text>
        </View>
        <View style={[styles.csdetail__info]}>
          <View style={[styles.csdetail__info_content, share.shadow]}>
            <Text style={styles.csdetail__name}>{course.courseName}</Text>
            <Text style={styles.csdetail__level}>{course.courseLevel}</Text>
          </View>
        </View>
        <ScrollView>
          <View style={[share.tabItem__container]}>
            <View style={styles.csdetail__container}>
              <View style={styles.csdetail__video_box}>
                <VideoPlayer
                  source={{uri: course.courseVideo}} // Can be a URL or a local file.
                  ref={videoRef} // Store reference
                  resizeMode="cover"
                  paused={!isPlaying}
                  disableBack
                  disablePlayPause
                  disableFullscreen
                  style={styles.csdetail__video}
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
              <View style={styles.csdetail__list}>
                {course.courseContent.map(cscontent => (
                  <View key={cscontent.contentID} style={styles.csdetail__item}>
                    <Text style={styles.csdetail__title}>
                      {cscontent.contentTitle}
                    </Text>
                    <Text style={styles.csdetail__text}>
                      {cscontent.contentText}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  csdetail__container: {
    width: '100%',
    paddingBottom: height * 0.35,
    marginTop: height * 0.08,
  },
  csdetail__image_box: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: height * 0.3,
  },
  csdetail__image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  csdetail__layer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    opacity: 0.5,
  },
  csdetail__info: {
    position: 'absolute',
    top: height * 0.25,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  csdetail__info_content: {
    width: '80%',
    backgroundColor: '#FFF',
    paddingHorizontal: height * 0.03,
    paddingVertical: height * 0.01,
    borderRadius: 10,
    gap: 20,
  },
  csdetail__name: {
    fontSize: height * 0.03,
    fontWeight: '900',
    color: '#000',
  },
  csdetail__level: {
    fontSize: height * 0.02,
    textAlign: 'right',
    color: share.colors.main,
  },
  csdetail__video_box: {
    width: '100%',
    height: height * 0.3,
  },
  csdetail__video: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
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
  csdetail__list: {
    marginTop: height * 0.05,
  },
  csdetail__item: {
    paddingVertical: height * 0.015,
  },
  csdetail__title: {
    fontSize: height * 0.02,
    fontWeight: '600',
    color: share.colors.main,
  },
  csdetail__text: {
    paddingVertical: height * 0.01,
    lineHeight: height * 0.025,
    color: '#000',
  },
});
