import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { supabase } from '../../lib/supabase/supabase';
import { router } from 'expo-router';

export default function Profile() {
	return (
		<View style={styles.container}>
			<Text>profile</Text>
			<Button
				color={'#FF3B30'}
				title='Cerrar sesión'
				onPress={() => {
					supabase.auth.signOut();
					router.replace('/');
				}}
			/>
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
