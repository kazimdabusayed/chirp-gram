import SideNav from '@/components/SideNav';

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen relative flex-col md:flex-row md:overflow-hidden">
			<div className="w-20 flex-none lg:w-64 md:border-r">
				<SideNav />
			</div>
		</div>
	);
}
