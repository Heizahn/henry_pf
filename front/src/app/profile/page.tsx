"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useUserStore } from '@/store/useUserStore';
import { useEffect, useState } from 'react';
import { IBook } from '@/interfaces/Ibook';
import SettingsIcon from "/public/assets/settings.svg";
import { IUser } from '@/interfaces/interfaces';
import ProfileDetailsEdit from '@/components/profileConfig/ProfileDetailsEdit';

export default function ProfilePage() {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [books, setBooks] = useState<IBook[]>([]);
  const {  user: userStore } = useUserStore();

  useEffect(() => {
    const userId = userStore?.userId;

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userStore?.token}`
          }
        });
        const user = await response.json();
        setUserData(user);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
    };

    fetchUserData();

    if (userStore?.books && userStore.books.length > 0) {
      setBooks(userStore.books);
    }
  }, [userStore]);

  // Manejadores para actualizar el nombre y la descripción
  //const handleNameChange = (newName: string) => {
  //  setUserData(prev => prev ? { ...prev, name: newName } : null);
  //};

  //const handleDescriptionChange = (newDescription: string) => {
  //  setUserData(prev => prev ? { ...prev, description: newDescription } : null);
  //};

  return (
    <div className="relative container mx-auto text-center my-10 border-2 rounded-xl">
      <div className="flex items-center justify-between py-16 px-12 border-b-2 bg-white-300">
        <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-md bg-white">
          <Image src={userData?.photoUrl || '/default-profile.jpg'} alt="Profile Image" layout="fill" objectFit="cover" />
        </div>

        <div className="w-1/2 text-left mr-12">
          {/* Renderizamos el componente que maneja la edición del nombre y la descripción */}
          <ProfileDetailsEdit
            name={userData?.fullName || ''}
            description={userData?.description || 'Escribe algo para tu perfil...'}
          />
        </div>

        <div className="flex rounded-md gap-4">
          <Link href="/profile/books" className="flex flex-col text-semiSmall border-2 border-transparent hover:shadow-md hover:transition-all p-2 rounded-md">
            <span className="text-h5 w-full text-center">{books.length}</span>
            Libros
          </Link>
          <Link href="/profile/followers" className="flex flex-col text-semiSmall border-2 border-transparent hover:shadow-md hover:transition-all p-2 rounded-md">
            <span className="text-h5 w-full text-center">{0}</span>
            Seguidores
          </Link>
          <Link href="/profile/following" className="flex flex-col text-semiSmall border-2 border-transparent hover:shadow-md hover:transition-all p-2 rounded-md">
            <span className="text-h5 w-full text-center">{ 0}</span>
            Seguidos
          </Link>
        </div>

        <Link href="/profile/config" className="absolute text-center right-4 top-3 text-pBold hover:shadow-inner-black transition-shadow duration-400 p-1.5 rounded-full">
          <SettingsIcon />
        </Link>
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
