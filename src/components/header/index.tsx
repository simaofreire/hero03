import Image from 'next/image';
import Container from '../container';

export default function Header() {
	return (
		<div className=" bg-gray-1000 p-4">
			<Container>
				<div className="flex justify-between">
					<Image alt="talk to me" src={'/logo.svg'} width={120} height={120} />
					<Image alt="logo" src={'/hero.svg'} width={60} height={60} />
				</div>
			</Container>
		</div>
	);
}
