import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import share from "./styleShare";

const height = Dimensions.get("window").height;

export default function Bag() {
  return (
    <View>
      <Icon name="local-mall" style={styles.bag} />
    </View>
  );
}

const styles = StyleSheet.create({
  //   bag__box: {
  //     position: "relative",
  //   },
  bag: {
    fontSize: height * 0.04,
    color: share.colors.highlight,
  },
  //   item__count: {
  //     position: "absolute",
  //     top: height * -0.007,
  //     right: height * -0.007,
  //     width: height * 0.025,
  //     height: height * 0.025,
  //     borderRadius: (height * 0.025) / 2,
  //     backgroundColor: share.colors.main,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   counting: {
  //     color: "#FFF",
  //     fontSize: height * 0.012,
  //   },
});
