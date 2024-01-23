import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { datesData } from "../constant";
const Matches = () => {
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: hp(1),
          paddingRight: hp(1),
        }}
        className="space-x-4">
        {datesData.map((item, index) => {
          return (
            <TouchableOpacity className="flex items-center" key={index}>
              <View className="rounded-full">
                <Image
                  source={item.imgUrl}
                  style={{
                    width: hp(6),
                    height: hp(6),
                  }}
                  className="rounded-full mb-2"
                />
              </View>
              <Text
                style={{
                  fontSize: hp(1.6),
                }}
                className="text-neutral-800">
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: hp(1.6),
                }}
                className="text-neutral-800">
                {item.age}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Matches;

const styles = StyleSheet.create({});
