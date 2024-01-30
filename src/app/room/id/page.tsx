import Chat from '@/components/chat';

export default function Id({ ...params }) {
	console.log(params);
	return (
		<div className="h-screen">
			<div className="flex h-[80%] justify-between">
				<div className="md:w-{85%] w-full m-3">
					<div className="grid md:grid-cols-2 grid-cols-1 gap-8">
						<div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
							<video className="h-full w-full"></video>
							<span className="absolute bottom-3">Simão</span>
						</div>
						<div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
							<video className="h-full w-full"></video>
							<span className="absolute bottom-3">Simão</span>
						</div>
						<div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
							<video className="h-full w-full"></video>
							<span className="absolute bottom-3">Simão</span>
						</div>
						<div className="bg-gray-950 w-full rounded-md h-full p-2 relative">
							<video className="h-full w-full"></video>
							<span className="absolute bottom-3">Simão</span>
						</div>
					</div>
				</div>
				<Chat />
			</div>
		</div>
	);
}
