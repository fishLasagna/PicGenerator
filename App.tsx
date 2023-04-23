import React, { Component, useEffect, useState} from "react";
import { StyleSheet, View, TextInput, Text, Image, Button, BackHandler, Keyboard, Platform, KeyboardAvoidingView, TouchableWithoutFeedback} from "react-native";
import CupertinoButtonPurple from "./components/CupertinoButtonPurple";
import CupertinoButtonPurple1 from "./components/CupertinoButtonPurple1";
import CupertinoButtonInfo1 from "./components/CupertinoButtonInfo1";
import CupertinoHeaderWithLargeTitle from "./components/CupertinoHeaderWithLargeTitle";
import LinearGradient from 'react-native-linear-gradient';

function App(): JSX.Element {
  const [posts, setPosts] = useState<any>();

  const fetchData = async function () {
   fetch('https://v1.api.amethyste.moe/generate/wasted', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    'Authorization': "a04af71fdc0bcfe01e5d9d33484931689a2385c2934ed15819981850cc0820388e756d77959e5a46981d3d05403cd85b3d6f8efa5b6ef1269d17959782417ae1"
  },
  credentials:"include",
  body: JSON.stringify({
    URL: 'https://2022663874-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Lq-hsTV9LcOr3EcyPiW%2F-LqK75WPPTNGQXi2yj18%2F-LqKAAvqJ9k-bh32JN_P%2F8d247948-cec9-4707-9548-4f92ce577de2-response.png?alt=media&token=23b4e40c-f9e0-4d0a-a4c9-4de96b98d963'
  }),
  
}).then((response) => response.arrayBuffer)

  }

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

       

    < View style={styles.container}>
    <View style={styles.rectColumn}>
      <View style={styles.rect}></View>
 


      <CupertinoButtonPurple
        style={styles.cupertinoButtonPurple}
      ></CupertinoButtonPurple>
   
 
      <CupertinoButtonPurple1
        style={styles.cupertinoButtonPurple1}
      >
        onPress={async () => { (await fetchData)()
  }}
 
      </CupertinoButtonPurple1>
 
 

      <View style={styles.placeholderRow}>
        <TextInput
          placeholder="enter email"
          placeholderTextColor={"white"}
          keyboardAppearance="default"
          style={styles.placeholder}
        ></TextInput>
        <CupertinoButtonInfo1
          style={styles.cupertinoButtonInfo1}
          
        ></CupertinoButtonInfo1>
       <View style={styles.rectColumnFiller}>
         <Image
           source={require("./images/black.jpg")}
           resizeMode="contain"
           style={styles.image}
         ></Image>
       </View>
       </View>
 
 
      <CupertinoHeaderWithLargeTitle
        style={styles.cupertinoHeaderWithLargeTitle}
      ></CupertinoHeaderWithLargeTitle>
      <Text style={styles.sendToEmail}>Send to email:</Text>
 
 
      
    </View>
 
 
 
  </View>
  </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  linearGradient: {

    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
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
    color: "white",
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
 
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  rectColumnFiller: {
    flex: 1,
    justifyContent: "center"
  },
inner: {
  //flex: 1,
}
});

export default App;
