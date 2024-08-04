import Image from "next/image";
import { Tabs, Tab } from "./ui/Tabs";
import { cn } from "@/lib/utils";

export default function Projects({ id }: { id: string }) {
  const tabs: Tab[] = [
    {
      title: "UI clone",
      value: "UI clone",
      content: (
        <SkeletonTab
          title="UI clone"
          imgSrc="/ochiclone.png"
          href="https://ochi-clone-by-kaushiksahu18.netlify.app/"
        />
      ),
    },
    {
      title: "Password Generator",
      value: "Password Generator",
      content: (
        <SkeletonTab
          title="Password Generator"
          imgSrc="/passgen.png"
          imgClassName="object-center md:object-top"
          href="https://passgenks.netlify.app/"
        />
      ),
    },
    {
      title: "Todo App",
      value: "Todo App",
      content: (
        <SkeletonTab
          title="Todo App"
          imgSrc="/todoapp.png"
          href="https://kaushikkatodoapp.netlify.app/"
        />
      ),
    },
    {
      title: "Gaming webapp",
      value: "Gaming webapp",
      content: (
        <SkeletonTab
          title="Gaming webapp"
          imgSrc="/gameweb.png"
          href="https://gamecanvas.netlify.app/"
        />
      ),
    },
  ];

  return (
    <div
      id={id}
      className="relative mx-auto mb-[30%] flex h-[85%] w-full flex-col items-start justify-start bg-black px-4 pt-8 [perspective:1000px] md:mb-[5%] md:h-full md:p-8 lg:p-12"
    >
      <h2 className="m-4 mb-12 text-5xl font-bold text-white md:absolute md:right-2 md:top-2 md:mb-16 md:text-7xl lg:right-4 lg:top-4">
        {"Projects".split("").map((item, idx) => (
          <span key={idx} className={`${idx > 2 && "text-red-500"}`}>
            {item}
          </span>
        ))}
      </h2>
      <Tabs tabs={tabs} />
    </div>
  );
}

export const SkeletonTab = ({
  href,
  title,
  className,
  imgSrc,
  imgClassName,
}: {
  href?: string;
  title: string;
  className?: string;
  imgSrc?: string;
  imgClassName?: string;
}) => {
  return (
    <a href={href} target="_blank" rel="me">
      {" "}
      <div
        className={cn(
          `relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-red-800 p-10 text-xl font-bold text-white md:text-4xl`,
          className,
        )}
      >
        <p>{title}</p>
        <Image
          src={imgSrc || "https://ui.aceternity.com/linear.webp"}
          alt="dummy image"
          width="1000"
          height="1000"
          className={cn(
            `absolute inset-x-0 -bottom-10 mx-auto h-full w-[90%] rounded-xl object-cover object-left-top md:h-[90%]`,
            imgClassName,
          )}
        />
      </div>
    </a>
  );
};
