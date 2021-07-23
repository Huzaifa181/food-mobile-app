import React, {useEffect, useState} from 'react';
import {enableScreens} from 'react-native-screens';
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
import MealsNavigation from './navigation/MealsNavigation';

const App = () => {
  enableScreens();
  return <MealsNavigation />;
};

const styles = StyleSheet.create({});

export default App;
