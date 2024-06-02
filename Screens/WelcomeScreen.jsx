//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// create a component
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center  bg-[#f64e32]">
      <Image
        className="absolute h-full w-full"
        source={require("../assets/backgroundImage.png")}
      />
      <Image
        className="h-[300px] w-[300px] mt-[80px] "
        source={require("../assets/Welcome.png")}
      />
      <View className=" flex-row items-center h-[100px]">
        <Text className="font-bold text-[50px] text-white">Food Cafe</Text>
      </View>
      <View>
        <Text className="font-bold text-[25px] text-gray-300">
          Explore Some Delicious food
        </Text>
      </View>
      <TouchableOpacity
        className="mt-10"
        onPress={() => navigation.navigate("home")}
      >
        <Text className="font-bold text-[25px] text-orange-600 bg-white px-8 py-3 rounded-lg">
          Get Started --{">"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
