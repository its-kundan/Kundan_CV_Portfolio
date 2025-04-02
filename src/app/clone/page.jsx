"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";

const navigateToHome = () => {
  window.location.href = '/';
};

export default function GifPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex items-center justify-center overflow-hidden relative">
      {/* Main container with centered layout */}
      <div className="w-full max-w-5xl h-full flex items-center justify-center gap-12 px-4">
        {/* GIF container with rounded border */}
        <div className="h-[80%] w-auto aspect-[9/16] relative flex-shrink-0 overflow-hidden rounded-2xl border-4 border-white/20">
          <Image
            src="/images/clone.gif"
            alt="Animation preview"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Centered button positioned next to image */}
        <div className="relative">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border border-neutral-200 dark:border-slate-800 px-8 py-4 text-lg font-medium"
            onClick={navigateToHome}
          >
            Coming Soon
          </Button>
        </div>
      </div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
    </div>
  );
}