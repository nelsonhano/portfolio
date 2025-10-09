import { BackgroundGradient } from "@/components/ui/background-gradient";
import ProjectUploader from "@/components/admin/ProjectUploader";

export default function page() {
    return (
        <div className="w-full flex flex-col mx-10 items-center justify-center">
            {/* <BackgroundGradient className="rounded-[22px] gap-4 p-4 bg-black dark:bg-zinc-900"> */}
                <ProjectUploader />
            {/* </BackgroundGradient> */}
        </div>
    );}
