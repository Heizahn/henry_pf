import { supabase } from '../supabase/supabase';
interface SingInWithEmail {
	email: string;
	password: string;
}

export async function signInWithEmail({ email, password }: SingInWithEmail) {
	const { error } = await supabase.auth.signInWithPassword({ email, password });

	if (error instanceof Error) throw new Error(error.message);
}

export async function signUpWithEmail({ email, password }: SingInWithEmail) {
	await supabase.auth.signOut();
	const {
		// data: { session },
		error,
	} = await supabase.auth.signUp({ email, password });

	console.log(error);
	if (error instanceof Error) throw new Error(error.message);

	// if (!session) throw new Error('Por favor chequea tu bandeja de entrada de tu mail');
}

export async function signOut() {
	await supabase.auth.signOut();
}
