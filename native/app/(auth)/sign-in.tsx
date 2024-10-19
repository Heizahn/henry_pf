import { StyleSheet, Text, View } from 'react-native';
import ButtonPrimary from '../../components/button-primary';
import { router } from 'expo-router';

export default function SignIn() {
	const handlerSignUp = () => {
		router.push('/sign-up');
	};

	const handlerLogin = () => {
		router.replace('/home');
	};
	return (
		<View style={styles.container}>
			<Text>SignIn</Text>
			<View style={styles.form}>
				<Text>Formulario de inicio de sesión</Text>
				<ButtonPrimary handlerPress={handlerLogin} title='Login' />
			</View>
			<Text>No tienes Cuenta </Text>
			<ButtonPrimary handlerPress={handlerSignUp} title='Click Here' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
