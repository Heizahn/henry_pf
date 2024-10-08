import * as yup from 'yup';

export const loginSchema = yup.object({
	email: yup.string().email('Correo inválido').required('Correo es requerido'),
	password: yup.string().required('Contraseña es requerida'),
});
