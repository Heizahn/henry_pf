import Screen from '@/components/screen/screen';
import SearchBooks from '@/components/SearchBar';

export default function Page() {
	return (
		<Screen>
			<div>
				<h1>Home</h1>
				<SearchBooks />
			</div>
		</Screen>
	);
}
