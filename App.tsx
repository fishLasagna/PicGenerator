import React, { Component, useEffect, useState} from "react";
import { StyleSheet, View, TextInput, Text, Image, Button, BackHandler, Keyboard, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import CupertinoButtonPurple from "./components/CupertinoButtonPurple";
import CupertinoButtonPurple1 from "./components/CupertinoButtonPurple1";
import CupertinoButtonInfo1 from "./components/CupertinoButtonInfo1";
import CupertinoHeaderWithLargeTitle from "./components/CupertinoHeaderWithLargeTitle";
import LinearGradient from 'react-native-linear-gradient';
import RNFetchBlob from "rn-fetch-blob";


function App(): JSX.Element {
  const [posts, setPosts] = useState<any>();
  const [image, setImage] = useState<string>();

  const fetchData = async function () {
    RNFetchBlob.fetch("POST",'https://v1.api.amethyste.moe/generate/wasted', 
   {
    "Accept": 'application/json',
    'content-type': 'application/json',
    'Authorization': "Bearer a04af71fdc0bcfe01e5d9d33484931689a2385c2934ed15819981850cc0820388e756d77959e5a46981d3d05403cd85b3d6f8efa5b6ef1269d17959782417ae1"
  },
  JSON.stringify({
    url: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'
  })).then((response) => {
  let base64Str = response.data;
  var imageBase64 = 'data:'+'png'+';base64,'+base64Str;
  setImage(imageBase64)
  // Return base64 image
})

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
 

      <Button
  //style={styles.cupertinoButtonPurple1}
  onPress={() => fetchData()}
  title="aa"
      />
 

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

       </View>
       </View>
       <Image
           source={{uri: image ?? ""}}
           resizeMode="contain"
           style={styles.image}
         ></Image>
 
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
    //marginTop: 708,
    //marginLeft: 442
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
    //marginTop: -538,
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
   // marginTop: 359,
    marginLeft: 15,
    marginRight: 209
  },
  cupertinoHeaderWithLargeTitle: {
    height: 114,
    width: 400,
   // marginTop: -593
  },
  sendToEmail: {
    fontFamily: "roboto-700",
    color: "rgba(144,19,254,1)",
    fontSize: 17,
   // marginTop: 404,
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
   // marginTop: 300,
    //backgroundColor: "red"
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
    //flex: 1,
    justifyContent: "center"
  },
inner: {
  //flex: 1,
}
});

export default App;
