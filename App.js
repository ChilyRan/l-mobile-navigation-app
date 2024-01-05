import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoryScreen from "./screens/CategoryScreen";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverScreen from "./screens/MealsOverScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoriteContextProvider from "./store/context/favorite-context";
import { store } from "./store/redux/store";
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
function BottomNavi() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        tabBarActiveTintColor: "#351401",
      }}
    >
      <BottomTab.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
// const Drawer = createDrawerNavigator();
// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#351401" },
//         headerTintColor: "white",
//         sceneContainerStyle: { backgroundColor: "#3f2f25" },
//         drawerContentStyle: { backgroundColor: "#351401" },
//         drawerInactiveTintColor: "white",
//         drawerActiveTintColor: "#351401",
//         drawerActiveBackgroundColor: "#e4baa1",
//       }}
//     >
//       <Drawer.Screen
//         title="Categories"
//         component={CategoryScreen}
//         options={{ title: "All Categories" }}
//       />
//       <Drawer.Screen name="Favorite" component={FavoritesScreen} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <Provider store={store}> */}
        <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              //bac app
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            {/* Drawer 
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            //Navigate Stack
            options={{
              title: "All Categories",
              headerShown: false,
            }}
          /> */}
            <Stack.Screen
              name="Bttomnav"
              component={BottomNavi}
              options={{
                title: "All Categories",
                headerShown: false,
              }}
            />
            {/* <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            //Navigate Stack
            options={{
              title: "All Categories",
              // headerStyle: { backgroundColor: "#351401" },
              // headerTintColor: "white",
              // //bac app
              // contentStyle: { backgroundColor: "#3f2f25" },
            }}
          /> */}
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverScreen}
              // options={({ route, navigation }) => {
              //   const cardId = route.params.categoryId;
              //   return {
              //     title: cardId,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                //take button on right navigation
                // headerRight: () => {
                //   return <Button title="tap me!" onPress={}/>
                // }
                title: "About the Meal",
              }}
            />
          </Stack.Navigator>
          {/* <CategoryScreen /> */}
        </NavigationContainer>
        </FavoriteContextProvider>
      {/* </Provider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
