import { StyleSheet, Text, Pressable } from 'react-native';
import { ButtonProps } from '../lib/interfaces/interfaces';

export default function ButtonThird({ handlerPress, title }: ButtonProps) {
	return (
		<Pressable
			style={({ pressed }) => (!pressed ? styles.btn : styles.btnPressed)}
			onPress={handlerPress}
		>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	btn: {
		// backgroundColor transparent,
		backgroundColor: 'rgba(0, 0, 0, 0)',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 10,
	},
	btnPressed: {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 10,
	},

	title: {
		color: '#202020',
		textAlign: 'center',
		fontSize: 16,
		fontWeight: 'semibold',
	},
});
