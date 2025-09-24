import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { nextCookies } from "better-auth/next-js";

import { auth } from "./auth";

export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>(), nextCookies()],
});

export const { signIn, signOut, signUp: { email }, useSession } = authClient;