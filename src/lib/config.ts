const config = {
    env: {
        apiEndPoint: process.env.BETTER_AUTH_URL as string,
        prodApiEndPoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT as string,
        imageKit: {
            imgKitEndPoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT as string,
            imgPubKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY as string,
            imgPrivKey: process.env.IMAGE_PRIVATE_KEY as string,
        },
        betterAuth: {
            betterAuthSecret: process.env.BETTER_AUTH_SECRET as string,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
        database:{
            dbUrl: process.env.DATABASE_URL as string,
        }
    }
}

export default config;