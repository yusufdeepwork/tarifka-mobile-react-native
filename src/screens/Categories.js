import React, {useState, useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import axios from 'axios';
import CategoryCard from '../components/CategoryCard';

const Categories = ({navigation}) => {
  const categoriesUrl =
    'https://www.themealdb.com/api/json/v1/1/categories.php';
  const [recipeCategoriesList, setRecipeCategoriesList] = useState();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const {data} = await axios.get(categoriesUrl);
      setRecipeCategoriesList(data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  const renderCategory = ({item}) => (
    <CategoryCard categoryData={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.idCategory}
        data={recipeCategoriesList}
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
