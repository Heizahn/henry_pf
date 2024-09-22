"use client"
import { IBook } from '@/interfaces/Ibook';
import Link from 'next/link';
import { useEffect, useState } from 'react';



export default function Page ({params}: {params: {id: string}}) {
    const [book, setBook] = useState<IBook | null>(null);


    useEffect(() => {
        const fecthBookData = async () =>  {
            try {
                const responde = await fetch(`http://localhost:3000/books/${params.id}`);
                const data: IBook = await responde.json();
                setBook(data);
                console.log(data);
                
            }
            catch(error){
                console.error("Error fetching the book data:", error);
                
            }
        }
        fecthBookData();

    },[])

    
    
    if (!book) {
        return <div>Book not found</div>;
    }
    
    return (
        <div>
            <div className='w-4/5 h-4/5 grid grid-cols-2 m-auto my-6 py-6 shadow-xl rounded-md bg-white-300'>
                <div className='w-full h-full flex items-center justify-center border-r-2 px-6'>
                    <img className='h-[500px] w-auto object-cover' src={book.photoUrl} alt={book.title} />
                </div>
                <div className='w-full h-full flex flex-col gap-4 '>
                    <h1 className='text-h2 border-b-2 px-6'>{book.title}</h1>
                    <p className='text-h3 text-black-500 px-6 mb-5'>{book.author}</p>
                    <div className=' px-6'>
                        {book.categories.map((category) => (
                            <Link href={`/library/categories/${category.name}`}>
                            <button key={category.id} className='w-fit px-4 py-1 rounded-md text-semiSmall border border-white-700 m-1 hover:bg-white-500'>

                                {category.name}
                            </button>
                            </Link>
                            ))}
                        
                    </div>
                    <p className='text-p leading-relaxed px-6'>{book.description}</p>
                    <div className='flex items-center justify-center '>
                        <button className='w-full mx-6  p-2 bg-white-700  text-pBold text-white rounded-md cursor-not-allowed'>
                            <span>
                                Leer
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    
};
