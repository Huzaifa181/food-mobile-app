import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

const CategoryGridTitle = props => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableWithoutFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{flex: 1}} onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    borderRadius: 10,
    overflow: 'hidden',
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 3,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 22,
    textAlign: 'right',
  },
});

export default CategoryGridTitle;
