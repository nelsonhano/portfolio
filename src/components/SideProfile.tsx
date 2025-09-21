import { BackgroundGradient } from './ui/background-gradient';
import { CometCard } from './ui/comet-card';
import Image from 'next/image';
import Link from 'next/link';
import Facebook from '@/svg/Facebook';
import LinkedIn from '@/svg/LinkedIn';
import Instagram from '@/svg/Instagram';
import Github from '@/svg/Github';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

export default function SideProfile() {
    return (
        <BackgroundGradient className="rounded-[22px] gap-4 p-4 bg-black dark:bg-zinc-900">
            <CometCard className="w-full ">
                <Image
                    src="/profile.jpg"
                    width={128}
                    height={128}
                    alt="User"
                    className="w-full mx-auto h-72 border border-ring rounded-2xl mb-4"
                />
                <div className="flex w-2/3 gap-4 justify-center items-center mx-auto ">
                    <div className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </div>

                    <p className="text-white">Available for work </p>
                </div>
                <h1 className="text-2xl font-bold text-center text-white">
                    Koinyan Nelson
                </h1>

                <div className="mt-4 mx-auto items-center justify-center flex gap-2">
                    <Link
                        href="https://github.com/nelsonhano?tab=repositories"
                        target="_blank"
                        className="text-white bg-accent-foreground p-1 rounded-xl"
                    >
                        <Facebook />
                    </Link>
                    <Link
                        href="https://github.com/nelsonhano?tab=repositories"
                        target="_blank"
                        className="text-white bg-accent-foreground p-1 rounded-xl"
                    >
                        <LinkedIn />
                    </Link>
                    <Link
                        href="https://github.com/nelsonhano?tab=repositories"
                        target="_blank"
                        className="text-white bg-accent-foreground p-1 rounded-xl"
                    >
                        <Instagram />
                    </Link>
                    <Link
                        href="https://github.com/nelsonhano?tab=repositories"
                        target="_blank"
                        className="text-white bg-accent-foreground p-1 rounded-xl"
                    >
                        <Github />
                    </Link>
                </div>

                <div className="flex mx-auto justify-center gap-15 w-full">
                    <Button asChild>
                        <Link href="m m" className="w-2/5 mt-6 py-2 px-4" target="_blank">
                            <Download />
                            <p>Download CV</p>
                        </Link>
                    </Button>

                    <Button asChild className="bg-green-600">
                        <Link href="m m" className="w-2/5 mt-6" target="_blank">
                            <Send />
                            <p>Contact Me</p>
                        </Link>
                    </Button>
                </div>
            </CometCard>
        </BackgroundGradient>
    );
}
