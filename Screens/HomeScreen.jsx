//import liraries
import { DARK_MODE } from "nativewind/dist/utils/selector";
import React, { Component, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../Components/SearchBar";
import Category from "../Components/Categories";
import FlateList from "../Components/FlateList";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

const HomeScreen = () => {
  const [query, setQuery] = useState("indian");
  const [search, setSearch] = useState("");
  console.log(query);
  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <StatusBar barStyle={"dark"} />
      <View className=" bg-orange-300 p-3 flex-row justify-between px-4">
        <Text className="text-2xl text-orange-500 font-bold">Hi Kunal</Text>
        <Ionicons name="notifications-outline" size={30} color="black" />
      </View>
      <View className="">
        <SearchBar
          placeholder={"Search Your Favorite Recipie"}
          search={search}
          setSearch={setSearch}
          setQuery={setQuery}
        />
      </View>
      <View className=" mt-2">
        <Category query={query} setQuery={setQuery} />
      </View>
      <View className="mt-4 ml-4 shadow-xl">
        <Text className="font-bold text-xl text-red-500">See Recipies</Text>
      </View>
      <View className="bg-gray-200">
        <FlateList query={query} setQuery={setQuery} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
