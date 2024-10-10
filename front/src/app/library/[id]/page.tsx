"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HOST_API } from '@/config/ENV';
import { IBook } from '@/interfaces/Ibook';
import { IReview } from '@/interfaces/Ibook';
import { useUserStore } from '@/store/useUserStore';
import AddReview from '@/components/reviews/newReview/Page';

export default function Page({ params }: { params: { id: string } }) {
  const [book, setBook] = useState<IBook | null>(null);
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const { user } = useUserStore();
  const userId = user?.userId;
  const token = user?.token;

        const HandlerefreshReviews = async () => {
            setLoadingReviews(true);
            
        };

  useEffect(() => {
    if (token) {
        const fetchBookData = async () => {
            try {
              const response = await fetch(`${HOST_API}/books/${params.id}`, {
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              });
        
              if (!response.ok) {
                throw new Error('Error al obtener los datos del libro');
              }
        
              const data: IBook = await response.json();
              setBook(data);
            } catch (error) {
              console.error('Error fetching book data:', error);
            }
          };
  
          const fetchReviews = async () => {
            try {
              const response = await fetch(`${HOST_API}/reviews/books/${params.id}`, {
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              });
        
              if (!response.ok) {
                throw new Error('Error al obtener las reseñas');
              }
        
              const data = await response.json();
              setReviews(data);
            } catch (error) {
              console.error('Error fetching reviews:', error);
            } finally {
              setLoadingReviews(false);
            }
          };
  
      fetchBookData();
      fetchReviews();
    }
  }, [params.id, token]);

  const handleSaveBook = async () => {
    if (!book || !userId) return;

    try {
      const response = await fetch(`${HOST_API}/users/book-list/${params.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId: userId }),
      });

      if (response.ok) {
      } else {
        throw new Error('Error al guardar el libro');
      }
    } catch (error) {
      console.error('Error saving the book:', error);
    }
  };
  const handlePdfDownload = async () => {
    try {
      // Hacemos la petición al servidor para obtener el PDF
      const response = await fetch(`${HOST_API}/pdf/info`); // Cambia la URL por la correcta
      
      // Verificamos que la respuesta sea correcta
      if (!response.ok) {
        throw new Error('Error al descargar el PDF');
      }
  
      // Convertimos la respuesta en un Blob (formato adecuado para archivos binarios como PDF)
      const blob = await response.blob();
      
      // Creamos una URL temporal para el archivo
      const url = window.URL.createObjectURL(blob);
      
      // Creamos un enlace temporal
      const link = document.createElement('a');
      link.href = url;
      link.download = 'archivo.pdf'; // Puedes personalizar el nombre del archivo
      
      // Simulamos el clic en el enlace para iniciar la descarga
      document.body.appendChild(link); // Añadimos el enlace al DOM (necesario para Firefox)
      link.click();
      
      // Eliminamos el enlace del DOM y liberamos la URL temporal
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al descargar el PDF:', error);
    }
  };
  
  const handleClick = () => {
    handleSaveBook();
    handlePdfDownload(); // Aquí llamas a la otra función
  };
  

  if (!book) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div>
      <div className='w-4/5 h-4/5 grid grid-cols-2 m-auto my-6 py-6 shadow-xl rounded-md bg-white-300'>
        <div className='w-full h-full relative flex items-center justify-center border-r-2 px-6'>
          <div className='h-[500px] w-[200px] object-contain'></div>
          <Image src={book.photoUrl} alt={book.title} fill={true} objectFit='contain' />
        </div>
        <div className='w-full h-full flex flex-col gap-4'>
          <h1 className='text-h2 border-b-2 px-6'>{book.title}</h1>
          <p className='text-h3 text-black-500 px-6 mb-5'>{book.author}</p>
          <div className='px-6'>
            {book.categories.map((category) => (
              <Link href={`/library/categories/${category.name}`} key={category.id}>
                <button className='w-fit px-4 py-1 rounded-md text-semiSmall border border-white-700 m-1 hover:bg-white-500'>
                  {category.name}
                </button>
              </Link>
            ))}
          </div>
          <p className='text-p leading-relaxed px-6'>{book.description}</p>
          <div className='flex items-center justify-center'>
            <button
              className='w-full mx-6 p-2 bg-blue text-pBold text-white rounded-md'
              type='button'
              onClick={handleClick}
              
            >
              Descargar PDF
            </button>
          </div>
        </div>
      </div>

      {/* Sección de reseñas */}
      <div className='mt-8 w-4/5 m-auto my-6'>
        <h2 className='text-h2 border-b-2 px-6 mb-4'>Reseñas</h2>
        {loadingReviews ? (
          <p>Cargando reseñas...</p>
        ) : reviews.length > 0 ? (
          <ul className='space-y-4'>
            {reviews.map((review) => (
              <li key={review.review_id} className='border p-4 rounded-lg shadow-md'>
                <a href={`/profile/${review.user_id}`} className='font-bold hover:underline'>{review.user.name}</a>
                <p className='text-gray-600'>{review.content}</p>
                <span className='text-sm text-gray-500'>Calificación: {review.rating} / 5</span>
                <p className='text-xs text-gray-400'>
                  Fecha de la reseña: {new Date(review.review_date).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay reseñas disponibles para este libro.</p>
        )}

        {/* Formulario para agregar una nueva reseña */}
        <AddReview bookId={params.id} onReviewAdded={HandlerefreshReviews} />
      </div>
    </div>
  );
}
