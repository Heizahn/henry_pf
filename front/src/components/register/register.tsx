'use client';

import { registerSchema } from './registerSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Register() {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={registerSchema}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			<Form className='flex flex-col gap-4 items-center'>
				<Field
					type='email'
					name='email'
					placeholder='Correo'
					className='w-full rounded-lg p-2 pr-10 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				<ErrorMessage name='email' component='p' className='text-red-500' />

				<Field
					type='password'
					name='password'
					placeholder='Contraseña'
					className='w-full rounded-lg p-2 pr-10 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				<ErrorMessage name='password' component='p' className='text-red-500' />

				<Field
					type='password'
					name='password'
					placeholder='Contraseña'
					className='w-full rounded-lg p-2 pr-10 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
				/>
				<ErrorMessage name='password' component='p' className='text-red-500' />
				<button
					type='button'
					className='bg-blue-600 text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-blue-700 active:shadow-inner-black transition-shadow duration-100'
				>
					Ingresar
				</button>
			</Form>
		</Formik>
	);
}
