import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
	auth: {
		storage: AsyncStorage,
		autoRefreshToken: true,
		persistSession: true,
		detectSessionInUrl: false,
	},
});

export const insertBook = async (data: any): Promise<any> => {
	const { error } = await supabase
		.from('books')
		.insert({
			title: data.title,
			author: data.author,
			description: data.description,
			category: data.category,
			front_face: data.photoUrl,
		})
		.select();

	if (error) throw new Error(error.message);

	return { error: null };
};

export const getUser = async () => {
	const { data, error } = await supabase.auth.getUser();

	if (error) throw new Error(error.message);

	return data;
};
