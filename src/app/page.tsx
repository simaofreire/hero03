import Button from '@/components/button';
import { Input } from '@/components/input';

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<div className="flex  w-full h-full flex-1 mx-auto justify-center items-center">
				<div className="bg-secondary max-w-[580px] w-full p-4 rounded-lg">
					<div className="space-y-4">
						<div className="flex justify-center">
							<span>Ingressar</span>
							<span>Novareunião</span>
						</div>
						<Input placeholder="Digite o código da reunião" type="text" />
						<Input placeholder="Digite o código da reunião" type="text" />
						<Button title="Entrar" type="submit" />
					</div>
				</div>
			</div>
		</main>
	);
}
