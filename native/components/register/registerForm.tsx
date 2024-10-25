import { styles } from './styles';
import { Formik } from 'formik';
import { Alert, Text, TextInput, View } from 'react-native';
import ButtonPrimary from '../button-primary';
import * as yup from 'yup';
import { useState } from 'react';
import { signUpWithEmail } from '../../lib/client/auth';

const registerSchema = yup.object({
	email: yup.string().email('Correo inválido').required('*'),
	password: yup.string().min(8, 'Contraseña debe tener 8 caracteres').required('*'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
		.required('*'),
});

export default function RegisterForm() {
	const [isLoading, setIsLoading] = useState(false);
	const handlerSubmit = async ({ email, password }: { email: string; password: string }) => {
		try {
			setIsLoading(true);
			await signUpWithEmail({ email, password });
		} catch (error) {
			if (error instanceof Error) Alert.alert(error.message);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<Formik
			initialValues={{ email: '', password: '', confirmPassword: '' }}
			validationSchema={registerSchema}
			onSubmit={(values) => {
				handlerSubmit({ email: values.email, password: values.password });
			}}
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors }) => (
				<View style={styles.container}>
					<View>
						<Text style={styles.title}>Registro</Text>
					</View>

					<View style={styles.inputsDiv}>
						<Text style={styles.label}>
							Correo{' '}
							{errors.email && (
								<Text style={{ color: 'red' }}>{errors.email}</Text>
							)}
						</Text>

						<TextInput
							keyboardType='email-address'
							style={styles.input}
							onChangeText={handleChange('email')}
							onBlur={handleBlur('email')}
							value={values.email}
						/>
					</View>

					<View style={styles.inputsDiv}>
						<Text style={styles.label}>
							Contraseña{' '}
							{errors.password && (
								<Text style={{ color: 'red' }}>{errors.password}</Text>
							)}
						</Text>

						<TextInput
							style={styles.input}
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password}
							secureTextEntry={true}
						/>
					</View>

					<View style={styles.inputsDiv}>
						<Text style={styles.label}>
							Confirmar contraseña{' '}
							{errors.confirmPassword && (
								<Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
							)}
						</Text>

						<TextInput
							style={styles.input}
							onChangeText={handleChange('confirmPassword')}
							onBlur={handleBlur('confirmPassword')}
							value={values.confirmPassword}
							secureTextEntry={true}
						/>
					</View>

					<View style={styles.buttonDiv}>
						<ButtonPrimary handlerPress={handleSubmit} title='Registrase' />
					</View>
					{isLoading && <Text>Cargando...</Text>}
				</View>
			)}
		</Formik>
	);
}
