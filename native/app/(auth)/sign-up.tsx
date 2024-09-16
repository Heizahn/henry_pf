import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SingUp() {
	return (
		<View style={styles.container}>
			<Text>SingUp</Text>
			<Text>Formulario de Registro</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
