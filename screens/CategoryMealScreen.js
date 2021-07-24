import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import {useSelector} from 'react-redux';
import Colors from '../constants/colors/colors';
import {MealList} from '../components/MealList';
const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealScreen;
