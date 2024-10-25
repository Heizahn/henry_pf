import { FlatList, StyleSheet, View, Text, RefreshControl, Image } from 'react-native';
import { getBooks } from '../../lib/client/getBooks';
import { useState } from 'react';

interface Book {
	id: string;
	title: string;
	author: string;
	description: string;
	categories: string;
	front_face: string;
	created_at: string;
}

export default function GetBooks() {
	const [books, setBooks] = useState<any>([]);

	getBooks().then((data) => {
		setBooks(data);
	});

	return (
		<FlatList
			data={books}
			keyExtractor={(item) => item.id}
			renderItem={({ item }: { item: Book }) => (
				<View style={styles.container}>
					<Image source={{ uri: item.front_face }} style={styles.image} />
					<Text>{item.title}</Text>
					<View style={styles.subText_div}>
						<Text style={styles.subText}>{item.created_at.split('T')[0]}</Text>
						<Text style={styles.subText}>{item.author}</Text>
					</View>
				</View>
			)}
			ListEmptyComponent={<Text>No hay libros disponibles</Text>}
			refreshControl={
				<RefreshControl
					refreshing={false}
					onRefresh={() => {
						getBooks().then((data) => setBooks(data));
					}}
				/>
			}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 'auto',
	},
	image: {
		width: 200,
		height: 200,
		margin: 10,
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
