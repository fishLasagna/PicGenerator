import React, { Component} from "react";
import { StyleSheet, View, TextInput, Text, Image, Button, BackHandler} from "react-native";
import CupertinoButtonPurple from "./components/CupertinoButtonPurple";
import CupertinoButtonPurple1 from "./components/CupertinoButtonPurple1";
import CupertinoButtonInfo1 from "./components/CupertinoButtonInfo1";
import CupertinoHeaderWithLargeTitle from "./components/CupertinoHeaderWithLargeTitle";

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.rectColumn}>
        <View style={styles.rect}></View>
        <CupertinoButtonPurple
          style={styles.cupertinoButtonPurple}
        ></CupertinoButtonPurple>
        <CupertinoButtonPurple1
          style={styles.cupertinoButtonPurple1}
        ></CupertinoButtonPurple1>
        <View style={styles.placeholderRow}>
          <TextInput
            placeholder="enter email"
            keyboardAppearance="default"
            style={styles.placeholder}
          ></TextInput>
          <CupertinoButtonInfo1
            style={styles.cupertinoButtonInfo1}
            
          ></CupertinoButtonInfo1>
        </View>
        <CupertinoHeaderWithLargeTitle
          style={styles.cupertinoHeaderWithLargeTitle}
        ></CupertinoHeaderWithLargeTitle>
        <Text style={styles.sendToEmail}>Send to email:</Text>
      </View>
      <View style={styles.rectColumnFiller}>
        <Image
          source={require("./images/black.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect: {
    width: 100,
    height: 100,
    backgroundColor: "#E6E6E6",
    marginTop: 708,
    marginLeft: 442
  },
  cupertinoButtonPurple: {
    height: 44,
    width: 120,
    marginTop: -168,
    marginLeft: 137
  },
  cupertinoButtonPurple1: {
    height: 44,
    width: 110,
    marginTop: -538,
    marginLeft: 18
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 40,
    width: 214,
    backgroundColor: "rgba(14,14,14,1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)"
  },
  cupertinoButtonInfo1: {
    height: 44,
    width: 77,
    marginLeft: 40
  },
  placeholderRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 359,
    marginLeft: 15,
    marginRight: 209
  },
  cupertinoHeaderWithLargeTitle: {
    height: 114,
    width: 400,
    marginTop: -593
  },
  sendToEmail: {
    fontFamily: "roboto-700",
    color: "rgba(144,19,254,1)",
    fontSize: 17,
    marginTop: 404,
    marginLeft: 13
  },
  rectColumn: {
    marginTop: 33,
    marginLeft: -6,
    marginRight: -176
  },
  image: {
    width: 237,
    height: 218,
    marginLeft: 45,
    marginTop: 300
  },
  rectColumnFiller: {
    flex: 1,
    justifyContent: "center"
  }
});

export default App;
