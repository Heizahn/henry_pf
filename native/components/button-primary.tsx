import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

interface ButtonPrimaryProps {
	handlerPress: () => void;
	title: string;
}
export default function ButtonPrimary({ handlerPress, title }: ButtonPrimaryProps) {
	return (
		<Pressable
			style={({ pressed }) => (!pressed ? styles.btn : styles.btnPressed)}
			onPress={handlerPress}
		>
			<Text style={{ color: 'white' }}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: '#007AD9',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 10,
	},
	btnPressed: {
		backgroundColor: '#003D7A',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 10,
	},
});
