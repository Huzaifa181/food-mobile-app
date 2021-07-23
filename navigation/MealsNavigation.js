import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
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
      tabBarLabel: 'Meal!',
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
          activeTintColor: Colors.accentColor,
        },
      });

const Navigator = createAppContainer(mealsFabTabNavigator);

export default Navigator;
