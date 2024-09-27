'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
	const pathname = usePathname();

	return (
		pathname !== '/' && (
			<footer className='w-full flex flex-col items-center py-6 px-4 bg-gray-100 border-t border-gray-200'>
				<div className='flex gap-10 mb-4'>
					<a
						href='https://www.facebook.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-700 hover:text-gray-950 transition-colors duration-500 text-xl'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 24 24'
							className='w-6 h-6'
						>
							<path d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.489v-9.294H9.691V10.32h3.123V7.671c0-3.09 1.832-4.785 4.516-4.785 1.293 0 2.686.236 2.686.236v3.003h-1.511c-1.487 0-1.95.923-1.95 1.874v2.245h3.658l-.584 3.386h-3.074V24h6.098C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z' />
						</svg>
					</a>
					<a
						href='https://www.twitter.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-700 hover:text-gray-950 transition-colors duration-500 text-xl'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 24 24'
							className='w-6 h-6'
						>
							<path d='M23.643 4.937c-.835.37-1.734.621-2.676.735  .959-.573 1.698-1.479 2.047-2.564-.894.529-1.883.915-2.933 1.126A4.273 4.273 0 0016.67 3c-2.363 0-4.274 1.916-4.274 4.276 0 .335.038.661.112.975C7.691 7.952 4.064 5.738 1.64 2.972c-.378.648-.594 1.397-.594 2.197 0 1.513.773 2.843 1.948 3.627-.72-.022-1.39-.219-1.976-.548v.056c0 2.113 1.493 3.872 3.475 4.274-.364.099-.748.151-1.145.151-.281 0-.554-.027-.823-.078.554 1.731 2.159 2.996 4.059 3.027-1.48 1.158-3.347 1.85-5.363 1.85-.348 0-.692-.02-1.036-.061 1.917 1.228 4.194 1.943 6.63 1.943 7.967 0 12.304-6.601 12.304-12.301 0-.187-.005-.373-.014-.558.846-.608 1.58-1.37 2.155-2.237z' />
						</svg>
					</a>
					<a
						href='https://www.instagram.com'
						target='_blank'
						rel='noopener noreferrer'
						className='text-gray-700 hover:text-gray-950 transition-colors duration-500 text-xl'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='currentColor'
							viewBox='0 0 24 24'
							className='w-6 h-6'
						>
							<path d='M12 2.163c3.208 0 3.587.012 4.844.07 1.247.058 2.09.273 2.576.573.54.338 1.117.925 1.455 1.465.3.489.514 1.333.573 2.576.058 1.257.07 1.635.07 4.844s-.012 3.587-.07 4.844c-.059 1.243-.273 2.087-.573 2.576-.338.54-.925 1.127-1.465 1.465-.489.3-1.333.514-2.576.573-1.257.058-1.636.07-4.844.07s-3.587-.012-4.844-.07c-1.243-.059-2.087-.273-2.576-.573-.54-.338-1.127-.925-1.465-1.465-.3-.489-.514-1.333-.573-2.576C2.175 15.58 2.163 15.201 2.163 12s.012-3.587.07-4.844c.059-1.243.273-2.087.573-2.576.338-.54.925-1.127 1.465-1.465.489-.3 1.333-.514 2.576-.573 1.257-.058 1.636-.07 4.844-.07zm0-2.163c-3.236 0-3.651.013-4.944.072-1.375.062-2.317.293-2.966.628-1.162.551-2.079 1.487-2.629 2.629-.335.649-.566 1.591-.628 2.966-.059 1.293-.072 1.708-.072 4.944s.013 3.651.072 4.944c.062 1.375.293 2.317.628 2.966.551 1.162 1.487 2.079 2.629 2.629.649.335 1.591.566 2.966.628 1.293.059 1.708.072 4.944.072s3.651-.013 4.944-.072c1.375-.062 2.317-.293 2.966-.628 1.162-.551 2.079-1.487 2.629-2.629.335-.649.566-1.591.628-2.966.059-1.293.072-1.708.072-4.944s-.013-3.651-.072-4.944c-.062-1.375-.293-2.317-.628-2.966-.551-1.162-1.487-2.079-2.629-2.629-.649-.335-1.591-.566-2.966-.628C15.651 0 15.236 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.048a3.886 3.886 0 110-7.772 3.886 3.886 0 010 7.772zm6.547-10.728a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' />
						</svg>
					</a>
				</div>
				<div className='text-center text-gray-600 text-sm mb-2'>
					&copy; {new Date().getFullYear()} Booknity. Todos los derechos reservados.
				</div>
				<div className='text-center text-gray-600 text-sm'>
					<a href='/privacy-policy' className='hover:underline'>
						Política de Privacidad
					</a>{' '}
					|{' '}
					<a href='/terms' className='hover:underline'>
						Términos y Condiciones
					</a>
				</div>
			</footer>
		)
	);
}
