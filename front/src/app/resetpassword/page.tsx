'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';

export default function RecoveryPassword() {
  const router = useRouter();

  // Función para manejar el envío de la solicitud de recuperación de contraseña
  const submitRecovery = async (values: { email: string }) => {
    try {
      // Enviar el email al backend con fetch
      const response = await fetch('http://localhost:3000/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el correo para la recuperación de la contraseña');
      }

      alert('Instrucciones enviadas a tu correo electrónico.');
      router.push('/login'); // Redirigir al login tras el envío exitoso
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <div className='w-2/5 p-8 m-auto border border-blue border-2 rounded-lg flex flex-col items-center'>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={submitRecovery}
      >
        <Form className='flex w-full flex-col gap-4 items-center'>
          <div className='w-full flex flex-col items-start'>
            <label className='text-gray-950 py-2'>Correo electrónico</label>
            <Field
              type='email'
              name='email'
              placeholder='Correo'
              className='w-full rounded-lg p-2 pr-10 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <ErrorMessage name='email' component='p' className='text-red-500' />
          </div>
          <button
            type='submit'
            className='bg-blue-600 mt-6 w-full text-white font-bold text-sm px-8 py-3 rounded-lg hover:bg-blue-700 active:shadow-inner-black transition-shadow duration-100'
          >
            Recuperar Contraseña
          </button>
        </Form>
      </Formik>
    </div>
  );
}
