export interface IBook {
    book_id: number;
    title: string;
    author: string;
    publication_date: number;
    description: string;
    categories: Category[];
    photoUrl: string;
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