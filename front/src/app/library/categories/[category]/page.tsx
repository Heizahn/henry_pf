"use client"
import { useEffect, useState } from "react"
import Link from "next/link";
//interfaces
import { IBook } from "@/interfaces/Ibook";

export default function Page ({params}:{params: {category: string}}) {
    const [books, setBooks] = useState<IBook[]>([]);
    useEffect(()=>{
        const fecthBookData = async () =>  {
            try{
                const response = await fetch(`http://localhost:3000/books`);
                if (!response.ok) throw new Error('Error fetching books');
                const data: IBook[] = await response.json();
                setBooks(data);
            }
            catch(error){
                console.log(error);
            }
        }
        fecthBookData();
    },[])

    const booksByCategory = books.filter((book) => book.categories.some((category) => category.name.trim() === decodeURIComponent(params.category.trim())));
        return(
            <div>
                <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-h2">{decodeURIComponent(params.category)}</h1>
                    {booksByCategory.map((book) => (
                        <div className="bg-white-300 w-2/5 h-full flex justify-center items-center p-4 border border-gray-200 rounded-lg shadow-md " key={book.book_id}>
                            <Link className="text-center" href={`/library/${book.book_id}`}>
                            <h4 className="text-h5 font-bold">{book.title}</h4>
                            <div className="w-full flex justify-center items-center ">
                                <img src={book.photoUrl} alt={book.title} className="h-64 object-contain" />
                            </div>

                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        )
}