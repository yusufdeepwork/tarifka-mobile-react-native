import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View, Text} from 'react-native';

const MealCard = ({meal, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {idMeal: meal.idMeal})}
      style={styles.container}>
      <Image
        resizeMode="cover"
        source={{uri: meal.strMealThumb}}
        style={styles.image}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{meal.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default MealCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  image: {
    height: 200,
    flex: 1,
    margin: 10,
    borderRadius: 5,
  },
  textWrapper: {
    position: 'absolute',
    backgroundColor: '#17171790',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: 40,
  },
  name: {
    fontSize: 30,
    color: '#f5f3ef',
    textAlign: 'right',
    paddingRight: 5,
    paddingLeft: 5,
  },
});
