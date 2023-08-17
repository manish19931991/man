import {
  View, Text, Image, ImageBackground,
  TouchableOpacity, StyleSheet,
  FlatList, ScrollView, TextInput
}
  from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Swiper from "react-native-swiper";
// import StatusBar from 'react-native-status-bar';
const data = [
  { id: 1, image: require("../google/image_eight.png"), },
  { id: 2, image: require("../google/image_eight.png"), },
  { id: 3, image: require("../google/image_eight.png"), },
  { id: 4, image: require("../google/image_eight.png"), },
  { id: 5, image: require("../google/image_eight.png"), },];
const data1 = [
  { id: 1, image: require("../google/image_ten.png"), },
  { id: 2, image: require("../google/image_ten.png"), },
  { id: 3, image: require("../google/image_ten.png"), },
  { id: 4, image: require("../google/image_ten.png"), },
  { id: 5, image: require("../google/image_ten.png"), },];
const data2 = [
  {
    id: 1, image: require("../google/image_twlv.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 2, image: require("../google/image_twlv.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 3, image: require("../google/image_twlv.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 4, image: require("../google/image_twlv.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 5, image: require("../google/image_twlv.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },];
const data3 = [
  {
    id: 1, image: require("../google/image_thrtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 2, image: require("../google/image_thrtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 3, image: require("../google/image_thrtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 4, image: require("../google/image_thrtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 5, image: require("../google/image_thrtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },];
const data4 = [
  {
    id: 1, image: require("../google/image_sixtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 2, image: require("../google/image_sixtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 3, image: require("../google/image_sixtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 4, image: require("../google/image_sixtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },
  {
    id: 5, image: require("../google/image_sixtn.png"),
    name: "See The Dead",
    desc: "Run The Race",
  },];
const data5 = [
  {
    id: 1, image: require("../google/user_man.png"),
    name: "Peter Gow",
    desc: "105 Stories",
  },
  {
    id: 2, image: require("../google/user_man.png"),
    name: "Peter Gow",
    desc: "105 Stories",
  },
  {
    id: 3, image: require("../google/user_man.png"),
    name: "Peter Gow",
    desc: "105 Stories",
  },
  {
    id: 4, image: require("../google/user_man.png"),
    name: "Peter Gow",
    desc: "105 Stories",
  },
  {
    id: 5, image: require("../google/user_man.png"),
    name: "Peter Gow",
    desc: "105 Stories",
  },];
const data6 = [
  {
    id: 1, image: require("../google/image_twlv.png"),
    name: "Joker",
    desc: "105 Stories",
  },
  {
    id: 2, image: require("../google/image_twlv.png"),
    name: "Joker",
    desc: "105 Stories",
  },
  {
    id: 3, image: require("../google/image_twlv.png"),
    name: "Joker",
    desc: "105 Stories",
  },
  {
    id: 4, image: require("../google/image_twlv.png"),
    name: "Joker",
    desc: "105 Stories",
  },
  {
    id: 5, image: require("../google/image_twlv.png"),
    name: "Joker",
    desc: "105 Stories",
  },];

const Home = (props) => {

const navigation = useNavigation();
const renderFeatureData = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={{
          marginHorizontal: 7,
          marginTop: 7, borderWidth: 1, 
          borderColor: "#3E4670", width: 100
        }}>
          <Image style={{ width: 98, height: 96 }} source={item.image} />
          <View style={{
            justifyContent: "center",
            alignItems: "center",
            top: 0, bottom: 0, right: 0, 
            left: 0, position: "absolute",
          }}>
            <Image source={require("../google/music_paly.png")}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{
              color: 'white',
              fontSize: 10, fontWeight: "600",
               marginHorizontal: 10,
              marginTop: 5, 
              marginBottom: 5, flex: 1,
              // position:"absolute",top:10
            }}
              numberOfLines={1} >
              Autumn lvy!
            </Text>
          </View>
        </TouchableOpacity>

      </>
    );
  };

  const renderFeatureData1 = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={{
          marginHorizontal: 7,
          marginTop: 7, borderWidth: 1, 
          borderColor: "#3E4670", width: 100
        }}>
          <Image style={{ width: 98, height: 96 }} 
          source={item.image} />
          <View style={{
            justifyContent: "center",
            alignItems: "center",
            top: 0, bottom: 0, right: 0, 
            left: 0, position: "absolute"
          }}>
            <Image source={require("../google/music_paly.png")}
            />
          </View>
          <Text style={{
            color: 'white', fontSize: 10, 
            fontWeight: "600",
            flex: 1, marginHorizontal: 10, 
            marginTop: 5, marginBottom: 5
          }} numberOfLines={1}>
            Autumn lvy!
          </Text>
        </TouchableOpacity>
      </>
    );
  };
  const renderFeatureData2 = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={{ marginHorizontal: 7,
           marginTop: 7 }}>
          <Image style={{ width: 98, height: 131 }} 
          source={item.image} />
          <View style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: 10,
            top: 10,
          }}>
            <Image style={styles.loveImage} 
            source={require("../google/fill_heart.png")}
            />
          </View>
          <View style={{ position: "absolute", bottom: 10, }}>
            <Text style={{
              color: 'white', fontSize: 12,
               fontWeight: "500",
              flex: 1, marginHorizontal: 3
            }} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={{
              color: 'white', fontSize: 10, 
              fontWeight: "600",
              flex: 1, marginHorizontal: 3
            }} numberOfLines={1}>
              {item.desc}
            </Text>
          </View>

        </TouchableOpacity>


      </>
    );
  };
  const renderFeatureData3 = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={{ marginHorizontal: 7,
           marginTop: 7 }}>
          <Image style={{ width: 98, height: 131 }} 
          source={item.image} />
          <View style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: 10,
            top: 10,
          }}>
            <Image style={styles.loveImage} 
            source={require("../google/fill_heart.png")}
            />
          </View>
          <View style={{ position: "absolute", bottom: 10, }}>
            <Text style={{
              color: 'white', fontSize: 12, fontWeight: "500",
              flex: 1, marginHorizontal: 3
            }} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={{
              color: 'white', fontSize: 10, fontWeight: "600",
              flex: 1, marginHorizontal: 3
            }} numberOfLines={1}>
              {item.desc}
            </Text>
          </View>

        </TouchableOpacity>


      </>
    );
  };
  const renderFeatureData4 = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={{ marginHorizontal: 7,
           marginTop: 7 }}>
          <Image style={{ width: 98, height: 131 }} 
          source={item.image} />
          <View style={{
            position: "absolute",
            alignSelf: "flex-end",
            right: 10,
            top: 10,
          }}>
            <Image style={styles.loveImage} source={require("../google/fill_heart.png")}
            />
          </View>
          <View style={{ position: "absolute", 
          bottom: 10, }}>
            <Text style={{
              color: 'white', fontSize: 12, fontWeight: "500",
              flex: 1, marginHorizontal: 3
            }} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={{
              color: 'white', fontSize: 10, fontWeight: "600",
              flex: 1, marginHorizontal: 3
            }} numberOfLines={1}>
              {item.desc}
            </Text>
          </View>

        </TouchableOpacity>


      </>
    );
  };
  const renderFeatureData5 = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={{ marginHorizontal: 7, 
          marginTop: 7, width: 90 }}>
          <Image style={{ width: 90, height: 90 }} 
          source={item.image} />

          <Text style={{
            color: 'white',
            fontSize: 10, fontWeight: "600",
             textAlign: "center", flex: 1
            // position:"absolute",top:10
          }}
            numberOfLines={1}    >
            {item.name}
          </Text>
          <Text style={{
            color: 'blue',
            fontSize: 10, fontWeight: "600", 
            textAlign: "center", marginHorizontal: 10, flex: 1
            // position:"absolute",top:10
          }}
            numberOfLines={1}    >
            {item.desc}
          </Text>


        </TouchableOpacity>
      </>
    );
  };
  const renderFeatureData6 = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={{
          justifyContent: "space-around",
           marginHorizontal: 5, marginTop: 10,
          flexDirection: "row",
          width: 140, height: 56,
          borderWidth: 1, borderColor: "#3E4670",
           borderRadius: 5,backgroundColor:"#000125"
        }}>
          <Image style={{ width: 43, height: 43,
           alignSelf: "center", }} 
          source={require("../google/image_four.png")} />
          <View style={{ marginTop: 7, width: 70 }}>
            <Text style={{
              color: "white", fontSize: 12, fontWeight: 500
            }} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={{
              color: "blue", fontSize: 10, fontWeight: 500,
            }} numberOfLines={1}>
              {item.desc}
            </Text>
          </View>

        </TouchableOpacity>
      </>
    );
  };

  return (
    <ImageBackground style={{ flex: 1, }}

      source={require('../google/main_bg.png')}
      resizeMode={'cover'}>
      <View style={{ flexDirection: "row", 
      marginTop: 25, marginHorizontal: 10 }}>
        <TouchableOpacity onPress={() => { navigation.openDrawer() }}
          style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Image style={{ width: 25, height: 25 }}
           resizeMode={"contain"}
          source={require('../google/menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex:1,  borderWidth: 1,
          borderColor: "#3E4670",
          height: 40,
          width: "90%", borderRadius: 20,
          flexDirection: "row",}}
          onPress={() => navigation.navigate("AboutUs")}>
       
          <View style={{ alignSelf: "center",
           marginHorizontal: 5 }}>
            <Image style={{
              width: 20, height: 20,
            }} source={require('../google/search.png')} />
          </View>
           <View style={{marginTop:7,flex:1,}}>
           <Text style={{ color: "white",
           textAlign:"center",flex:1, }} 
           numberOfLines={1}>
            Search Playlist, Author, Horror
            </Text>
           </View>
         
        
          </TouchableOpacity>

        <TouchableOpacity
          style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Image style={{ width: 25, height: 25 }} 
          source={require('../google/Notification_red.png')} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {/* <View style={{ height: 365 }}> */}
        <Swiper style={styles.wrapperone}
          autoplay
          showsButtons={false}
          dot={<View style={styles.dot_view} />}
          activeDot={<View style={styles.active_view} />}
        >

          <View style={{
            //  flex:1
          }}>
            <Image style={styles.profile_img} resizeMode="contain"
              source={require("../google/image_six.png")} />
            <View style={{
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0, right: 0, bottom: 0, left: 0
            }}>
              <TouchableOpacity onPress={() => navigation.navigate("Video1")}>
                <Image style={styles.profile1_img} resizeMode="contain"
                  source={require("../google/music_paly.png")} />
              </TouchableOpacity>
              <View style={{ marginHorizontal: 50, 
                justifyContent: "center", 
                alignItems: "center" }}>
                <Text style={{
                  color: "white",
                  fontSize: 16, fontWeight: "400", alignSelf: "center",
                  marginTop: 15
                }} numberOfLines={1}>
                  The Scaredy Cats
                </Text>
                <Text style={{
                  color: "white",
                  fontSize: 24, fontWeight: "600", alignSelf: "center"
                }} numberOfLines={1}>
                  Horror Shows
                </Text>
              </View>

            </View>
          </View>
          {/* </ImageBackground> */}
         <View style={{
            // flex:1
          }}>
            <Image style={styles.profile_img} resizeMode="contain"
              source={require("../google/image_six.png")} />

            <View style={{
              justifyContent: "center",
              alignItems: "center", position: "absolute", top: 0, right: 0, bottom: 0, left: 0
            }}>
              <TouchableOpacity onPress={() => navigation.navigate("Video1")}>
                <Image style={styles.profile1_img} resizeMode="contain"
                  source={require("../google/music_paly.png")} />
              </TouchableOpacity>

              <View style={{ marginHorizontal: 50,
                 justifyContent: "center", 
                 alignItems: "center" }}>
                <Text style={{
                  color: "white",
                  fontSize: 16, fontWeight: "400", alignSelf: "center",
                  marginTop: 15
                }} numberOfLines={1}>
                  The Scaredy Cats
                </Text>
                <Text style={{
                  color: "white",
                  fontSize: 24, fontWeight: "600", alignSelf: "center"
                }} numberOfLines={1}>
                  Horror Shows
                </Text>
              </View>
            </View>

          </View>
          <View style={{
            // flex:1
          }}>
            <Image style={styles.profile_img} resizeMode="contain"
              source={require("../google/image_six.png")} />

            <View style={{
              justifyContent: "center",
              alignItems: "center", 
              position: "absolute", 
              top: 0, right: 0, 
              bottom: 0, left: 0
            }}>
              <TouchableOpacity onPress={() => navigation.navigate("Video1")}>
                <Image style={styles.profile1_img} resizeMode="contain"
                  source={require("../google/music_paly.png")} />
              </TouchableOpacity>

              <View style={{ marginHorizontal: 50,
                 justifyContent: "center",
                  alignItems: "center" }}>
                <Text style={{
                  color: "white",
                  fontSize: 16, fontWeight: "400", alignSelf: "center",
                  marginTop: 15
                }} numberOfLines={1}>
                  The Scaredy Cats
                </Text>
                <Text style={{
                  color: "white",
                  fontSize: 24, 
                  fontWeight: "600", 
                  alignSelf: "center"
                }} numberOfLines={1}>
                  Horror Shows
                </Text>
              </View>
            </View>

          </View>
          <View style={{
            // flex:1
          }}>
            <Image style={styles.profile_img} resizeMode="contain"
              source={require("../google/image_six.png")} />

            <View style={{
              justifyContent: "center",
              alignItems: "center",
               position: "absolute", 
               top: 0, right: 0, bottom: 0, 
               left: 0
            }}>
              <TouchableOpacity onPress={() => navigation.navigate("Video1")}>
                <Image style={styles.profile1_img} resizeMode="contain"
                  source={require("../google/music_paly.png")} />
              </TouchableOpacity>
              <View style={{ marginHorizontal: 50, 
                justifyContent: "center", 
                alignItems: "center" }}>
                <Text style={{
                  color: "white",
                  fontSize: 16, fontWeight: "400", alignSelf: "center",
                  marginTop: 15
                }} numberOfLines={1}>
                  The Scaredy Cats
                </Text>
                <Text style={{
                  color: "white",
                  fontSize: 24, fontWeight: "600", alignSelf: "center"
                }} numberOfLines={1}>
                  Horror Shows
                </Text>
              </View>
            </View>

          </View>



          <View style={{
            // flex:1
          }}>
            <Image style={styles.profile_img} resizeMode="contain"
              source={require("../google/image_six.png")} />

            <View style={{
              justifyContent: "center",
              alignItems: "center",
               position: "absolute", 
               top: 0, 
               right: 0, 
               bottom: 0, left: 0
            }}>
              <TouchableOpacity onPress={() => navigation.navigate("Video1")}>
                <Image style={styles.profile1_img} resizeMode="contain"
                  source={require("../google/music_paly.png")} />
              </TouchableOpacity>

              <View style={{ marginHorizontal: 50,
                 justifyContent: "center", 
                 alignItems: "center" }}>
                <Text style={{
                  color: "white",
                  fontSize: 16, 
                  fontWeight: "400", 
                  alignSelf: "center",
                  marginTop: 15
                }} numberOfLines={1}>
                  The Scaredy Cats
                </Text>
                <Text style={{
                  color: "white",
                  fontSize: 24, fontWeight: "600", alignSelf: "center"
                }} numberOfLines={1}>
                  Horror Shows
                </Text>
              </View>
            </View>
          </View>
          {/* </ImageBackground> */}

        </Swiper>

        {/* </View> */}
        <View style={{ flexDirection: "row", marginHorizontal: 24, }}>
          <Text style={{ color: "white", 
          fontSize: 14, fontWeight: "600", }} numberOfLines={1}>
            Continue listen
          </Text>
          <View style={{ marginHorizontal: 7 }}>
            <Image style={{
              width: 10,
              height: 18,
            }} resizeMode="contain" source={require("../google/next_arrow.png")} />
          </View>
        </View>
        {/* <View style={{marginBottom:490}}> */}
        <View style={{ marginHorizontal: 20, flex: 1 }}>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={renderFeatureData}
          />
        </View>
        <View style={{ flexDirection: "row", 
        marginHorizontal: 24, marginTop: 20 }}>
          <Text style={{ color: "white", 
          fontSize: 14, fontWeight: "600", }} numberOfLines={1}>
            Recent Watched 

          </Text>
          <View style={{ marginHorizontal: 7 }}>
            <Image style={{
              width: 10,
              height: 18,
            }} resizeMode="contain" source={require("../google/next_arrow.png")} />
          </View>
        </View>
        {/* <View style={{marginBottom:490}}> */}
        <View style={{ marginHorizontal: 20 }}>
          <FlatList
            data={data1}
            horizontal={true}
            renderItem={renderFeatureData1}
          />
        </View>
        <View style={{ flexDirection: "row",
         marginHorizontal: 24, marginTop: 20 }}>
          <Text style={{ color: "white", 
          fontSize: 14, fontWeight: "600",}} numberOfLines={1}>
            Feature
          </Text>
          <View style={{ marginHorizontal: 7 }}>
            <Image style={{
              width: 10,
              height: 18,
            }} resizeMode="contain" source={require("../google/next_arrow.png")} />
          </View>
        </View>
        {/* <View style={{marginBottom:490}}> */}
        <View style={{ marginHorizontal: 20 }}>
          <FlatList
            data={data2}
            horizontal={true}
            renderItem={renderFeatureData2}
          />
        </View>
        <View style={{ flexDirection: "row", 
        marginHorizontal: 24, 
        marginTop: 20 }} numberOfLines={1}>
          <Text style={{ color: "white",
           fontSize: 14, fontWeight: "600", }} numberOfLines={1}>
            New Series
          </Text>
          <View style={{ marginHorizontal: 7 }}>
            <Image style={{
              width: 10,
              height: 18,
            }} resizeMode="contain" source={require("../google/next_arrow.png")} />
          </View>
        </View>
        {/* <View style={{marginBottom:490}}> */}
        <View style={{ marginHorizontal: 20 }}>
          <FlatList
            data={data3}
            horizontal={true}
            renderItem={renderFeatureData3}
          />
        </View>
        <View style={{ flexDirection: "row", 
        marginHorizontal: 24, 
        marginTop: 20 }} numberOfLines={1}>
          <Text style={{ color: "white", 
          fontSize: 14, 
          fontWeight: "600", }} numberOfLines={1}>
            Popular
          </Text>
          <View style={{ marginHorizontal: 7 }}>
            <Image style={{
              width: 10,
              height: 18,
            }} resizeMode="contain" source={require("../google/next_arrow.png")} />
          </View>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <FlatList
            data={data4}
            horizontal={true}
            renderItem={renderFeatureData4}
          />
        </View>
        <View style={{ flexDirection: "row", 
        marginHorizontal: 24,
         marginTop: 20 }} numberOfLines={1}>
          <Text style={{ color: "white",
           fontSize: 14, 
           fontWeight: "600", }} numberOfLines={1}>
            Authors
          </Text>
          <View style={{ marginHorizontal: 7 }}>
            <Image style={{
              width: 10,
              height: 18,
            }} resizeMode="contain" source={require("../google/next_arrow.png")} />
          </View>
        </View>
        {/* <View style={{marginBottom:490}}> */}
        <View style={{ marginHorizontal: 20 }}>
          <FlatList
            data={data5}
            horizontal={true}
            renderItem={renderFeatureData5}
          />
        </View>
        <View style={{ flexDirection: "row",
         marginHorizontal: 24,
          marginTop: 20 }} numberOfLines={1}>
          <Text style={{ color: "white", 
          fontSize: 14, fontWeight: "600", }} numberOfLines={1}>
            Narrator
          </Text>
          <View style={{ marginHorizontal: 7 }}>
            <Image style={{
              width: 10,
              height: 18,
            }} resizeMode="contain" source={require("../google/next_arrow.png")} />
          </View>
        </View>
        {/* <View style={{marginBottom:490}}> */}
        <View style={{ marginHorizontal: 20, flex: 1 }}>
          <FlatList
            data={data6}
            horizontal={true}
            renderItem={renderFeatureData6}
          />
        </View>
        <View style={{ marginBottom: 90 }}>
        </View>

      </ScrollView>
    </ImageBackground>
  )
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  profile_img: {
    // flex:1,
    height: 200,
    width: 330,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 40,
  },
  profile1_img: {
    // flex:1,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  dot_view: {
    backgroundColor: "gray",
    width: 10,
    height: 10,
    borderRadius: 10,
    margin: 5,

  },
  active_view: {
    backgroundColor: "blue",
    width: 29,
    height: 10,
    borderRadius: 10,
    margin: 5,

  },
  wrapperone: {
    height: 260,
    marginTop: 30,
      // flex: 1,
      // marginHorizontal:24

  },
 
  flatcontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 70
  },
  featuremapView: {
    marginBottom: 15,
    width: "46%",
    marginHorizontal: 7,
    marginVertical: 10,

  },
  featureViewImage: {
    height: 50,
    width: "50%",
    flex: 1
  },
  flatView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 22,
    marginBottom: 40
  },
  featurenameText: {
    // fontSize: font.SIZE_16,
    // fontFamily: font.Poppins_SemiBold,
    // color: Colors.PALE_FREY,
    marginTop: 145,
    marginHorizontal: 15,
  },
  featuredescText: {
    // fontSize: font.SIZE_10,
    // fontFamily: font.Poppins_Regular,
    // color: Colors.PALE_FREY,
    marginHorizontal: 15,
  },
  loveImage: {
    height: 13,
    width: 15,
  },
  imageloveView: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 10,
    top: 10,
  },
  dotView: {
    position: "absolute",
    top: 10,
    left: 6,
  },
  dotImage: {
    height: 25,
    width: 23,
  },
  discTool: {
    position: "absolute",
    left: 95,
  },
  text_delete: {
    // fontFamily: font.Poppins_Medium,
    // fontSize: font.SIZE_14,
    // color: Colors.ALABASTER,
    marginLeft: 14,
  },
  borderOne_view: {
    // backgroundColor: Colors.DUSKY_BLUE,
    height: 1,
    marginVertical: 12,
    marginHorizontal: -8,
  },
  touchImg: {
    height: 21,
    width: 21,
    marginRight: 25
  },
  searchView: {
    flexDirection: "row",
    height: 50,
    marginBottom: 20,
    borderWidth: 1,
    // borderColor: Colors.MULLED_WINE,
    borderRadius: 25,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: 10
  },
  searchText: {
    flex: 1,
    // fontSize: font.SIZE_16,
    // fontFamily: font.Poppins_Regular,
    // color: Colors.WHITE,
    marginLeft: 15,
  },
})
