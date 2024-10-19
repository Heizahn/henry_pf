import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonPrimary from '../components/button-primary';

export default function App() {
	const handlerPress = () => {
		router.push('/sign-in');
	};
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<View>
				<View style={{ padding: 20 }}>
					<Text style={styles.text}>Booknity</Text>
					<Text style={styles.textPara}>Tu biblioteca digital</Text>
				</View>
			</View>
			<View>
				<Text style={styles.text}>
					<TextBlue>Lee</TextBlue>, <TextBlue>comparte</TextBlue> y{' '}
					<TextBlue>descubre</TextBlue> en un espacio creado para{' '}
					<TextBlue>tí</TextBlue>
				</Text>
				<Text style={{ fontSize: 14, marginTop: 10, textAlign: 'center' }}>
					Accede a miles de libros, únete a debates literarios y forma parte de una
					red de una comunidad que transforma la lectura en una experiencia única.
				</Text>
				<View style={styles.buttonPos}>
					<ButtonPrimary handlerPress={handlerPress} title='Comienza aquí' />
				</View>
			</View>

			<Link href='/(auth)/sign-up'>
				<View style={{ padding: 20 }}>
					<Text style={styles.text}>
						<TextBlue>¿No tienes cuenta?</TextBlue>
					</Text>
					<Text style={styles.textPara}>
						¡Regístrate y empieza a leer! ¡No te lo pierdas!
					</Text>
				</View>
			</Link>
		</View>
	);
}

function TextBlue({ children }: { children: React.ReactNode }) {
	return <Text style={{ fontWeight: 'bold', color: '#007AD9' }}>{children}</Text>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	textPara: {
		fontSize: 16,
		textAlign: 'center',
	},

	buttonPos: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
