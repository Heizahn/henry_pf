import LineaBottom from './linea-bottom';
import PersonIcon from '/public/assets/person.svg';
import OptionsUser from './options-user';
import { useUserStore } from '@/store/useUserStore';
import { IOptionsUser } from '@/interfaces/interfaces';
import LogoutIcon from '/public/assets/logout.svg';

export default function UserButton({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	const { userLogout } = useUserStore();

	const handlerConfirm = () => {
		return confirm('¿Estás seguro de que quieres cerrar sesión?') && userLogout();
	};

	const options: IOptionsUser[] = [
		// { title: 'Contactos' },
		// { title: 'Notificaciones' },
		// { title: 'Mis Donaciones' },
		// { title: 'Configuraciones' },
		{
			title: 'Cerrar sesión',
			icon: LogoutIcon,
			handlerClick: handlerConfirm,
		},
	];

	return (
		<div className='flex flex-col group gap-1'>
			<div className='flex gap-3 items-center'>
				<button className='flex gap-3 items-center' onClick={() => setIsOpen(!isOpen)}>
					<PersonIcon />
					Perfil
				</button>
			</div>
			{isOpen ? (
				<LineaBottom pathname={'/profile'} name='profile' />
			) : (
				<LineaBottom pathname='' name='profile' />
			)}
			{options?.length && (
				<OptionsUser options={options} isOpen={isOpen} setIsOpen={setIsOpen} />
			)}
		</div>
	);
}
