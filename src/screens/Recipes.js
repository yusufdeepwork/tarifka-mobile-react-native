import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import MealCard from '../components/MealCard';

const Recipes = ({route, navigation}) => {
  const categoriesUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.name}`;
  const [mealsList, setMealsList] = useState();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const {data} = await axios.get(categoriesUrl);
      setMealsList(data.meals);
    } catch (err) {
      console.log(err);
    }
  };

  const renderMeal = ({item}) => (
    <MealCard meal={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mealsList}
        renderItem={renderMeal}
        keyExtractor={(item, index) => item.idMeal}
      />
    </SafeAreaView>
  );
};
export default Recipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4a312',
  },
});
