import Button from '@/components/button';
import { Input } from '@/components/input';

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<div className="flex flex-col max-w-[580px] w-full h-full flex-1 mx-auto justify-center">
				<div className="flex justify-center">
					<span>Ingressar</span>
					<span>Novareunião</span>
				</div>
				<div className="flex flex-col">
					<Input placeholder="Digite o código da reunião" type="text" />
					<Input placeholder="Digite o código da reunião" type="text" />
					<Button title="Entrar" type="submit" />
				</div>
			</div>
		</main>
	);
}
