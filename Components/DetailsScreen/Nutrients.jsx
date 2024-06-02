//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
// create a component
const Nutrients = ({ nutrient }) => {
  console.log(nutrient);
  return (
    <View>
      {nutrient.map((item, index) => (
        <View key={index} className="flex-row gap-3 ml-8">
          <Entypo name="arrow-bold-right" size={24} color="gray" />
          <Text className="text-xl">{item.name}</Text>
        </View>
      ))}
    </View>
  );
};
export default Nutrients;
