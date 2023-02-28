import { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import MealsList from "../components/MealsList/MealsList";

// main screens register route and navigation props
function MealsOverviewScreen({ route, navigation }) {
  // routes params passed through a navigate
  // const route = useRoute();
  // route.params
  // NESTED COMPONENTS = hooks

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
