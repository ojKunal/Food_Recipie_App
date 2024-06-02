import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const FlateList = ({ query, setQuery }) => {
  const navigation = useNavigation();
  const API_KEY = "7e903777113f485aa7ecf2bc312b6747";
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&offset=${
        (page - 1) * 10
      }&number=10`;
      const result = await fetch(URL);
      if (!result.ok) {
        throw new Error("Network Error: " + result.statusText);
      }
      const _data = await result.json();
      setData((prevData) => [...prevData, ..._data.results]);
      setLoading(false);
      if (_data.results.length === 0) {
        setIsEndReached(true);
      }
    } catch (error) {
      console.error("Error", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, page]);

  useEffect(() => {
    // Reset data and page when query changes
    setData([]);
    setPage(1);
    setIsEndReached(false);
  }, [query]);

  const handleReached = () => {
    if (!loading && !isEndReached) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={{ height: height * 0.255, width: width * 0.5 - 32 }}
      className="mt-5 ml-5 mb-3 rounded-xl shadow-2xl"
      onPress={() =>
        navigation.navigate("details", { imageurl: item.image, id: item.id })
      }
    >
      <Image
        source={{ uri: item.image }}
        className="h-full w-full rounded-xl"
      />
      <Text className="font-bold pl-2 bottom-2 absolute text-white">
        {item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
      </Text>
    </Pressable>
  );

  return (
    <View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleReached}
          onEndReachedThreshold={0.5}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListFooterComponent={loading && <Text>Loading...</Text>}
        />
      ) : (
        <View className="flex-row items-center justify-center mt-8">
          <Text className="font-bold text-xl">Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default FlateList;
