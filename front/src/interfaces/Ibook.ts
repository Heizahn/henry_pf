//type
import { IUser } from "./interfaces";

export interface IBook {
    book_id: number;
    title: string;
    author: string;
    publication_date: number;
    description: string;
    categories: Category[];
    photoUrl: string;
    reviews: IReview[];
}
export interface IReview {
    review_id: number;
    user_id: number;
    book_id: number;
    content: string;
    rating: number;
    review_date: string;
    isDeleted: boolean;
    user: IUser;  // Relación con la interfaz de usuario
  }

export interface Category {
    id: number;
    name: string;
  }

export interface CardProps{
    books: IBook[];
}

export interface AddBook{
    book_id:number;
    title: string;
    photoUrl: string;
}