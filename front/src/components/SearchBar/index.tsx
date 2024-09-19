"use client"

import { useState, useEffect } from 'react';
//asset
import Lupa from "/public/assets/Lupa.svg"

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
    <div className="fle w-full flex-col items-center">
      <div className="relative w-full flex justify-center items-center rounded-md ">
      <input
        type="text"
        placeholder="Buscar por título, autor o género..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full h-max border border-blue border-2 p-4 rounded-md focus:ring-1 focus:ring-blue focus:outline-none" // Añadir padding a la derecha para espacio para el ícono
        />
      <button
        onClick={handleSearch}
        className="absolute right-0 p-4 text-blue-500 hover:text-blue-700 focus:outline-none "
        
        >



        <span><svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#D9D9D9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mask0_242_116" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="#D9D9D9"/>
      </mask>
      <g mask="url(#mask0_242_116)">
        <path
          d="M19.8 20.9834L13.3168 14.5001C12.8168 14.9223 12.2364 15.2529 11.5758 15.4919C10.9151 15.7307 10.2121 15.8501 9.46675 15.8501C7.65942 15.8501 6.12975 15.2237 4.87775 13.9709C3.62592 12.7182 3 11.2002 3 9.4169C3 7.63356 3.62642 6.11548 4.87925 4.86265C6.13192 3.60981 7.65275 2.9834 9.44175 2.9834C11.2306 2.9834 12.7486 3.60981 13.9958 4.86265C15.2431 6.11548 15.8668 7.6344 15.8668 9.4194C15.8668 10.1399 15.7501 10.8307 15.5168 11.4919C15.2834 12.1529 14.9445 12.7612 14.5 13.3169L21 19.7834L19.8 20.9834ZM9.45 14.1834C10.7695 14.1834 11.891 13.7181 12.8145 12.7876C13.7382 11.8571 14.2 10.7336 14.2 9.4169C14.2 8.10023 13.7382 6.97657 12.8145 6.0459C11.891 5.1154 10.7695 4.65015 9.45 4.65015C8.12133 4.65015 6.99192 5.1154 6.06175 6.0459C5.13175 6.97657 4.66675 8.10023 4.66675 9.4169C4.66675 10.7336 5.13175 11.8571 6.06175 12.7876C6.99192 13.7181 8.12133 14.1834 9.45 14.1834Z"
          fill="#606060"
        />
      </g>
    </svg></span>
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
