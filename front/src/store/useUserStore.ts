import { create } from 'zustand';
import { IUser } from '@/interfaces/interfaces';
import { DecodedToken } from '@/lib/client/client';

interface IUserStore {
	user: IUser | null;
	setUser: (user: IUser) => void;
	userLogout: () => void;
	userLoginSectionSave: () => void;
}

interface ILoadingStore {
	isLoading: boolean;
	setIsLoading: (isLoading: boolean) => void;
}

export const useIsLoading = create<ILoadingStore>((set) => ({
	isLoading: true,
	setIsLoading: (isLoading: boolean) => {
		set({ isLoading });
	},
}));

export const useUserStore = create<IUserStore>((set) => ({
	user: null,
	setUser: (user: IUser) => {
		set({ user });
		localStorage.setItem('user', JSON.stringify(user.token));
	},

	userLogout: () => {
		localStorage.removeItem('user');
		set({ user: null });
	},

	userLoginSectionSave: () => {
		useIsLoading.setState({ isLoading: true });
		const token = JSON.parse(localStorage.getItem('user') || 'null');
		const user: IUser | null = token ? DecodedToken(token) : null;
		set({ user });
		useIsLoading.setState({ isLoading: false });
	},
}));
