// components/user-button.tsx
import LineaBottom from './linea-bottom';
import OptionsUser from './options-user';
import { useUserStore } from '@/store/useUserStore';
import { IOptionsUser } from '@/interfaces/interfaces';
import { useRouter } from 'next/navigation';
//assets
import PersonIcon from '/public/assets/person.svg';
import LogoutIcon from '/public/assets/logout.svg';
import BookIcon from '/public/assets/book.svg';
import AmigosIcon from '/public/assets/choquemanos.svg';

export default function UserButton({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { userLogout } = useUserStore();
	const router = useRouter();

	const handlerConfirm = () => {
		return confirm('¿Estás seguro de que quieres cerrar sesión?') && userLogout();
	};

	const options: IOptionsUser[] = [
		{
			title: 'Perfil',
			href: '/profile',
			icon: PersonIcon,
		},
		{
			title: 'Amigos',
			href: '/profile/friends',
			icon: AmigosIcon,
		},
		{
			title: 'Mis Libros',
			href: '/profile/library',
			icon: BookIcon,
		},
		{
			title: 'Cerrar sesión',
			icon: LogoutIcon,
			handlerClick: handlerConfirm,
		},
	];

	const handleOptionClick = (href?: string, handler?: () => void) => {
		if (handler) {
			handler(); // Llama al handler si existe (por ejemplo, para cerrar sesión)
		} else if (href) {
			router.push(href); // Redirige a la ruta proporcionada
		}
		setIsOpen(false); // Cierra el menú desplegable
	};

	return (
		<div className='flex flex-col group gap-1'>
			<div className='flex gap-3 items-center'>
				<button className='flex gap-3 items-center' onClick={() => setIsOpen(!isOpen)}>
					<PersonIcon />
					Perfil
				</button>
			</div>
			{isOpen ? (
				<LineaBottom pathname={'/'} name='profile' />
			) : (
				<LineaBottom pathname='' name='profile' />
			)}
			{options.length > 0 && (
				<OptionsUser 
					options={options} 
					isOpen={isOpen} 
					setIsOpen={setIsOpen} 
					onClick={handleOptionClick} // Pasar onClick aquí
				/>
			)}
		</div>
	);
}
