"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { technologiesImages } from "@/lib/utils";

export default function Technologies() {
    return (
        <div className="h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={technologiesImages}
                direction="right"
                speed="slow"
            />
        </div>
    );}
