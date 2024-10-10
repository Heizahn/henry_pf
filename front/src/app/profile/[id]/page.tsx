"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IBook } from '@/interfaces/Ibook';
import { IUser } from '@/interfaces/interfaces';
import { useUserStore } from '@/store/useUserStore';
import { HOST_API } from '@/config/ENV';
import ProfileDetailsEdit from '@/components/profileConfig/ProfileDetailsEdit';

export default function ProfilePage({params}: {params: {id: string}}) {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [books, setBooks] = useState<IBook[]>([]);

  const {user} = useUserStore();
  const token = user?.token;

  // Fetch user data
  useEffect(() => {
    if (params.id && token) { 
      const fetchUserData = async () => {
        try {
          const response = await fetch(`${HOST_API}/users/${params.id}`, {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }

          const user = await response.json();
          setUserData(user);
        } catch (error) {
          if (error instanceof Error) {
            console.error(error.message);
          }
        }
      };

      fetchUserData();
    }
  }, [params.id, token]);

  // Fetch books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${HOST_API}/users/${params.id}/books`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
    
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
    
        const booksData = await response.json();
        
        // Verifica si booksData es un array o un objeto único
        if (Array.isArray(booksData)) {
          setBooks(booksData); // Si es array, actualiza normalmente
        } else {
          setBooks([booksData]); // Si no es un array, lo convierte en array
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    if (params.id && token) {
      fetchBooks();
    }
  }, [params.id, token]);

  return (
    <div className="relative container mx-auto text-center my-10 border-2 rounded-xl">
      <div className="flex items-center justify-between py-16 px-12 border-b-2 bg-white-300">
        <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-md bg-white">
          {userData?.photoUrl && (
            <Image src={userData.photoUrl || 'https://th.bing.com/th/id/OIP.2KWvyGN-HqjoxRX_UoY0zQHaHa?rs=1&pid=ImgDetMain'} alt="Profile Image" layout="fill" objectFit="cover" />
          )}
        </div>

        <div className="w-1/2 text-left mr-12">
          <ProfileDetailsEdit
            name={userData?.name || 'Nombre no disponible'}
            description={userData?.description || 'Escribe algo para tu perfil...'}
          />
        </div>

        <div className="flex rounded-md gap-4">
          <Link href={`/profile/${params.id}/books`} className="flex flex-col text-semiSmall border-2 border-transparent hover:shadow-md hover:transition-all p-2 rounded-md">
            <span className="text-h5 w-full text-center">{books.length}</span>
            Libros
          </Link>
          <Link href={`/profile/${params.id}/followers`} className="flex flex-col text-semiSmall border-2 border-transparent hover:shadow-md hover:transition-all p-2 rounded-md">
            <span className="text-h5 w-full text-center">{userData?.friends || 0}</span>
            Amigos
          </Link>
        </div>
      </div>

      <div className="m-12 mb-16">
        <h2 className="text-h2 font-semibold mb-16 text-start border-b-8 inline-block">Mis Lecturas</h2>
        <ul className="list-disc grid grid-cols-3 gap-12 items-center justify-evenly list-none text-left w-full">
          {books.map((book) => (
            <li className="flex flex-col items-center justify-evenly gap-4 text-center w-full h-content rounded-md py-8 bg-white-300" key={book.book_id}>
              <img className="w-40 h-40 border-black object-cover rounded-md" src={book.photoUrl} alt={book.title} />
              <div className="flex flex-col justify-evenly px-4">
                <span className="text-pBold text-black-700">{book.title}</span>
                <Link href={`/library/${book.book_id}`} className="text-blue hover:underline text-semiSmallBold">
                  Leer Prólogo
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
