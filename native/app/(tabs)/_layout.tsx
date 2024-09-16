import { Tabs } from 'expo-router';
import React from 'react';

export default function _layout() {
	return (
		<Tabs>
			<Tabs.Screen name='home' options={{ headerShown: false, title: 'Home' }} />
			<Tabs.Screen name='setting' options={{ headerShown: false, title: 'Setting' }} />
		</Tabs>
	);
}
