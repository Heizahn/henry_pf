import { useEffect, useState } from "react";
//component
import Card from "./card";
//interface
import { IBook } from "@/interfaces/Ibook";



const CardsSection = () => {  
    const [books, setBooks] = useState<IBook[]>([]);

	useEffect(() => {
		
		const fetchBooks = async () => {
			try {
				const response = await fetch('http://localhost:3000/books');
				if (!response.ok) throw new Error('Error fetching books');
				const data: IBook[] = await response.json();
				setBooks(data);
				console.log(data);
				
			} catch (error) {
				console.error(error);
			}
		}

        fetchBooks();
	},[]);
    
    return (
        <div className="w-full p-4 mt-24 mb-12">
            <h1 className="text-h3 text-center" >Explora y Encuentra Tu Próxima Lectura</h1>
            <div className="grid grid-cols-2 gap-12 w-full mt-16">
                {books.map((book) => (
                    <Card key={book.book_id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default CardsSection;