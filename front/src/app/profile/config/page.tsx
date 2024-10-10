"use client";
import { useState } from 'react';
import SettingsIcon from "/public/assets/settings.svg";
import { useUserStore } from '@/store/useUserStore';

export default function ProfileConfig() {
	const { user: userStore } = useUserStore();
	const email = userStore?.email || '';
	
	const [user, setUser] = useState({
		email: email,
		password: '', // Mantenemos en blanco para evitar mostrar la contraseña real
	});

	const [newEmail, setNewEmail] = useState(user.email);
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSave = () => {
		// Validar que las contraseñas coincidan antes de guardar
		if (newPassword !== confirmPassword) {
			alert('Las contraseñas no coinciden');
			return;
		}
		// Lógica para guardar el email y la nueva contraseña
		setUser({
			...user,
			email: newEmail,
			password: newPassword,
		});
		alert('Perfil actualizado correctamente');
	};

	return (
		<div className="container mx-auto m-10 text-center p-8 border-2 rounded-xl">
			<SettingsIcon className="absolute right-20  w-20 h-32" />
			<h2 className="text-h2 mb-6">Configuración del Perfil</h2>

			{/* Formulario de edición */}
			<div className="flex flex-col items-center gap-6">
				{/* Campo de email */}
				<div className="w-full flex flex-col">
					<label htmlFor="email" className="text-pBold mb-2 text-left">Correo Electrónico</label>
					<input
						type="email"
						id="email"
						value={newEmail}
						onChange={(e) => setNewEmail(e.target.value)}
						className="border border-black p-2 rounded-md focus:ring focus:ring-black"
					/>
				</div>

				{/* Campo de nueva contraseña */}
				<div className="w-full flex flex-col">
					<label htmlFor="new-password" className="text-pBold mb-2 text-left">Nueva Contraseña</label>
					<input
						type="password"
						id="new-password"
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						className="border border-black p-2 rounded-md"
					/>
				</div>

				{/* Confirmación de contraseña */}
				<div className="w-full flex flex-col">
					<label htmlFor="confirm-password" className="text-pBold mb-2 text-left">Confirmar Contraseña</label>
					<input
						type="password"
						id="confirm-password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
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
