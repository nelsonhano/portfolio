"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    src: string;
    alt: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller md:h-64 relative z-20 max-w-8xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-[250px] max-w-full shrink-0 md:w-[450px]"
            key={item.id}
          >
            <article>
              <div className="min-h-screen rounded-4xl border-green-600 border-1 bg-[#020617] relative">
                <div
                  className="absolute rounded-4xl inset-0 z-0"
                  style={{
                    background: "#020617",
                    backgroundImage: `
                      linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10 pt-10 px-5">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={300}
                    className="h-[70%] float-left w-[25%] rounded object-contain"
                    priority
                  />
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};
