"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

import { Card, CardContent } from "./ui/card";
import { Project } from "@/lib/utils";

type ProjectCarouselProps = {
  project: Project;
};

export default function ProjectCarousel({ project }: ProjectCarouselProps) {
  const { projectImgs, title } = project;
  const plugin = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-sm"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {projectImgs.map((img, index) => (
          <CarouselItem key={index}>
            <Card className="overflow-hidden">
              <CardContent className="relative aspect-[4/3] p-0">
                <Image
                  src={img}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
