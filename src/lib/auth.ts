import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";

import prisma from "./prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true, 
    },
    user: {
        additionalFields: {
            username: {
                type: 'string',
                required: true,
            },
            role: {
                type: 'string',
                required: true,
            }
        },
    }, 
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24 // 1 day (every 1 day the session expiration is updated)
    },
    socialProviders: {
    github: {
        clientId: process.env.GITHUB_CLIENT_ID as string, 
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    }, 
    }, 
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user