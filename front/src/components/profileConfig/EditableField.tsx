import { useState, useEffect } from 'react';
import Edit from "../../../public/assets/edit.svg"; // Ícono de edición

interface EditableFieldProps {
  value: string;
  clave: string;
  isTextArea?: boolean;
  maxLength?: number;
  apiEndpoint: string; // Añadimos un endpoint para la petición
  token: string | undefined; // Añadimos el token para autenticación
}

export default function EditableField({
  value,
  clave,
  isTextArea = false,
  maxLength = 200,
  apiEndpoint,  // Endpoint para la petición PUT
  token, // Token para autenticación
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false); // Estado para mostrar feedback de guardado

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  // Función para mapear el clave a las propiedades correctas en el cuerpo de la solicitud
  const mapclaveToField = (clave: string) => {
    switch (clave.toLowerCase()) {
      case 'name':
        return 'name';
      case 'description':
        return 'description';
      default:
        return clave.toLowerCase(); // Por defecto, usa el clave en minúsculas
    }
  };

  const handleSave = async () => {
    setIsSaving(true); // Indicar que el guardado está en proceso
  
    // Crear el objeto del body de la petición
    const requestBody = { [clave.toLowerCase()]: inputValue };
  
    // Depurar el contenido del body **antes de la solicitud**
    console.log("Request Body enviado al backend:", requestBody);
  
    try {
      // Realizar la petición PUT
      const response = await fetch(apiEndpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody), // Enviar el campo con la clave correspondiente
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error al actualizar:', errorData);
        throw new Error('Error al actualizar');
      }
  
      const updatedData = await response.json();
      console.log('Datos actualizados con éxito:', updatedData);
      setIsEditing(false); // Salir del modo edición
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    } finally {
      setIsSaving(false); // Finaliza el estado de guardado
    }
  };
  return (
    <div className="relative group my-4">
      {isEditing ? (
        <div className="flex flex-col w-full">
          {isTextArea ? (
            <>
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                maxLength={maxLength}
                className="outline outline-2 outline-black-300 border-gray-300 bg-white-300 rounded-md w-full resize-none"
                rows={4}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {maxLength - inputValue.length} caracteres restantes
              </div>
            </>
          ) : (
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="outline outline-2 outline-black-300 border-gray-300 bg-white-300 rounded-md w-full"
            />
          )}
          <button
            onClick={handleSave}
            disabled={isSaving} // Desactivar el botón mientras guarda
            className="text-p mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 disabled:opacity-50"
          >
            {isSaving ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      ) : (
        <div className="flex items-center w-full">
          <span className="break-words w-full">{inputValue}</span>
          <Edit
            onClick={handleEditClick}
            className="hover:bg-white-500 rounded-full ml-4 w-6 h-6 text-gray-400 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}
