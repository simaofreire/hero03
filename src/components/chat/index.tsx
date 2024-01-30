export default function Chat() {
	return (
		<div className="bg-gray-900 px-4 pt-4 w-full md:w-[15%] hidden md:flex rounded-md m-3 h-full">
			<div className="relative h-full w-full">
				<div className="bg-gray-950 rounded p-2">
					<div className="flex items-center text-pink-400 space-x-2">
						<span>Simão Pedro Freire</span>
						<span>10:00</span>
					</div>
					<div className="mt-5 text-sm">
						<p>text</p>
					</div>
				</div>

				<form className="absolute bottom-2 w-full">
					<div className="flex relative">
						<input type="text" name="" id="" className="px-3 py-2 bg-gray-950 rounded-md w-full" />
						<span className="material-symbols-outlined w-20 h-20 absolute right-[-40px] top-2 cursor-pointer">
							send
						</span>
					</div>
				</form>
			</div>
		</div>
	);
}
