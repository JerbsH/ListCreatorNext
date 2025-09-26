'use client';
import { signIn, signOut } from 'next-auth/react';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 gap-8">
			<div className="flex flex-col gap-4 max-w-lg bg-neutral-600/30 p-8 rounded-lg">
				<p className="text-center  font-semibold text-2xl"></p>
				<p className="text-center font-semibold text-2xl">
					Get started by logging in with Spotify
				</p>
				<button
					onClick={() => {
						signIn();
					}}
					className="bg-[#1ED760] hover:bg-[#1bc256] text-white font-semibold py-2 px-4 rounded-md mx-auto transition-colors duration-200"
				>
					Login with Spotify
				</button>
			</div>
		</div>
	);
}
