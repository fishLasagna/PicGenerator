import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonPurple1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.generate}>Generate</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5856D6",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  generate: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonPurple1;
