import { View, Image, Text, StyleSheet } from 'react-native';
import { Book } from '../../lib/interfaces/interfaces';

export default function BookComponent({ item }: { item: Book }) {
	return (
		<View style={styles.container}>
			<Image source={{ uri: item.front_face }} style={styles.image} />
			<Text>{item.title}</Text>
			<View style={styles.subText_div}>
				<Text style={styles.subText}>{item.created_at.split('T')[0]}</Text>
				<Text style={styles.subText}>{item.author}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 'auto',
		marginBottom: 10,
	},
	image: {
		width: 320,
		height: 380,
		borderRadius: 10,
	},

	subText_div: {
		display: 'flex',
		flexDirection: 'row',
		gap: 10,
	},

	subText: {
		fontSize: 12,
		color: 'gray',
		marginTop: 5,
	},
});
