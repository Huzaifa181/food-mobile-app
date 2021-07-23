import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <Text>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mealHeader: {
    height: '90%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  mealRow: {
    flexDirection: 'row',
  },
});

export default MealItem;
