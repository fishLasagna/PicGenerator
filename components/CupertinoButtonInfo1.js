import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonInfo1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.send}>Send</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  send: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonInfo1;
