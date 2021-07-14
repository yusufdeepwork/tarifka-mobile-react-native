import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, Text, StyleSheet} from 'react-native';
import axios from 'axios';

const Recipes = ({route}) => {
  const categoriesUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.name}`;
  console.log('url', categoriesUrl);
  const [mealsList, setMealsList] = useState();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const {data} = await axios.get(categoriesUrl);
      console.log('data', data);
      setMealsList(data.meals);
    } catch (err) {
      console.log(err);
    }
  };

  const renderMeal = ({item}) => <Text>{item.strMeal}</Text>;

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
