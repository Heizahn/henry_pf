import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
