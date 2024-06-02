//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Ingredients = ({ ingredients }) => {
  return (
    <View>
      {ingredients.map((item, index) => (
        <View key={index} className="flex-row gap-5 ml-8 items-center ">
          <Entypo name="arrow-bold-right" size={24} color="gray" />
          <View className="flex-row items-center gap-2">
            <Text className="text-xl">{item.name}</Text>
            <Text className="text-gray-700">
              ({item.amount} {item.unit})
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Ingredients;
