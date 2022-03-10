import React from "react";
import {
  createNativeStackNavigator,
  TransitionPresets,
} from "@react-navigation/native-stack";

import RestaurantsScreen from "../features/restaurants/screens/RestaurantsScreen";
// import RestaurantDetailScreen from "../features/restaurants/screens/RestaurantDetailScreen";

const Stack = createNativeStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      // screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <Stack.Screen name="Restaurants" component={RestaurantsScreen} />

      {/* <Stack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      /> */}
    </Stack.Navigator>
  );
};

export default RestaurantsNavigator;
