export default function Screen({ children }: { children: React.ReactNode }) {
	return <div className='max-w-[1440px] w-full mx-auto px-8'>{children}</div>;
}
