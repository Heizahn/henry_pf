"use client"
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import { HOST_API } from '@/config/ENV';

interface PasswordValues {
  newPassword: string;
  confirmPassword: string;
}

function ResetPasswordForm({ token }: { token: string | null }) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const submitPasswordReset = async (values: PasswordValues) => {
    if (values.newPassword !== values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await fetch(`${HOST_API}/auth/reset-password?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword: values.newPassword }),
      });

      if (!response.ok) {
        throw new Error('Error al restablecer la contraseña');
      }

      alert('Contraseña restablecida con éxito.');
      router.push('/login');
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <div className='w-2/5 p-8 m-auto border border-blue border-2 rounded-lg flex flex-col items-center'>
      <h1 className='text-2xl font-bold mb-6'>Restablecer contraseña</h1>
      <Formik initialValues={{ newPassword: '', confirmPassword: '' }} onSubmit={submitPasswordReset}>
        <Form className='flex w-full flex-col gap-4 items-center'>
          <div className='w-full flex flex-col items-start'>
            <label className='text-gray-950 py-2'>Nueva Contraseña</label>
            <Field
              type='password'
              name='newPassword'
              placeholder='Nueva Contraseña'
              className='w-full rounded-lg p-2 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <ErrorMessage name='newPassword' component='p' className='text-red-500' />
          </div>

          <div className='w-full flex flex-col items-start'>
            <label className='text-gray-950 py-2'>Confirmar Contraseña</label>
            <Field
              type='password'
              name='confirmPassword'
              placeholder='Confirmar Contraseña'
              className='w-full rounded-lg p-2 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <ErrorMessage name='confirmPassword' component='p' className='text-red-500' />
          </div>

          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}

          <button
            type='submit'
            className='bg-blue-600 mt-6 w-full text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-blue-700 active:shadow-inner-black transition-shadow duration-100'
          >
            Restablecer Contraseña
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default function NewPasswordPage() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tokenParam = searchParams.get('token');
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      alert('Token no proporcionado');
      router.push('/login');
    }
  }, [router]);

  if (!token) {
    return <div>Loading...</div>;
  }

  return <ResetPasswordForm token={token} />;
}
