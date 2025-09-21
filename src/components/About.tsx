import { description, words } from "@/lib/utils";
import { FlipWords } from "./ui/flip-words";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function About() {
    return (
        <div className="flex flex-col mt-5 text-white gap-2">
            <h4 className="!text-white text-2xl">👋 Hey hello</h4>

            <div className="flex flex-col text-4xl gap-1 font-serif">
                <div>I&apos;m Koinyan Nelson,</div>
                <div>
                    a <FlipWords words={words} /> developer
                </div>
            </div>

        <div>
        <TextGenerateEffect words={description} />
        </div>
        </div>
    );}
