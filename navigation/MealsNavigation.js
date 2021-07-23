import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
const mealsNavigator = createStackNavigator({
  Categories: {screen: CategoriesScreen},
  CategoryMeals: {screen: CategoryMealScreen},
  MealDetail: {
    screen: MealDetailScreen,
  },
});
const Navigator = createAppContainer(mealsNavigator);

export default Navigator;
