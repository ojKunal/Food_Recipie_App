//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Textarea, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// create a component
const SearchBar = ({ placeholder, search, setSearch, setQuery }) => {
  return (
    <View className="bg-gray-200 mt-4 mx-4  rounded-full flex-row items-center px-4  py-3 border-gray-400 justify-between shadow-xl">
      <View className="flex-row space-x-2 items-center">
        <AntDesign name="search1" size={24} color="orange" />
        <TextInput
          placeholder={placeholder}
          value={search}
          onChangeText={(text) => setSearch(text)}
          onSubmitEditing={() => setQuery(search)}
          className="flex-1"
        />
      </View>
    </View>
  );
};

export default SearchBar;
