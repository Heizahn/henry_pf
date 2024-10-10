"use client";
import { useEffect, useState } from "react";
//Componentes reutilizables
import CardsSection from "@/components/cardBook/cardsSection";
//types
import { IBook } from "@/interfaces/Ibook";
import { HOST_API } from "@/config/ENV";
import { useUserStore } from "@/store/useUserStore";

export default function InstagramStylePage() {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    // Función para obtener los libros del backend
    const token = useUserStore.getState().user?.token;
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${HOST_API}/books/list`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }

        const data = await response.json();
        console.log(data);

        // Ordenar los libros por ID de manera descendente
        const sortedBooks = data.sort(
          (a: IBook, b: IBook) => b.book_id - a.book_id
        );

        // Actualizar el estado con los libros ordenados
        setBooks(sortedBooks);
      } catch (error) {
        console.error("Error al obtener los libros:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="grid grid-cols-1 relative mx-auto px-4 my-10">
      {/* Sección de cards reutilizando el componente CardsSection */}
      <CardsSection books={books} />
    </div>
  );
}
