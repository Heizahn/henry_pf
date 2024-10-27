import { FlatList, Text, RefreshControl } from 'react-native';
import { getBooks } from '../../lib/client/getBooks';
import { useEffect, useState } from 'react';
import { Book } from '../../lib/interfaces/interfaces';
import BookComponent from './book';

export default function GetBooks() {
	const [books, setBooks] = useState<any>([]);

	useEffect(() => {
		getBooks().then((data) => {
			setBooks(data);
		});
	}, []);

	return (
		<FlatList
			data={books}
			keyExtractor={(item) => item.id}
			renderItem={({ item }: { item: Book }) => <BookComponent item={item} />}
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
