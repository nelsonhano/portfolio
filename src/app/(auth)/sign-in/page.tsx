import type { Metadata } from "next";
import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = {
    title: "Sign in",
};

export default function SignIn({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const redirect =
        typeof searchParams.redirect === "string" ? searchParams.redirect : null;

    return (
        <main className="flex bg-foreground min-h-svh items-center justify-center px-4">
            <SignInForm redirect={redirect} />
        </main>
    );
}
