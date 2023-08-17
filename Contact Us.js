import {
  PermissionsAndroid, Platform,
  ScrollView, Image, Text,
  View, ImageBackground, TouchableOpacity, FlatList,StyleSheet
} from 'react-native';
import { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Button } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import { CameraRoll, useCameraRoll } from "@react-native-camera-roll/camera-roll";

const ContactUs = (props) => {
  const navigation = useNavigation();
  const videoRef = useRef(null);
  const [photos, getPhotos, save] = useCameraRoll();
  const [latestPhotoUri, setLatestPhotoUri] = useState('');
  const [data, Setdata] = useState("")
  const [open, SetOpen] = useState(false)
  const [paused, setPaused] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const handleVideoLoad = (data) => {
    setPaused(false);
    }
    const handleVideoProgress = (data) => {
     

      // Check if the current time of the video exceeds 30 seconds
      if (data.currentTime >= 4) {
        // setPaused(true);
        setCurrentTime(data.currentTime);
      }
  
      }
    const hasAndroidPermission = async () => {
    const permission = Platform.Version >= 33 ?
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES :
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO;
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  async function savePicture() {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      return;
    }

    CameraRoll.save(tag, { type, album })
  };

  useEffect(() => {
    hasAndroidPermission();
  })
  
  const openGallery = async () => {
    CameraRoll.getPhotos({
      first: 6,
      assetType: "Photos",
      // assetType:  "Video",
    })
      .then((data) => {
        // Setdata(JSON.stringify({ photos: r.edges }))
        // console.log("sssss", data.edges);
        const assets = data.edges;
        const video = assets.map((asset) => asset.node.image);
        // const video = assets.map((asset) => asset.node.video);

        console.log("video", video)

        setLatestPhotoUri({
          isCameraLoaded: true,
          // images: images,
          video: video
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const openGallery1 = async () => {
    CameraRoll.getPhotos({
      first: 6,
      assetType: "Videos",
      // groupName:"getAlbum",
      ...(Platform.OS == "android" && { include: ['fileSize',"filename","playableDuration",] }),})
      .then((data) => {
        // Setdata(JSON.stringify({ photos: r.edges }))
        // console.log("sssss", data.edges);
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        // const video1 = assets.map((asset) => asset.node.playableDuration.toFixed(30));

        console.log("images", images)
        // console.log("video1", playableDuration.toFixed(30))
        Setdata({
          isCameraLoaded: true,
          images: images,
          // video1: playableDuration.toFixed(30)
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderItem1 = ({ item, index }) => {
    return (
      <View key={index} style={{
        justifyContent: "center", alignItems: "center",
        marginHorizontal: 11, marginTop: 10
      }}>
        <TouchableOpacity onPress={() => SetOpen(!open)}>
        <Video
          ref={videoRef}
          source={{ uri: item.uri }}
          resizeMode='cover'
          // repeat={true}
          paused={paused}
          muted={true}
          // playWhenInactive={true}
          onLoad={handleVideoLoad}
          onProgress={handleVideoProgress}
          controls={true}
          style={{
            width: 100,
            height: 100,
            marginLeft: 10,
            marginTop: 10,
            borderRadius: 10,
          }}
         />
        </TouchableOpacity>
       
        <Text
          style={{
            textAlign:
              'center',
            overflow: "hidden",
            color: 'white',
            position:"absolute",
            bottom:5,
            left:10
          }}
        > {formatDuration(item.playableDuration)}
        </Text>


      </View>
    )
  }
  const renderItem2 = ({ item, index }) => {
    return (
      <View key={index} style={{
        justifyContent: "center", alignItems: "center",
        marginHorizontal: 18, marginTop: 10
      }}>
        <TouchableOpacity>
          <Image style={{
            width: 100, height: 100, marginTop: 10,
            borderRadius: 10
          }} source={{ uri: item.uri }}
            controls={true} />

        </TouchableOpacity>

      </View>
    )
  }
  const formatDuration = (durationInSeconds) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };
  return (
    <ImageBackground style={{ flex: 1, }}
      source={require('../google/main_bg.png')}
      resizeMode={'cover'}>
      <TouchableOpacity onPress={() => { navigation.openDrawer() }}
        style={{
          justifyContent: "flex-start", alignItems:
            "flex-start", marginHorizontal: 20, marginTop: 20
        }}>
        <Image source={require('../google/menu.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        openGallery();
        openGallery1()
      }}>
        <Text style={{ color: "white", textAlign: "center", fontSize: 40 }} >
          Camera Roll
        </Text>
      </TouchableOpacity>
      <View style={{ marginBottom: 180 }}>
        <FlatList
          data={latestPhotoUri.video}
          numColumns={3}
          renderItem={renderItem2}
        />
        <View style={{ marginTop: 10 }}>
          <FlatList
            data={data.images}
            numColumns={3}
            renderItem={renderItem1} />
        </View>
       </View>
</ImageBackground>
  )
}
export default ContactUs
const styles = StyleSheet.create({
  Videoclose: {
    flex: 1,

  },
  VideOpen: {
    flex: 1,

  },
})



