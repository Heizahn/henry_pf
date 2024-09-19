import { IBook } from "./Ibook";

export interface Data{
    results: {
        books: IBook[];
    };
}