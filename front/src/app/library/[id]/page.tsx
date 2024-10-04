'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HOST_API } from '@/config/ENV';
// Interfaces
import { IBook } from '@/interfaces/Ibook';
//import { IUser } from '@/interfaces/interfaces';
import { useUserStore } from '@/store/useUserStore';

export default function Page({ params }: { params: { id: string } }) {
    const [bookId, setBookId] = useState<IBook | null>(null);
    const {  setBook } = useUserStore();

    const handleBook = async () => {
        if (bookId) {
            try {
                await setBook(bookId);
                alert('Libro guardado con éxito: ' + bookId?.title);
                console.log('Libro guardado:', bookId);
            } catch (error) {
                if (error instanceof Error) console.error('Error guardando el libro:', error.message);
            }
        } else {
            console.error('No se encontró bookId');
        }
    };

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const response = await fetch(`${HOST_API}/books/${params.id}`);
                if (!response.ok) {
                    throw new Error('Error fetching the book data');
                }
                const data: IBook = await response.json();
                setBookId(data);
            } catch (error) {
                console.error('Error fetching the book data:', error);
            }
        };

        fetchBookData();
    }, [params.id]);

    if (!bookId) {
        return <div>Book not found</div>;
    }

    return (
        <div>
            <div className='w-4/5 h-4/5 grid grid-cols-2 m-auto my-6 py-6 shadow-xl rounded-md bg-white-300'>
                <div className='w-full h-full relative flex items-center justify-center border-r-2 px-6'>
                    <div className='h-[500px] w-[200px] object-contain'></div>
                    <Image
                        src={bookId.photoUrl}
                        alt={bookId.title}
                        fill={true}
                        objectFit='contain'
                    />
                </div>
                <div className='w-full h-full flex flex-col gap-4'>
                    <h1 className='text-h2 border-b-2 px-6'>{bookId.title}</h1>
                    <p className='text-h3 text-black-500 px-6 mb-5'>{bookId.author}</p>
                    <div className='px-6'>
                        {bookId.categories.map((category) => (
                            <Link
                                href={`/library/categories/${category.name}`}
                                key={category.id}
                            >
                                <button className='w-fit px-4 py-1 rounded-md text-semiSmall border border-white-700 m-1 hover:bg-white-500'>
                                    {category.name}
                                </button>
                            </Link>
                        ))}
                    </div>
                    <p className='text-p leading-relaxed px-6'>{bookId.description}</p>
                    <div className='flex items-center justify-center '>
                        <button
                            className='w-full mx-6 p-2 bg-blue text-pBold text-white rounded-md'
                            type='button'
                            onClick={handleBook}
                        >
                            <span>Leer</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
