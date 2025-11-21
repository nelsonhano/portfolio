import { Suspense } from "react";

import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { SkeletonCard } from "./SkeletonCard";
import { post } from "@/lib/utils";

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
