'use client';
// import Image from 'next/image';
import { useCallback, useState } from 'react';
import { IBook } from '@/interfaces/Ibook';

const SearchBooks = ({
	books,
	setBooksFiltered,
}: {
	books: IBook[];
	setBooksFiltered: React.Dispatch<React.SetStateAction<IBook[]>>;
}) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = useCallback(() => {
		const filter: IBook[] = books.filter(
			(book: IBook) =>
				book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
				book.categories.find((category) =>
					category.name.toLowerCase().includes(searchTerm.toLowerCase()),
				),
		);

		setBooksFiltered(filter);
	}, [books, searchTerm, setBooksFiltered]);

	return (
		<div className='w-full flex flex-col items-center'>
			<div className='relative w-full flex justify-center items-center rounded-md'>
				<input
					type='text'
					placeholder='Buscar por título, autor o género...'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className='w-full border border-blue p-4 rounded-md focus:ring-1 focus:ring-blue focus:outline-none'
				/>
				<button
					onClick={handleSearch}
					className='absolute right-0 p-6 text-blue-500 hover:text-blue-700 focus:outline-none'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-search'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						stroke-width='2'
						stroke='currentColor'
						fill='none'
						stroke-linecap='round'
						stroke-linejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<circle cx='10' cy='10' r='7' />
						<line x1='21' y1='21' x2='15' y2='15' />
					</svg>
				</button>
			</div>

			<div className='w-full p-4'>
				<div className='grid grid-cols-2 gap-12 w-full '>
					{/* {hasSearched && <p>No se encontraron resultados.</p>} */}
				</div>
			</div>
		</div>
	);
};

export default SearchBooks;
