'use client';
// import Image from 'next/image';
//components
import CardsSection from '../../components/cardBook/cardsSection';
import Screen from '@/components/screen/screen';
import SearchBooks from '@/components/SearchBar';
import { IBook } from '@/interfaces/Ibook';
import { useEffect, useState } from 'react';
import { HOST_API } from '@/config/ENV';

//Assets
// import bgImg from "/public/assets/BGimg.png";

export default function Page() {
	const [books, setBooks] = useState<IBook[]>([]);
	const [booksFiltered, setBooksFiltered] = useState<IBook[]>([]);

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await fetch(`${HOST_API}/books`);
				if (!response.ok) throw new Error('Error fetching books');
				const data: IBook[] = await response.json();

				setBooks(data);
				// console.log(data);
			} catch (error) {
				if (error instanceof Error) console.error(error.message);
			}
		};

		fetchBooks();
	}, []);

	return (
		<Screen>
			<div className='width-full '>
				<div className='flex w-full items-center justify-center'>
					{/* <Image className='absolute z-[-1]' src={bgImg} alt='background'/> */}

					<div className='flex w-3/5 flex-col items-center justify-center gap-12 my-12'>
						<h1 className='w-11/12 text-5xl font-bold text-center'>
							<span className='text-blue'>Miles</span> de libros esperando por ti
						</h1>
						<p className='w-60 text-center'>
							Descubre nuevos géneros, libros recomendados y mucho más.
						</p>
						<button
							type='button'
							className=' bg-white-DEFAULT text-black-DEFAULT border-2 border-blue font-bold text-sm px-10 py-3 rounded-md hover:bg-white-300  hover:ring-blue active:shadow-inner-black transition-shadow duration-100'
						>
							Ver recomendaciones
						</button>
						<h1 className='text-h3 text-center'>
							Explora y Encuentra Tu Próxima Lectura
						</h1>

						<SearchBooks books={books} setBooksFiltered={setBooksFiltered} />
					</div>
				</div>
			</div>
			<div>
				<CardsSection books={booksFiltered.length > 0 ? booksFiltered : books} />
			</div>
		</Screen>
	);
}
