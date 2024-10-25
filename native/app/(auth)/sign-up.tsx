import { StyleSheet, Text, View } from 'react-native';
import RegisterForm from '../../components/register/registerForm';

import { Link } from 'expo-router';

export default function SignIn() {
	return (
		<View style={styles.container}>
			<View></View>
			<RegisterForm />
			<View>
				<Text style={styles.textReg}>
					¿Ya tienes Cuenta?{' '}
					<Link style={styles.link} href='/(auth)/sign-in'>
						Ingresa aquí
					</Link>
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},

	textReg: {
		fontSize: 14,
		textAlign: 'center',
	},

	link: {
		color: '#007AD9',
		fontWeight: 'bold',
	},
});
