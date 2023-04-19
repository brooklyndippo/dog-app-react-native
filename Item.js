import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Item({ breedIndex, breedInfo }) {

	const renderBreedTraits = () => {
		const traits = Object.keys(breedInfo).map((key) => {
		  if (key !== 'breed') {
			return (
			  <View key={key} style={styles.breedTrait}>
				<Text>{key}:</Text>
				<Text>{breedInfo[key]}</Text>
			  </View>
			);
		  }
		  return null;
		});
	
	  return traits;
	};	

	const calculateBreedRating = () => {
		const totalTraits = Object.keys(breedInfo).length - 1
		let overallScore = 0;
		for (let key in breedInfo) {
			if (key !== 'breed') {
				overallScore += breedInfo[key]
			}
		}
		const averageScore = Math.round(overallScore / totalTraits)
		const breedRating = <Text style={styles.breedName}>{averageScore}</Text>
		return breedRating
	}


	return (
		<View style={styles.breed} key={breedIndex}>
			<View style={styles.breedTitle}>
				<Text style={styles.breedName}>{breedInfo.breed}</Text>
				{calculateBreedRating()}	
			</View>
			{renderBreedTraits()}
		</View>
	);
}

export default Item;

const styles = StyleSheet.create({
	breed: {
		marginTop: 20,
	},
	breedTitle: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	breedName: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	breedTrait: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
})