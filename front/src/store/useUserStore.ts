import { create } from 'zustand';
import { IUser } from '@/interfaces/interfaces';
import { DecodedToken } from '@/lib/client/client';
import { IBook } from '@/interfaces/Ibook';
import { HOST_API } from '@/config/ENV';

interface IUserStore {
	user: IUser | null;
	setUser: (user: IUser) => void;
	setBook: (book: IBook) => void;
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
		// Aseguramos que el usuario siempre tenga un array de books (aunque esté vacío)
		const initializedUser = {
			...user,
			books: user.books || [], // Si no existen books, inicializamos como array vacío
		};
		set({ user: initializedUser });
		localStorage.setItem('user', JSON.stringify(user.token));
	},

	setBook: async (book: IBook): Promise<void> => {
		return new Promise<void>((resolve, reject) => {
			try {
				set((state) => ({
					user: state.user
						? {
							...state.user,
							books: [...(state.user.books || []), book],
						}
						: state.user,
				}));
				resolve(); // Resuelve la promesa cuando el estado se actualice
			} catch (error) {
				reject(error); // Rechaza la promesa si hay un error
			}
		});
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
