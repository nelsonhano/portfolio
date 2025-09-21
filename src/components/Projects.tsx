import { post } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Suspense } from "react";
import { SkeletonCard } from "./SkeletonCard";

export default function Projects() {
    return (
      <div>
        <BentoGrid>
          {post.map(
            (p) => (
              <Suspense key={p.id} fallback={<SkeletonCard />}>
                <BentoGridItem
                  {...p}
                />
              </Suspense>
            )
          )}
        </BentoGrid>
      </div>
    );}
