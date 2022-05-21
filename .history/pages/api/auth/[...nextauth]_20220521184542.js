import NextAuth from "next-auth"
import RedditProvider from "next-auth/providers/reddit";
import DiscordProvider from "next-auth/providers/discord";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
        clientId: process.env.REDDIT_CLIENT_ID,
        clientSecret: process.env.REDDIT_CLIENT_SECRET
    }),
    DiscordProvider({
        clientId: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET
      })
    // ...add more providers here
  ],
})