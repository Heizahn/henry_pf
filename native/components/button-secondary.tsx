import { StyleSheet, Text, Pressable } from 'react-native';
import { ButtonProps } from '../lib/interfaces/interfaces';

export default function ButtonSecondary({ handlerPress, title }: ButtonProps) {
	return (
		<Pressable
			style={({ pressed }) => (!pressed ? styles.btn : styles.btnPressed)}
			onPress={handlerPress}
		>
			<Text style={styles.text}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: '#D9D9D9',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 10,
	},
	btnPressed: {
		backgroundColor: '#C0C0C0',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 10,
	},

	text: {
		fontSize: 16,
		textAlign: 'center',
		color: 'black',
	},
});
