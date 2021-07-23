import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
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
const Navigator = createAppContainer(mealsNavigator);

export default Navigator;
