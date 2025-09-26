import SpotifyProvider from 'next-auth/providers/spotify';
import NextAuth from 'next-auth';

const handler = NextAuth({
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID!,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
		}),
	],
});

export { handler as GET, handler as POST };
