//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Instructions = ({ steps }) => {
  return (
    <View>
      <Text className="text-xl font-bold ml-5 text-orange-400 mt-1">
        Preparation Steps :
      </Text>
      {steps.map((it, index) => (
        <View key={index} className="mt-2 pr-3 pl-4 items-start">
          <Text className="font-bold">step {it.number} . </Text>
          <Text className="text-[18px]"> {it.step}</Text>
        </View>
      ))}
    </View>
  );
};
export default Instructions;
