import { Metadata } from "next";
import { SignUpForm } from "./sign-up-form";
import { Role } from "@/lib/utils";


export const metadata: Metadata = {
    title: "Sign in",
    openGraph: {
        images: [{ url: "" }],
    },
};

export default function SignUp() {
    return (
        <main className="flex bg-foreground min-h-svh items-center justify-center px-4">
            <SignUpForm role={Role.ADMIN} />
        </main>
    );
}
