'use client';

import { useUserStore } from '@/store/useUserStore';
import { useEffect } from 'react';

export default function SectionSave() {
	const { userLoginSectionSave } = useUserStore();

	useEffect(() => {
		userLoginSectionSave();
	}, [userLoginSectionSave]);

	return null;
}
