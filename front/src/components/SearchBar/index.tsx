"use client"

import { useState, useEffect } from 'react';

interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string[];
}

const SearchBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
  const [hasSearched, setHasSearched] = useState(false);  

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
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
    setHasSearched(true);  // Comprobar que se hizo una busq
    setFilteredBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.some((g) => g.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="Buscar por título, autor o género..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-blue-500 rounded-lg p-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          onClick={handleSearch}
          className="absolute right-2 top-2 p-2 text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1115 3a7.5 7.5 0 011.65 13.65z" />
          </svg>
        </button>
      </div>

      <ul className="mt-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> - {book.author} <br />
              <p>Géneros: {book.genre.join(', ')}</p>
            </li>
          ))
        ) : (
          hasSearched && <p>No se encontraron resultados.</p> // Solo se muestra el mensaje si se hizo una busqueda
        )}
      </ul>
    </div>
  );
};

export default SearchBooks;
