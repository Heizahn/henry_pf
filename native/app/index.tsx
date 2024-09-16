import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonPrimary from '../components/button-primary';

export default function App() {
	const handlerPress = () => {
		router.push('/sign-in');
	};
	return (
		<View style={styles.container}>
			<Text>Aquí ira la landing de la app</Text>
			<StatusBar style='auto' />

			<ButtonPrimary handlerPress={handlerPress} title='Iniciar Sesión' />
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
});
