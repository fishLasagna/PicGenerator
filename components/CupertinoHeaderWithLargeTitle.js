import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, BackHandler} from "react-native";
import Icon from '../node_modules/react-native-vector-icons/Ionicons';


function CupertinoHeaderWithLargeTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.header}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}>
           <Icon name="arrow-back" style={styles.leftIcon}
            onPress={() => BackHandler.exitApp()}></Icon>
            <Text style={styles.leftText}
            onPress={() => BackHandler.exitApp()}
            >Back</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          Discord pic generator
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,1)",
    paddingRight: 8,
    paddingLeft: 8
  },
  header: {
    width: 359,
    height: 44,
    flexDirection: "row"
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#007AFF",
    fontSize: 32
  },
  leftText: {
    fontSize: 17,
    color: "#007AFF",
    paddingLeft: 5,
    alignSelf: "center"
  },
  textWrapper: {
    height: 52,
    paddingLeft: 5,
    justifyContent: "center"
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
    color: "rgba(144,19,254,1)"
  }
});

export default CupertinoHeaderWithLargeTitle;
