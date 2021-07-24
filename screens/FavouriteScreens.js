import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MealList} from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MaterialHeaderButtons} from '../components/HeaderButton';

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navigationData => {
  return {
    headerLeft: (
      <MaterialHeaderButtons>
        <Item
          title="Your Favorites"
          iconName="favorite"
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </MaterialHeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavoritesScreen;
