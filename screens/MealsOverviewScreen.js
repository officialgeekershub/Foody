import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import MealsList from '../components/MealsList/MealsList';
import {MEALS, CATEGORIES} from '../data/dummyData';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  // console.log('Meals', displayedMeals);
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}/>
};


export default MealsOverviewScreen;
