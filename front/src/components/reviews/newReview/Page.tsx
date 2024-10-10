'use client';
import { useState } from 'react';
import { HOST_API } from '@/config/ENV';
import { useUserStore } from '@/store/useUserStore';

interface AddReviewProps {
  bookId: string; // ID del libro
  onReviewAdded: () => void; // Callback para refrescar las reviews tras añadir una nueva
}

export default function AddReview({ bookId, onReviewAdded }: AddReviewProps) {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { user } = useUserStore(); // Obtener el usuario autenticado

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Comprobamos que el usuario esté autenticado
    if (!user?.token) {
      setError('Es necesario iniciar sesión para dejar una reseña.');
      console.warn('No hay token de usuario disponible');
      return;
    }
    
    // Validamos que la calificación esté dentro del rango permitido
    if (rating < 1 || rating > 5) {
      setError('La calificación debe estar entre 1 y 5.');
      console.warn('Calificación fuera de rango:', rating);
      return;
    }

    try {
      setLoading(true);

      // Creación del objeto reviewData con datos de prueba
      const reviewData = {
        user_id: user.userId || 1, // Usar el ID real del usuario si está disponible
        book_id: parseInt(bookId), // Asegurarnos de que bookId sea un número
        content: content, // Contenido ingresado por el usuario
        rating: rating, // Calificación ingresada por el usuario
        reviewDate: new Date().toLocaleDateString('en-US') // Formato de fecha MM/DD/YYYY
      };

      console.log('Datos de la reseña a enviar:', reviewData); // Imprimir los datos que se enviarán

      // Realizamos la solicitud POST para agregar la reseña
      const response = await fetch(`${HOST_API}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`, // Token del usuario autenticado
        },
        body: JSON.stringify(reviewData),
      });

      // Manejo de errores en la respuesta
      if (!response.ok) {
        const errorDetails = await response.json();
        console.error('Error en la respuesta:', errorDetails); // Mostrar detalles del error
        throw new Error('Error al añadir la reseña');
      }

      // Limpiar el formulario y refrescar la lista de reseñas
      setContent(''); 
      setRating(0);
      setError('');
      onReviewAdded(); // Callback para refrescar las reseñas
    } catch (error) {
      console.error('Error en la solicitud:', error); // Mostrar detalles del error
      setError('Hubo un error al enviar la reseña.'); // Mensaje de error para el usuario
    } finally {
      setLoading(false); // Finalizar carga
    }
  };

  return (
    <form className="my-4 p-4 border rounded-md" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">Agregar una reseña</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="mb-4">
        <label htmlFor="rating" className="block font-semibold mb-2">Calificación (1-5)</label>
        <input
          id="rating"
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          min={1}
          max={5}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block font-semibold mb-2">Tu reseña</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md"
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar Reseña'}
      </button>
    </form>
  );
}
