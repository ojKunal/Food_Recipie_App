//import liraries
import React, { Component, useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Instructions from "../Components/DetailsScreen/Instructions";
import Nutrients from "../Components/DetailsScreen/Nutrients";
import Ingredients from "../Components/DetailsScreen/Ingredients";
import { useNavigation } from "@react-navigation/native";

// create a component
const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { imageurl, id } = route.params;
  console.log(id);
  const API_KEY = "e26f8e801d924ae296bf8a262eb0c3b5";
  const [foodDetails, setFoodDetails] = useState([]);
  const [ingradientActive, setIngradientActive] = useState(false);
  const [instructionActive, setInstructionActive] = useState(true);
  const [nutrientActive, setNutrientActive] = useState(false);

  const fetchDetails = async () => {
    try {
      const Details = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${API_KEY}`
      );
      if (!Details.ok) {
        throw new Error("Network Error" + Details.statusText);
      }
      const data = await Details.json();
      // console.log(data.nutrition.nutrients[0]);
      setFoodDetails(data);
      // console.log("data is  " + foodDetails.nutrition.nutrients);
    } catch (error) {
      console.error("Error", error.message);
    }
  };
  useEffect(() => {
    fetchDetails();
    // console.log("ID: " + id);
  }, [id]);

  // console.log(foodDetails.analyzedInstructions[0].steps);
  return (
    <ScrollView className="" contentContainerStyle={{ paddingBottom: 15 }}>
      <View className="h-[250px] w-full rounded-b-xl">
        <Image source={{ uri: imageurl }} className="h-full w-full " />
        <TouchableOpacity
          className="bg-white absolute rounded-full p-2 m-3"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="orange" />
        </TouchableOpacity>
      </View>
      <View className=" flex-row items-center justify-center mt-3">
        <Text className="text-orange-500 font-bold text-2xl">
          {foodDetails.title}
        </Text>
      </View>
      <View className="flex-row justify-center items-center gap-10">
        <View className="flex-row items-center">
          <Text className="font-bold text-xl">Duration :</Text>
          <Text> {foodDetails.readyInMinutes} mins</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="font-bold text-xl">servings :</Text>
          <Text> {foodDetails.servings}</Text>
        </View>
      </View>
      <View className="flex-row space-x-3 mt-1 justify-center item-center">
        <TouchableOpacity
          className="bg-gray-200 rounded-full py-1 px-2"
          onPress={() => {
            setNutrientActive(false),
              setIngradientActive(false),
              setInstructionActive(true);
          }}
          style={[
            instructionActive
              ? { backgroundColor: "orange" }
              : { backgroundColor: "#E5E7EB" },
          ]}
        >
          <Text className="text-xl">Intructions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-200 rounded-full py-1 px-2"
          onPress={() => {
            setNutrientActive(true),
              setIngradientActive(false),
              setInstructionActive(false);
          }}
          style={[
            nutrientActive
              ? { backgroundColor: "orange" }
              : { backgroundColor: "#E5E7EB" },
          ]}
        >
          <Text className="text-xl">Nutrients</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-gray-200 rounded-full py-1 px-2"
          onPress={() => {
            setNutrientActive(false),
              setIngradientActive(true),
              setInstructionActive(false);
          }}
          style={[
            ingradientActive
              ? { backgroundColor: "orange" }
              : { backgroundColor: "#E5E7EB" },
          ]}
        >
          <Text className="text-xl">Ingrdients</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-3">
        {/* {foodDetails &&
          foodDetails.analyzedInstructions &&
          foodDetails.analyzedInstructions.length > 0 && (
            <Instructions steps={foodDetails.analyzedInstructions[0].steps} />
          )}
        {foodDetails &&
          foodDetails.nutrition &&
          foodDetails.nutrition.nutrients &&
          foodDetails.nutrition.nutrients.length > 0 && (
            <Nutrients nutrient={foodDetails.nutrition.nutrients} />
          )} */}
        {/* <Ingradients ingrad={foodDetails} /> */}
        {/* {foodDetails &&
          foodDetails.nutrition &&
          foodDetails.nutrition.ingredients &&
          foodDetails.nutrition.ingredients.length > 0 && (
            <Ingradients ingradient={foodDetails.nutrition.ingredients} />
          )} */}
        {foodDetails ? (
          instructionActive ? (
            foodDetails.analyzedInstructions &&
            foodDetails.analyzedInstructions.length > 0 ? (
              <Instructions steps={foodDetails.analyzedInstructions[0].steps} />
            ) : null
          ) : nutrientActive ? (
            foodDetails.nutrition &&
            foodDetails.nutrition.nutrients &&
            foodDetails.nutrition.nutrients.length > 0 ? (
              <Nutrients nutrient={foodDetails.nutrition.nutrients} />
            ) : null
          ) : (
            foodDetails.nutrition &&
            foodDetails.nutrition.ingredients &&
            foodDetails.nutrition.ingredients.length > 0 && (
              <Ingredients ingredients={foodDetails.nutrition.ingredients} />
            )
          )
        ) : null}
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
