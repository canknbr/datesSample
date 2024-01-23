import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";
import TabNavigators from "./TabNavigator";

const Stacks = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stacks.Screen name="Welcome" component={WelcomeScreen} />
        <Stacks.Screen
          name="ChatDetail"
          component={ChatDetailScreen}
          options={{
            presentation: "modal",
            animation: "fade_from_bottom",
          }}
        />
        <Stacks.Screen name="Tabs" component={TabNavigators} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
