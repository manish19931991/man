import * as React from 'react';
import { Button, View, Text, SafeAreaView, TouchableOpacity,Image,ImageBackground, BackHandler } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import VideoPlayer from 'react-native-video-controls';
const Settings = (props) => {
    const navigation = useNavigation();
    const goback = () => {
     props.navigation.navigate("Home")
    }
 return (
  // <View style={{flex:1,marginBottom:74}}>
  //    <VideoPlayer
  //     source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
  //     onBack={goback}      
  //     // onShowControls={true} 
  //     />
  //   </View>
        <ImageBackground style={{flex:1,}}
   
        source={require('../google/main_bg.png')}
        resizeMode={'cover'}>
         <TouchableOpacity onPress={() =>  { navigation.openDrawer() } }
        style={{justifyContent:"flex-start",alignItems:"flex-start",marginHorizontal:20,marginTop:20}}>
        <Image source={require('../google/menu.png')}/>
        </TouchableOpacity> 
       
       {/* <View style={{justifyContent:"center",alignItems:"center",marginTop:100}}> */}
       
       
        {/* </View> */}
       
      
      </ImageBackground>
    );
};

export default Settings;