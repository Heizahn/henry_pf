import * as yup from 'yup';

export const registerSchema = yup.object({
	fullName: yup.string().required('Nombre es requerido'),
	email: yup
		.string()
		.email('Correo inválido')
		.required('Correo es requerido')
		.max(50, 'Correo inválido'),
	password: yup
		.string()
		.min(8, 'Contraseña debe tener 8 caracteres')
		.required('Contraseña es requerida'),
	confirmPassword: yup.string().oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
});
