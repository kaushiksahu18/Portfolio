"use client";
import React, { useState, useEffect, ReactHTMLElement } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlobeContainer } from "@/components/Globe";
import { BackgroundGradientAnimation } from "@/components/ui/BgGradiantAnime";
import Button from "@/components/ui/Button";
import { LuClipboard } from "react-icons/lu";
import { isMobile } from "@/lib/utils";

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
    if(!isMobile()){
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
                      "JavaScript",
                      "TypeScript",
                      "NextJS",
                      "React",
                      "TailwindCSS",
                      "MongoDB",
                      "ExpressJS",
                      "NodeJS",
                    ]}
                  />
                )}
                {card.id === 4 && (
                  <Button
                    children="Copy my email"
                    size="md"
                    className="mt-8"
                    icon={<LuClipboard />}
                    iconPosition="left"
                  />
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

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "absolute inset-0 h-full w-full object-cover object-top transition duration-200",
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="relative z-[60] flex h-full w-full flex-col justify-end rounded-lg bg-transparent shadow-2xl">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 z-10 h-full w-full bg-black opacity-60"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative z-[70] px-8 pb-4"
      >
        <Skeleton
          id={selected?.id}
          title={selected?.title}
          description={selected?.description}
        />
      </motion.div>
    </div>
  );
};

export const Skeleton = ({
  title,
  description,
  id,
}: {
  title?: string;
  description?: string;
  id?: number;
}) => {
  const createMarkup = (html: string) => {
    return { __html: html };
  };
  return (
    <div id={String(id)}>
      <p className="text-xl font-bold text-white md:text-4xl">{title}</p>
      <p className="text-base font-normal text-white"></p>
      <p
        className="my-4 max-w-lg text-base font-normal text-neutral-200"
        dangerouslySetInnerHTML={createMarkup(description || "")}
      />
      {id === 4 && <BackgroundGradientAnimation />}
    </div>
  );
};

export const TechStack = ({ stack }: { stack: string[] }) => {
  return (
    <div className="z-[-10] mt-8 flex flex-wrap justify-end gap-2 md:mt-2">
      {stack.map((item,idx) => (
        <span key={idx} id={item} className="inline-block rounded-lg bg-zinc-700 px-2 py-1 text-sm font-normal text-white">
          {item}
        </span>
      ))}
    </div>
  );
};