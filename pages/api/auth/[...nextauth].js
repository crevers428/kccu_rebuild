import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    {
        id: "wca",
        name: "wca",
        type: "oauth",
        authorization: "https://www.worldcubeassociation.org/oauth/authorize?scope=",
        token: "https://www.worldcubeassociation.org/oauth/token",
        userinfo: "https://www.worldcubeassociation.org/api/v0/me",
        profile(profile) {
            return {
                id: profile.me.wca_id,
                name: profile.me.name,
                email: profile.me.wca_id,
                image: profile.me.avatar.url
            }
        },
        clientId: process.env.WCA_APP_ID,
        clientSecret: process.env.WCA_APP_SECRET,
        secret: process.env.SECRET,
        jwt: {
            secret: process.env.SECRET,
            encryption: true,
        },
    }
  ]
})