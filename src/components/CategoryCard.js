import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from 'react-native';

const CategoryCard = ({categoryData, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Recipes', {
          name: categoryData.strCategory,
        })
      }>
      <React.Fragment>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            source={{uri: categoryData.strCategoryThumb}}
            style={styles.image}
          />
          <Text style={styles.name}>{categoryData.strCategory}</Text>
        </View>
      </React.Fragment>
    </TouchableOpacity>
  );
};
export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e9e8ee',
    margin: 5,
    borderRadius: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginLeft: 10,
  },
  name: {
    textAlign: 'center',
    marginLeft: 10,
    fontSize: 20,
  },
});
