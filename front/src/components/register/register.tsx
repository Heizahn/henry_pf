'use client';

import { IUserRegister } from '@/interfaces/interfaces';
import { registerSchema } from './registerSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { UserRegister } from '@/lib/server/server';
import { useRouter } from 'next/navigation';

export default function Register({
	setKeyForm,
}: {
	setKeyForm: React.Dispatch<React.SetStateAction<number>>;
}) {
	const router = useRouter();

	const handlerSubmit = async (values: IUserRegister) => {
		try {
			await UserRegister(values);
			alert('Usuario registrado exitosamente');

			router.push('/');
		} catch (error) {
			if (error instanceof Error) alert(error.message);
		}
	};
	return (
		<>
			<Formik
				initialValues={{ fullName: '', email: '', password: '' }}
				validationSchema={registerSchema}
				onSubmit={(values) => {
					const { fullName, email, password } = values;

					handlerSubmit({ fullName, email, password });
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
						type='submit'
						className='bg-blue-600 mt-6 w-full text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-blue-700 active:shadow-inner-black transition-shadow duration-100'
					>
						Registrarse
					</button>
				</Form>
			</Formik>
			<div>
				<div className='w-full py-3 flex flex-col gap-4 items-center'>
					<div className='flex flex-row gap-2'>
						<p className='text-gray-950 text-sm'>¿Ya tienes cuenta?</p>
						<button
							onClick={() => setKeyForm(0)}
							className='bg-transparent text-center text-blue-500 text-sm'
						>
							Inicia sesión aquí
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
