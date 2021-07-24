import React from 'react';
import {View, Text, Image, Button, StyleSheet, ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MaterialHeaderButtons} from '../components/HeaderButton';
import {useSelector} from 'react-redux';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.meals.meals);
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}></Image>
      <View style={styles.detail}>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredients => {
        return <ListItem key={ingredients}>{ingredients}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <MaterialHeaderButtons>
        <Item
          title="Favorite Icon"
          iconName="favorite"
          onPress={() => console.warn('add')}
        />
      </MaterialHeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detail: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
  },
});

export default MealDetailScreen;
