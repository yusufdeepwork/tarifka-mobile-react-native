import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import axios from 'axios';
import CategoryCard from '../components/CategoryCard';

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

  const renderCategory = ({item}) => <CategoryCard categoryData={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.idCategory}
        data={recipeList}
        renderItem={renderCategory}
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
