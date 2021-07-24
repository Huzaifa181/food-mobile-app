import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FilterScreen from '../screens/FiltersScreen';
// import Icon from 'react-native-ionicons';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavouriteScreen from '../screens/FavouriteScreens';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Colors from '../constants/colors/colors';
const mealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'MealCategories',
      },
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
    },

    MealDetail: {
      screen: MealDetailScreen,
    },
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: 'white',
    },
  },
);

const favouriteNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavouriteScreen,
      navigationOptions: {
        headerTitle: 'Your Favorite',
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: 'white',
    },
  },
);

const config = {
  Meals: {
    screen: mealsNavigator,
    navigationOptions: {
      tabBarLabel: <Text>Meals!!!</Text>,
      tabBarIcon: tabInfo => {
        return; //Place;
      },
    },
  },
  Favorites: {
    screen: favouriteNavigator,
    navigationOptions: {
      tabBarLabel: 'Favourites!',
      tabBarIcon: tabInfo => {
        return;
      },
    },
  },
};
const mealsFabTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(config, {
        activeColor: Colors.accentColor,
        inactiveColor: 'white',
        shifting: false,
        barStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })
    : createBottomTabNavigator(config, {
        tabBarOptions: {
          labelStyle: {fontSize: 20},
          activeTintColor: Colors.accentColor,
        },
      });
const FilterNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTitleStyle: {
        fontSize: 20,
        color: 'white',
      },
    },
    navigationOptions: {
      drawerLabel: 'Filters!!',
    },
  },
);
const mainNavigator = createDrawerNavigator(
  {
    MealsFavs: mealsFabTabNavigator,
    Filters: {
      screen: FilterNavigator,
      navigationOptions: {
        drawerLabel: 'Filters!!',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontSize: 18,
      },
    },
  },
);

const Navigator = createAppContainer(mainNavigator);

export default Navigator;
