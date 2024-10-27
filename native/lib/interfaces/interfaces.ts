export interface ButtonProps {
	handlerPress: () => void;
	title: string;
}

export interface Book {
	id: string;
	title: string;
	author: string;
	description: string;
	categories: string;
	front_face: string;
	created_at: string;
}
