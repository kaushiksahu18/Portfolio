"use client";
import React, { useState } from "react";
import { LuClipboard } from "react-icons/lu";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { GlobeContainer } from "@/components/Globe";
import { BackgroundGradientAnimation } from "@/components/ui/BgGradiantAnime";
import Button from "@/components/ui/Button";
import { isMobile } from "@/lib/utils";
import {
  SelectedCard,
  TechStack,
  ImageComponent,
} from "@/components/Utils/GridUtils";

export type Card = {
  id: number;
  className: string;
  thumbnail?: string;
  title?: string;
  titleClassname?: string;
  description?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    if (!isMobile() && (card.id === 1 || card.id === 5)) {
      setLastSelected(selected);
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="px-auto relative grid h-full w-full grid-cols-1 gap-2 overflow-x-hidden bg-[#010101] p-2 md:grid-cols-3 md:gap-4 md:p-4 lg:p-8">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden border border-zinc-800",
              selected?.id === card.id
                ? "absolute inset-0 z-50 m-auto flex h-1/2 w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg md:w-1/2"
                : lastSelected?.id === card.id
                  ? "z-40 h-full w-full rounded-xl bg-white dark:bg-black"
                  : "h-full w-full rounded-xl bg-white dark:bg-black",
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id !== card.id && (
              <div className="absolute left-0 z-[1] m-4 md:m-8 md:mr-24">
                <h2
                  className={cn(
                    `text-5xl font-[500] tracking-tighter backdrop-blur-sm`,
                    card.titleClassname,
                  )}
                >
                  {card.title}
                </h2>
                {card.id === 3 && (
                  <TechStack
                    stack={[
                      "TypeScript",
                      "JavaScript",
                      "ExpressJS",
                      "TailwindCSS",
                      "NextJS",
                      "React",
                      "MongoDB",
                      "NodeJS",
                    ]}
                  />
                )}
                {card.id === 4 && (
                  <Button
                    size="md"
                    className="mt-8"
                    icon={<LuClipboard />}
                    iconPosition="left"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "kaushiksahu18.dev@gmail.com",
                      );
                    }}
                  >
                    Copy my email
                  </Button>
                )}
              </div>
            )}
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            {card.id == 2 && <GlobeContainer />}
            {card.id == 4 && <BackgroundGradientAnimation size="20%" />}
            {card.thumbnail === undefined ? null : (
              <ImageComponent card={card} />
            )}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0",
          selected?.id ? "pointer-events-auto" : "pointer-events-none",
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};
