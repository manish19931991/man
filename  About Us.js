import {
  View, Text, FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Keyboard, StatusBar, Button,
  TextInput,
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from 'react';
// import { } from 'react-native';

const AboutUs = (props) => {
  const navigation = useNavigation();
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const searchInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const data = [
    {
      id: 1, image: require("../google/user_man.png"),
      name: "Amar",
      desc: "105 Stories",
    },
    {
      id: 2, image: require("../google/user_man.png"),
      name: "Rohit",
      desc: "105 Stories",
    },
    {
      id: 3, image: require("../google/user_man.png"),
      name: "kartik",
      desc: "105 Stories",
    },
    {
      id: 4, image: require("../google/user_man.png"),
      name: "Deepak",
      desc: "105 Stories",
    },
    {
      id: 5, image: require("../google/user_man.png"),
      name: "Harish",
      desc: "105 Stories",
    },
    {
      id: 6, image: require("../google/user_man.png"),
      name: "Abhishek",
      desc: "105 Stories",
    },
    {
      id: 7, image: require("../google/user_man.png"),
      name: "Aayush",
      desc: "105 Stories",
    },
    {
      id: 8, image: require("../google/user_man.png"),
      name: "Rahul",
      desc: "105 Stories",
    },
    {
      id: 9, image: require("../google/user_man.png"),
      name: "Manish",
      desc: "105 Stories",
    },
    {
      id: 10, image: require("../google/user_man.png"),
      name: "Hridhaan",
      desc: "105 Stories",
    },
    {
      id: 11, image: require("../google/user_man.png"),
      name: "Bharat",
      desc: "105 Stories",
    },
    {
      id: 12, image: require("../google/user_man.png"),
      name: "Bhanu",
      desc: "105 Stories",
    },
    {
      id: 13, image: require("../google/user_man.png"),
      name: "Mahipal",
      desc: "105 Stories",
    },
    {
      id: 14, image: require("../google/user_man.png"),
      name: "Manu",
      desc: "105 Stories",
    },
    {
      id: 15, image: require("../google/user_man.png"),
      name: "Vikrant",
      desc: "105 Stories",
    },];
  const handleSearch = (query) => {
    const filteredData = data.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setSearchResults(filteredData);
  };
  const renderFeatureData5 = ({ item }) => {
    return (
      <>
        <TouchableOpacity style={{
          marginHorizontal: 15,
          marginTop: 7, width: 90
        }}>
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
  // const openKeyboard = () => {
  //   if (searchInputRef.current) {
  //     searchInputRef.current.focus();
  //   }
  // };
  // useEffect(() => {
  //   setInterval(() => {
  //     openKeyboard()
  //   },);}, [] );

  return (
    <ImageBackground style={{ flex: 1, }}
      source={require('../google/main_bg.png')}
      resizeMode={'cover'}>
      <View style={{ flexDirection: "row", marginTop: 25, marginHorizontal: 20 }}>
        <TouchableOpacity onPress={() => { navigation.openDrawer() }}
          style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Image style={{ width: 25, height: 25 }} source={require('../google/menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{
          flex: 1, borderWidth: 1,
          borderColor: "#3E4670",
          height: 40,
          borderRadius: 20, marginHorizontal: 20,
          flexDirection: "row",
        }}
          onPress={() => navigation.navigate("AboutUs")}>
          <View style={{ flex: 1 }}>
            <TextInput
              ref={searchInputRef}
              style={{ color: "white", flex: 1, padding: 10 }}
              placeholder={"Search"}
              placeholderTextColor={"white"}
              value={searchQuery}
              onChangeText={(text) => {
                setSearchQuery(text);
                handleSearch(text);
              }}
            />
          </View>
          <View style={{ alignSelf: "center", marginHorizontal: 10 }}>
            <Image style={{
              width: 20, height: 20,
            }} source={require('../google/search.png')} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "space-evenly", marginHorizontal: 30, marginTop: 10 }}>
        <FlatList
          data={searchResults}
          numColumns={3}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderFeatureData5}
       
        />
      </View>
</ImageBackground>
  )
}

export default AboutUs