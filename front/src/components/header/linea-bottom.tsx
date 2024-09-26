export default function LineaBottom({ pathname, name }: { pathname: string; name: string }) {
	return (
		<div
			className={`border-1 border-b-2 ${
				pathname.split('/')[1] === name ? 'border-gray-950' : 'border-transparent'
			} w-full transition-all duration-500 ease-in-out group-hover:border-gray-950 rounded-sm `}
		></div>
	);
}
