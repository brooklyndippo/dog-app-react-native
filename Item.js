import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Item({ breedIndex, breedInfo }) {

	const renderBreedTraits = () => {
		const traits = Object.keys(breedInfo).map((key) => {
		  if (key !== 'breed') {

			let color;
			switch (breedInfo[key]) {
			  case 1: 
				color = '#F57C00'
				break;
			  case 2:
				color = '#FBC02D'
				break;
			  case 3:
				color = '#CDDC39'
				break;
			  case 4:
				color = '#7CB342'
				break;
			  case 5:
				color = '#558B2F'
				break;
			};

			return (
			  <View key={key} style={styles.breedTrait}>
				<Text>{key}:</Text>
				<View style={styles.ratingBox}>
				<View style={{ width: `${breedInfo[key]*20}%`, height: 10, backgroundColor: color }} />
				</View>
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
		marginTop: 10,
	},
	ratingBox: {
		width: 100,
		height: 10,
		backgroundColor: '#F2F3F4'
	}
})