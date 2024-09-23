// import { useEffect, useState } from 'react';
//component
import Card from './card';
//interface
import { IBook } from '@/interfaces/Ibook';
// import { HOST_API } from '@/config/ENV';

const CardsSection = ({ books }: { books: IBook[] }) => {
	return (
		<div className='w-full p-4 mb-12'>
			<div className='grid grid-cols-2 gap-12 w-full '>
				{books.map((book) => (
					<Card key={book.book_id} book={book} />
				))}
			</div>
		</div>
	);
};

export default CardsSection;
