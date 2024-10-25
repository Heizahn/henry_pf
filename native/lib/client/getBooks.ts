import { supabase } from '../supabase/supabase';

export const getBooks = async () => {
	const { data, error } = await supabase
		.from('books')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) throw new Error(error.message);

	return data;
};
