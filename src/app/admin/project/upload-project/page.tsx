import { BackgroundGradient } from "@/components/ui/background-gradient";
import ProjectUploader from "@/components/admin/ProjectUploader";

export default function page() {
    return (
        <div className="w-full min-h-screen md:p-4 flex flex-col items-center justify-center mx-auto">
            <p className="text-white font-semibold text-2xl">c j </p>
            <BackgroundGradient className="rounded-[22px] gap-4 p-4 bg-black dark:bg-zinc-900">
                <ProjectUploader />
            </BackgroundGradient>
        </div>
    );}
