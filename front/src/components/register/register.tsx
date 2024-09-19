'use client';

import { registerSchema } from './registerSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Register() {
	return (
		<>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={registerSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				<Form className='flex flex-col gap-4 items-center'>
					<div className='w-full flex flex-col items-start'>
						<label className='text-gray-950 py-2'>Nombre completo</label>
						<Field
							type='text'
							name='fullName'
							placeholder='Juan Perez'
							className='w-full rounded-lg p-2 pr-10 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<ErrorMessage name='fullName' component='p' className='text-red-500' />
					</div>

					<div className='w-full flex flex-col items-start'>
						<label className='text-gray-950 py-2'>Correo electrónico</label>
						<Field
							type='email'
							name='email'
							placeholder='juanperez@example.com'
							className='w-full rounded-lg p-2 pr-10 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<ErrorMessage name='email' component='p' className='text-red-500' />
					</div>
					<div className='grid grid-cols-2 gap-4'>
						<div className='w-full flex flex-col items-start'>
							<label className='text-gray-950 py-2'>Contraseña</label>
							<Field
								type='password'
								name='password'
								placeholder='********'
								className='w-full rounded-lg p-2 pr-10 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							<ErrorMessage
								name='password'
								component='p'
								className='text-red-500'
							/>
						</div>
						<div className='w-full flex flex-col items-start'>
							<label className='text-gray-950 py-2'>Confirmar contraseña</label>
							<Field
								type='password'
								name='confirmPassword'
								placeholder='********'
								className='w-full rounded-lg p-2 pr-10 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							<ErrorMessage
								name='confirmPassword'
								component='p'
								className='text-red-500'
							/>
						</div>
					</div>
					<button
						type='button'
						className='bg-blue-600 mt-6 w-full text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-blue-700 active:shadow-inner-black transition-shadow duration-100'
						onClick={() => {}}
					>
						Ingresar
					</button>
				</Form>
			</Formik>
			<div>
				<div className='w-full py-3 flex flex-col gap-4 items-center'>
					<button className='bg-transparent text-center text-blue-500 text-sm'>
						¿Olvidaste tu contraseña?
					</button>
					<div className='flex flex-row gap-2'>
						<p className='text-gray-950 text-sm'>¿No tienes cuenta?</p>
						<button className='bg-transparent text-center text-blue-500 text-sm'>
							Regístrate
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
