import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_ANON_KEY, SUPABASE_URL } from '../../config/ENV';

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
