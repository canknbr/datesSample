import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const DatesCard = ({ item }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View className="relative overflow-hidden">
      <Image
        className="rounded-3xl"
        source={item.imgUrl}
        style={{
          width: width * 0.8,
          height: height * 0.7,
        }}
        resizeMode="cover"
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "rgba(0,0,0,0.6)"]}
        className="absolute w-full h-full rounded-3xl"
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 0,
          y: 1,
        }}
      />
      <View className="absolute bottom-10 pl-4 items-start justify-start w-full">
        <View className="flex-row justify-center items-center">
          <Text className="text-white text-xl font-semibold">
            {item.name} {item.lastName}
            {","}
          </Text>
          <Text className="text-white text-xl font-semibold mr-2">
            {item.age}
          </Text>
          {item.verified && (
            <MaterialIcons name="verified" size={24} color="royalblue" />
          )}
        </View>
        <View className="flex-row justify-center items-center">
          <Text className="text-gray-300 text-lg font-semibold mr-2">
            {item.city}
          </Text>
          <Text
            className="text-gray-300
           text-lg font-semibold mr-2">
            {item.country}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DatesCard;

const styles = StyleSheet.create({});
