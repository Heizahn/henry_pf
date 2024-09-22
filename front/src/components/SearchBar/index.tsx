"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Card from "@/components/cardBook/card" 
import Lupa from "/public/assets/Lupa.svg"; // Icono de lupa
import { IBook } from '@/interfaces/Ibook';

const SearchBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:3000/books');
        if (!response.ok) throw new Error('Error fetching books');
        const data: IBook[] = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = () => {
    setHasSearched(true);
    setFilteredBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.categories
        .filter((category) => 
          category.name.toLowerCase().includes(searchTerm.toLowerCase()) // Accediendo a category.name
        ) // Ajustado a string
      )
    );
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full flex justify-center items-center rounded-md">
        <input
          type="text"
          placeholder="Buscar por título, autor o género..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-blue p-4 rounded-md focus:ring-1 focus:ring-blue focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="absolute right-0 p-6 text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
      </div>

      <div className="w-full p-4">
        <div className="grid grid-cols-2 gap-12 w-full ">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <Card key={book.book_id} book={book} />
            ))
          ) : (
            hasSearched && <p>No se encontraron resultados.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;

