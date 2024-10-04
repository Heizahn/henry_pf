"use client"
import { useState } from 'react';
import Image from 'next/image';
import SettingsIcon from "/public/assets/settings.svg";

export default function ProfileConfig() {
	const [user, setUser] = useState({
		name: 'Juan Pérez',
		profileImage: '/path-to-profile-image.jpg',
		description: 'Soy un apasionado de la lectura...',
	});

	const [newName, setNewName] = useState(user.name);
	const [newDescription, setNewDescription] = useState(user.description);
	const [newProfileImage, setNewProfileImage] = useState(user.profileImage);

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			const reader = new FileReader();
			reader.onload = () => setNewProfileImage(reader.result as string);
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const handleRemoveImage = () => {
		setNewProfileImage(user.profileImage); // Restablecer a la imagen original del perfil
	};

	const handleSave = () => {
		// Lógica para guardar el perfil actualizado, puede ser una llamada a la API
		setUser({
			name: newName,
			description: newDescription,
			profileImage: newProfileImage,
		});
		alert('Perfil actualizado correctamente');
	};

	return (
		<div className="container mx-auto m-10 text-center p-8 border-2 rounded-xl">
            <SettingsIcon className="absolute right-20  w-32 h-32" />
			<h2 className="text-h2 mb-6">Configuración del Perfil
            </h2>

			{/* Formulario de edición */}
			<div className="flex flex-col items-center gap-6">
				{/* Subir nueva foto de perfil */}
				<div className="flex flex-col items-center">
					<Image
						src={newProfileImage}
						alt="Foto de perfil"
						width={128}
						height={128}
						className="rounded-full shadow-md"
					/>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageUpload}
						className="mt-4"
					/>
					{/* Botón para eliminar la imagen seleccionada */}
					{newProfileImage !== user.profileImage && (
						<button
							onClick={handleRemoveImage}
							className="bg-red-500 text-white p-2 rounded-md mt-4 hover:bg-red-600 transition-colors"
						>
							Eliminar Imagen
						</button>
					)}
				</div>

				{/* Campo de nombre */}
				<div className="w-full flex flex-col">
					<label htmlFor="name" className="text-pBold mb-2 text-left ">Nombre</label>
					<input
						type="text"
						id="name"
						value={newName}
						onChange={(e) => setNewName(e.target.value)}
						className="border border-black p-2 rounded-md focus:ring focus:ring-black"
					/>
				</div>

				{/* Campo de descripción */}
				<div className="w-full flex flex-col">
					<label htmlFor="description" className="text-pBold mb-2 text-left">Descripción</label>
					<textarea
						id="description"
						value={newDescription}
						onChange={(e) => setNewDescription(e.target.value)}
						className="border border-black p-2 rounded-md"
					/>
				</div>

				{/* Botón de guardar */}
				<button
					onClick={handleSave}
					className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 transition-colors"
				>
					Guardar cambios
				</button>
			</div>
		</div>
	);
}
