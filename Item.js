import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Item({ title }) {
	return (
		<View>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}

export default Item;

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
    },
})