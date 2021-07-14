import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import axios from 'axios';

const Categories = props => {
  const categoriesUrl =
    'https://www.themealdb.com/api/json/v1/1/categories.php';
  const [recipeList, setRecipeList] = useState();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const {data: recipes} = await axios.get(categoriesUrl);
      setRecipeList(recipes.categories);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.idCategory}
        data={recipeList}
        renderItem={({item}) => <Text>{item.strCategory}</Text>}
      />
    </SafeAreaView>
  );
};
export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4a312',
  },
});