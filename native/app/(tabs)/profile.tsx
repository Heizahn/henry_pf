import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { User } from '@supabase/supabase-js';
import { signOut } from '../../lib/client/auth';
import { getUser } from '../../lib/supabase/supabase';

export default function Profile() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		if (!user) {
			getUser().then((data) => {
				setUser(data.user);
			});
		}
	}, [user]);
	return (
		<View style={styles.container}>
			<Text>profile</Text>
			<View>
				<Text>{user?.email}</Text>
			</View>
			<Button
				color={'#FF3B30'}
				title='Cerrar sesión'
				onPress={() => signOut().finally(() => router.replace('/'))}
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
