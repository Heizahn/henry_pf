import { Tabs } from 'expo-router';
import React from 'react';

export default function _layout() {
	return (
		<Tabs>
			<Tabs.Screen name='library' options={{ headerShown: false, title: 'Library' }} />
			<Tabs.Screen
				name='community'
				options={{ headerShown: false, title: 'Community' }}
			/>
			<Tabs.Screen name='create' options={{ headerShown: false, title: 'Create' }} />
			<Tabs.Screen
				name='notifications'
				options={{ headerShown: false, title: 'Notifications' }}
			/>
			<Tabs.Screen name='profile' options={{ headerShown: false, title: 'Profile' }} />
		</Tabs>
	);
}
