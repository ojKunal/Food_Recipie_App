//import liraries
import React, { Component, useState } from "react";
import { categories } from "./Data/Containts";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Category = ({ query, setQuery }) => {
  // console.log(query);
  const [active, setActive] = useState(null);
  return (
    <View className="">
      <ScrollView
        className="overflow-visible mt-7"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 15, paddingLeft: 15 }}
      >
        {categories.map((item, index) => {
          return (
            <View
              key={index}
              className="bg-white mr-6 flex-row items-center p-1 px-2 rounded-2xl shadow-xl"
              style={[
                active === item.id
                  ? { backgroundColor: "orange" }
                  : { backgroundColor: "#E5E7EB" },
              ]}
            >
              <TouchableOpacity
                className=""
                onPress={() => {
                  setQuery(item.category), setActive(item.id);
                }}
              >
                <Text className="text-xl font-bold">{item.category}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;
