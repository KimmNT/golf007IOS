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
import React from 'react';

const height = Dimensions.get('window').height;
import courseData from '../../../databases/courses.json';
import share from '../../../assets/global/styleShare';

export default function Course({navigation}) {
  const navigateToDetail = course => {
    navigation.navigate('CourseDetail', {course});
  };
  return (
    <View style={share.container}>
      {/* <SafeAreaView> */}
      <View style={share.header}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity> */}
        <Text style={share.headline}>All Courses</Text>
      </View>
      <ScrollView>
        <View style={share.tabItem__container}>
          <View style={share.thumbnail}>
            <Text style={share.thumbnail__text}>To be a better</Text>
            <Text style={share.thumbnail__text_highlight}>Golfer</Text>
          </View>
          <View style={styles.course__list}>
            {courseData.courses.map(course => (
              <TouchableOpacity
                style={[styles.course__item, share.shadow]}
                key={course.courseID}
                onPress={() => navigateToDetail(course)}>
                <View style={styles.image__box}>
                  <Image
                    source={{uri: course.courseThumbnail}}
                    style={styles.image}
                  />
                </View>
                <View style={styles.item__content}>
                  <Text style={styles.item__title}>{course.courseName}</Text>
                  <Text style={styles.item__day}>{course.courseLevel}</Text>
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
  course__list: {
    gap: 20,
    paddingBottom: height * 0.1,
    width: '100%',
  },
  course__item: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: height * 0.01,
    borderRadius: height * 0.005,
    gap: 10,
    width: '100%',
  },
  image__box: {
    position: 'relative',
    width: 140,
    height: 100,
  },
  image: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    borderRadius: height * 0.005,
  },
  item__content: {
    gap: 10,
    width: '100%',
  },
  item__title: {
    // fontWeight: 900,
    fontSize: height * 0.02,
    width: '50%',
    color: '#000',
  },
  item__day: {
    color: share.colors.main,
  },
});
