import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Text,
  Button,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {MaterialHeaderButtons} from '../components/HeaderButton';

const FilterScreen = () => {
  return (
    <View>
      <Text>FilterScreen</Text>
    </View>
  );
};

FilterScreen.navigationOptions = navigationData => {
  return {
    headerLeft: (
      <MaterialHeaderButtons>
        <Item
          title="Filter Meals!"
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
});

export default FilterScreen;
