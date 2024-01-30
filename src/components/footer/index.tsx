'use client';

import { useState } from 'react';

export default function Footer() {
	const [isMuted, setIsMuted] = useState(false);
	const [isCameraOff, setIsCameraOff] = useState(false);
	const [isScreenSharing, setIsScreenSharing] = useState(false);

	const date = new Date();
	const hours = date.getHours().toString().padStart(2, '0') + ':';
	const minutes = date.getMinutes().toString().padStart(2, '0');

	return (
		<div className="bottom-0 bg-black py-6 w-full">
			<div className="grid grid-cols-3">
				<div className="flex items-center">
					<p className="text-xl">{hours + minutes}</p>
				</div>
				<div className="flex space-x-6 justify-center">
					<button type="button" onClick={() => setIsMuted(!isMuted)}>
						{isMuted ? (
							<span className="material-symbols-outlined  h-10 w-16 p-2 text-white  rounded-md cursor-pointer text-center bg-red-500 hover:bg-red-400 duration-150">
								mic_off
							</span>
						) : (
							<span className="material-symbols-outlined h-10 w-16 p-2 text-white bg-gray-900 rounded-md cursor-pointer text-center hover:bg-gray-600 duration-150">
								mic
							</span>
						)}
					</button>

					<button type="button" onClick={() => setIsCameraOff(!isCameraOff)}>
						{isCameraOff ? (
							<span className="material-symbols-outlined h-10 w-16 p-2 text-white  rounded-md cursor-pointer text-center bg-red-500 hover:bg-red-400 duration-150">
								videocam_off
							</span>
						) : (
							<span className="material-symbols-outlined h-10 w-16 p-2 text-white bg-gray-900 rounded-md cursor-pointer text-center hover:bg-gray-600 duration-150">
								videocam
							</span>
						)}
					</button>

					<button type="button" onClick={() => setIsScreenSharing(!isScreenSharing)}>
						{isScreenSharing ? (
							<span className="material-symbols-outlined h-10 w-16 p-2 text-white rounded-md cursor-pointer text-center bg-red-500 hover:bg-red-400 duration-150">
								desktop_access_disabled
							</span>
						) : (
							<span className="material-symbols-outlined h-10 w-16 p-2 text-white bg-gray-900 rounded-md cursor-pointer text-center hover:bg-gray-600 duration-150">
								desktop_windows
							</span>
						)}
					</button>

					<button type="button">
						<span className="material-symbols-outlined h-10 w-16 p-2 text-white bg-primary rounded-md cursor-pointer text-center hover:bg-red-500 duration-150">
							call
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
