import Screen from '@/components/screen/screen';
import SearchBooks from '@/components/SearchBar';

export default function Page() {
	return (
		<Screen>
			<div className='width-full flex justify-center'>

				<div>
					<h1>Miles de libros esperando por ti</h1>
					<SearchBooks/>
					<p>Descubre nuevos géneros, libros recomendados y mucho más.</p><button
						type='button'
						className='bg-white-DEFAULT text-black-DEFAULT font-bold text-sm px-8 py-3 rounded-lg hover:bg-white-500 active:shadow-inner-black transition-shadow duration-100'>
						Ver recomendaciones
					</button>
				</div>
			</div>
		</Screen>
	);
}
