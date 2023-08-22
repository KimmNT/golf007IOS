import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

//ICON
import Icon from "react-native-vector-icons/MaterialIcons";

//STYLE
import share from "./styleShare";

const height = Dimensions.get("window").height;

export default function BackArrow() {
  return (
    <View style={styles.arrow__container}>
      <Icon name="chevron-left" style={styles.arrow__icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  arrow__container: {
    width: height * 0.05,
    height: height * 0.05,
    backgroundColor: share.colors.main,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: height * (0.05 / 2),
  },
  arrow__icon: {
    fontSize: height * 0.04,
    color: "#FFF",
  },
});
