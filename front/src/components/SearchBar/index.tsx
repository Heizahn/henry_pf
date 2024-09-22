"use client"

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
          className="absolute right-0 p-4 text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#D9D9D9"
              xmlns="http://www.w3.org/2000/svg"
            >
            
              <path d="M19.8 20.9834L13.3168 14.5001..." fill="#606060" />
            </svg>
          </span>
        </button>
      </div>

      <div className="w-full p-4">
        <div className="grid grid-cols-2 gap-12 w-full mt-16">
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

