import { motion } from "framer-motion";

import { Card } from "@/components/ui/LayoutGrid";
import { BackgroundGradientAnimation } from "../ui/BgGradiantAnime";
import { cn } from "@/lib/utils";

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

const Skeleton = ({
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

const TechStack = ({ stack }: { stack: string[] }) => {
  return (
    <div className="z-[-10] mx-8 mt-12 flex flex-wrap justify-end gap-2 md:mx-0 md:mt-2">
      {stack.map((item, idx) => (
        <span
          key={idx}
          id={item}
          className="inline-block rounded-lg bg-zinc-700 px-2 py-1 text-sm font-normal text-white"
        >
          {item}
        </span>
      ))}
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

export { SelectedCard, Skeleton, TechStack, ImageComponent };
