import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  //មានន័យថា filter យកតែMEALS ទាំងឡាយណាដែលមានid ស្មើfavoriteMealsCtx.ids
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  //use redux
  // const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealIds.ids.includes(meal.id)
  // );
  //==========================================
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
