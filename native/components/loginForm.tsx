import { Formik } from 'formik';
import { Alert, AppState, StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonPrimary from './button-primary';
import * as yup from 'yup';
import { supabase } from '../lib/supabase/supabase';
import { useState } from 'react';
import { signInWithEmail } from '../lib/client/auth';
import { router } from 'expo-router';

const loginSchema = yup.object({
	email: yup.string().email('Correo inválido').required('*'),
	password: yup.string().min(8, 'Contraseña debe tener 8 caracteres').required('*'),
});

export default function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const handlerSubmit = async ({ email, password }: { email: string; password: string }) => {
		try {
			setIsLoading(true);
			await signInWithEmail({ email, password });
			router.replace('/library');
		} catch (error) {
			if (error instanceof Error) Alert.alert(error.message);
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={loginSchema}
			onSubmit={(values) => {
				handlerSubmit(values);
			}}
		>
			{({ handleChange, handleBlur, handleSubmit, values, errors }) => (
				<View style={styles.container}>
					<View>
						<Text style={styles.title}>Iniciar Sesión</Text>
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
					<View style={styles.buttonDiv}>
						<ButtonPrimary handlerPress={handleSubmit} title='Iniciar Sesión' />
					</View>
					{isLoading && <Text>Cargando...</Text>}
				</View>
			)}
		</Formik>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		padding: 20,
		backgroundColor: 'white',
		justifyContent: 'center',
	},

	title: {
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},

	inputsDiv: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: 10,
		backgroundColor: 'white',
		alignItems: 'flex-start',
	},

	input: {
		width: '100%',
		height: 40,
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
	},
	label: {
		fontSize: 16,
		textAlign: 'left',
		marginBottom: 6,
	},

	buttonDiv: {
		marginTop: 20,
	},
});
