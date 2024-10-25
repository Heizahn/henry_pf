import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GetBooks from '../../components/books/getBooks';

export default function Library() {
	return (
		<View style={styles.container}>
			<Text>library</Text>
			<GetBooks />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingTop: 20,
	},
});
