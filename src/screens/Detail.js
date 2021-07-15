import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';

const Detail = ({route}) => {
  const categoriesUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.idMeal}`;
  const [mealDetail, setMealDetail] = useState();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const {data} = await axios.get(categoriesUrl);
      setMealDetail(data.meals[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView>
      {mealDetail && (
        <>
          <Image source={{uri: mealDetail.strMealThumb}} style={styles.image} />
          <View style={styles.header}>
            <Text style={styles.name}>{mealDetail.strMeal}</Text>
            <Text style={styles.countryName}>{mealDetail.strArea}</Text>
          </View>
          <Text style={styles.ingredients}>{mealDetail.strInstructions}</Text>
        </>
      )}
    </ScrollView>
  );
};
export default Detail;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 300,
  },
  header: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  countryName: {
    color: '#b13535',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  name: {
    color: '#b13535',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    marginBottom: 1,
  },
  ingredients: {
    padding: 5,
  },
});
