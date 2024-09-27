import BookIcon from '../../../public/assets/book.svg';
import ToolIcon from '../../../public/assets/construction.svg';
import World from '../../../public/assets/world1.svg';
import Mesagge from '../../../public/assets/sms.svg';

const Page = () => {
	return (
		<div className='w-content mx-10 mb-10 my-2  flex rounded-xl border-2 border-black-500'>
			{/* COPY */}
			<div className='w-3/6 h-[32rem] px-12 py-4 flex flex-col items-center justify-center mb-4'>
				<div className='w-full flex flex-col gap-4'>
					<h1 className='text-h2'>Apoya el Futuro de la Lectura</h1>
					<p className='mb-4 text-h5'>
						Tu donación ayuda a mejorar el acceso y la experiencia a toda la
						comunidad
					</p>
					<ol className='flex flex-col gap-6'>
						<li className='flex items-center'>
							<BookIcon className='w-10 h-8 mr-2' />
							Ampliar la colección de libros digitales.
						</li>
						<li className='flex items-center'>
							<ToolIcon className='w-10 h-8 mr-2' />
							Mejorar las funciones de la app.
						</li>
						<li className='flex items-center'>
							<World className='w-10 h-8 mr-2' />
							Mantener la plataforma gratuita y accesible para todos.
						</li>
						<li className='flex items-center'>
							<Mesagge className='w-10 h-8 mr-2' />
							Mejorar las interacciones sociales
						</li>
					</ol>
				</div>
			</div>
			{/* CARDS */}
			<div className='w-3/6 h-[32rem]'>
				<div className='w-full h-full flex justify-center items-center py-6'>
					<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-4/5'>
						{/* CARD $5 */}
						<form
							action='/api/donation'
							method='POST'
							className='flex flex-col items-center justify-between bg-white py-6 px-2 rounded-lg border-2 border-black-500 hover:ring-2 ring-red-500'
						>
							<h2 className='text-2xl   text-end font-bold text-gray-800 mb-4 flex flex-col gap-4 text-h5'>
								Donar <span className='text-h2 text-center '>$5</span>
							</h2>
							<p className='text-gray-600 text-center mb-6 text-semiSmall'>
								Tu donación contribuirá a mantener la plataforma accesible.
							</p>
							<input type='hidden' name='amount' value='5' />
							<button
								type='submit'
								className='bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300'
							>
								Donar <br /> $5
							</button>
						</form>

						{/* CARD $10 */}
						<form
							action='/api/donation'
							method='POST'
							className='flex flex-col items-center justify-between bg-white p-6 rounded-lg border-2 border-black-500 hover:ring-2 ring-red-500'
						>
							<h2 className='text-2xl   text-end font-bold text-gray-800 mb-4 flex flex-col gap-4 text-h5'>
								Donar <span className='text-h2 '>$10</span>
							</h2>
							<p className='text-gray-600 text-center mb-6 text-semiSmall'>
								Ayuda a mejorar la experiencia y agregar más libros digitales.
							</p>
							<input type='hidden' name='amount' value='10' />
							<button
								type='submit'
								className='bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300'
							>
								Donar $10
							</button>
						</form>

						{/* CARD $20 */}
						<form
							action='/api/donation'
							method='POST'
							className='flex flex-col items-center justify-between bg-white p-6 rounded-lg border-2 border-black-500 hover:ring-2 ring-red-500'
						>
							<h2 className='text-2xl   text-end font-bold text-gray-800 mb-4 flex flex-col gap-4 text-h5'>
								Donar <span className='text-h2 '>$20</span>
							</h2>
							<p className='text-gray-600 text-center mb-6 text-semiSmall'>
								Contribuye a nuevas funciones y mantener el contenido gratuito.
							</p>
							<input type='hidden' name='amount' value='20' />
							<button
								type='submit'
								className='bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300'
							>
								Donar $20
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
