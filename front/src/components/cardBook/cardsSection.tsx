import { useEffect, useState } from "react";
//component
import Card from "./card";
//interface
import { IBook } from "@/interfaces/Ibook";

//LIBROS HARCODEDADOS

const hardcodedBooks: IBook[] = [
    {
        id: 1,
        title: '1984',
        genre: 'Dystopian',
        author: 'George Orwell',
        year: 1949,
        cover: 'https://th.bing.com/th/id/OIP.1aLsycobx7CsgllYaax4eAAAAA?rs=1&pid=ImgDetMain'
    },
    {
        id: 2,
        title: 'To Kill a Mockingbird',
        genre: 'Fiction',
        author: 'Harper Lee',
        year: 1960,
        cover: 'https://th.bing.com/th/id/OIP.G067O0bgyyx4Edq4bYrwiwHaLJ?rs=1&pid=ImgDetMain'
    },
    {
        id: 3,
        title: 'The Great Gatsby',
        genre: 'Classic',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        cover: 'https://th.bing.com/th/id/OIP.MSu1wkGWxI_-D58jiDFjogHaJt?rs=1&pid=ImgDetMain'
    },
    {
        id: 4,
        title: 'Moby Dick',
        genre: 'Adventure',
        author: 'Herman Melville',
        year: 1851,
        cover: 'https://th.bing.com/th/id/OIP.zE8SjqNpfoXPaF0khTPo1AHaLh?rs=1&pid=ImgDetMain'
    },
    {
        id: 5,
        title: 'Pride and Prejudice',
        genre: 'Romance',
        author: 'Jane Austen',
        year: 1813,
        cover: 'https://media.s-bol.com/x6AQJq79NLwr/798x1200.jpg'
    },
    {
        id: 6,
        title: 'The Catcher in the Rye',
        genre: 'Fiction',
        author: 'J.D. Salinger',
        year: 1951,
        cover: 'https://th.bing.com/th/id/R.cac52fbbefa83812774f681dbf874163?rik=v%2bHq2yBp%2f6RzYw&riu=http%3a%2f%2fmedia.npr.org%2fassets%2fbakertaylor%2fcovers%2fc%2fcatcher-in-the-rye%2f9780316769488_custom-b6fc2e108f3865eb320720875c20e4f869da8065-s6-c30.jpg&ehk=fpDBmQJbSuHhhoBl2AYOifBz0QLtjPI7FBgIYnU65cM%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id: 7,
        title: 'Brave New World',
        genre: 'Dystopian',
        author: 'Aldous Huxley',
        year: 1932,
        cover: ''
    },
    {
        id: 8,
        title: 'The Hobbit',
        genre: 'Fantasy',
        author: 'J.R.R. Tolkien',
        year: 1937,
        cover: ''
    },
    {
        id: 9,
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Leo Tolstoy',
        year: 1869,
        cover: ''
    },
    {
        id: 10,
        title: 'The Lord of the Rings',
        genre: 'Fantasy',
        author: 'J.R.R. Tolkien',
        year: 1954,
        cover: ''
    }
];


const CardsSection = () => {  
    const [books, setBooks] = useState<IBook[]>([]);

    // useEffect(() => {
    //     const fetchBooks = async () => {
    //         try {
    //             const response = await fetch("http://127.0.0.1:8000/api/books");
    //             if (!response.ok) throw new Error('Error fetching books');
    //             const data: IBook[] = await response.json();
    //             setBooks(data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchBooks();
    // }, []);
    
    return (
        <div className="w-full p-4 mt-24 mb-12">
            <h1 className="text-h3 text-center" >Explora y Encuentra Tu Próxima Lectura</h1>
            <div className="grid grid-cols-2 gap-12 w-full mt-16">
                {hardcodedBooks.map((book) => (
                    <Card key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default CardsSection;