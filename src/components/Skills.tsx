import { CardSpotlight } from "@/components/ui/card-spotlight";
import Step from "./Step";
import { skillSets } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";

export function Skills() {
    return (
        <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
            {skillSets.map(({ category, skills }) => (
                <BackgroundGradient
                    key={category}
                    className="rounded-[22px] gap-4 p-4 h-full bg-black dark:bg-zinc-900"
                >
                    <CardSpotlight className="h-full w-full">
                        <p className="text-xl font-bold relative z-20 text-white">
                            {category}
                        </p>
                        <div className="text-neutral-200 mt-4 relative z-20">
                            <ul className="list-none  mt-2">
                                {skills.map((skill) => (
                                    <Step key={skill} title={skill} />
                                ))}
                            </ul>
                        </div>
                    </CardSpotlight>
                </BackgroundGradient>
            ))}
        </div>
    );
}
