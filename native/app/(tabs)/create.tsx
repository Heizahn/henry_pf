import { StyleSheet, Text, ScrollView } from 'react-native';
import CreateBook from '../../components/create-book/create';

export default function Create() {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>Crear Libro</Text>
			<CreateBook />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 20,
	},
});
