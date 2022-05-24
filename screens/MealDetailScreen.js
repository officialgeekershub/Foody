import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/subtitle';
import MealDetails from '../components/MealDetails';
import {MEALS} from '../data/dummyData'

const MealDetailScreen = ({route,}) => {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return(
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
            
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>steps</Subtitle>
            <List data={selectedMeal.steps}/>
            </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color:'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
    }
   
});

export default MealDetailScreen;