export default function Screen({ children }: { children: React.ReactNode }) {
	return <div className='max-w-[1440px] mx-auto px-4'>{children}</div>;
}
