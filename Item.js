import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Item({ breedIndex, breedInfo }) {

	const renderBreedTraits = () => {
		const traits = Object.keys(breedInfo).map((key) => {
		  if (key !== 'breed') {
			return (
			  <View key={key} style={{ flexDirection: 'row' }}>
				<Text>{key}:</Text>
				<Text>{breedInfo[key]}</Text>
			  </View>
			);
		  }
		  return null;
		});
	
	  return traits;
	};	


	return (
		<View key={breedIndex}>
			<Text style={styles.breedName}>{breedInfo.breed}</Text>
			{renderBreedTraits()}
		</View>
	);
}

export default Item;

const styles = StyleSheet.create({
    breedName: {
        fontSize: 32,
    },
})