import { LuTally1, LuTally2, LuTally3 } from "react-icons/lu";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import Card from "@/components/Utils/ApproachCard"

export type CardVariant = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  containerClassName?: string;
  colors?: number[][];
  children?: React.ReactNode;
};

export default function Approach({ id }: { id?: string }) {
  const cardVariants: CardVariant[] = [
    {
      title: "Planning & Strategy",
      description:
        "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
      icon: <LuTally1 size={30} />,
      containerClassName: "bg-emerald-900",
    },
    {
      title: "Development & Progress Update",
      description:
        "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
      icon: <LuTally2 size={30} />,
      containerClassName: "bg-pink-900",
      colors: [
        // change the colors of the
        [255, 166, 158],
        [221, 255, 247],
      ],
    },
    {
      title: "Development & Launch",
      description:
        "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
      icon: <LuTally3 size={30} />,
      containerClassName: "bg-sky-600",
      colors: [[125, 211, 252]],
    },
  ];

  return (
    <section
      id={id}
      className="relative mx-auto flex w-full flex-col items-center justify-center gap-6 bg-white px-8 py-4 dark:bg-black md:py-8"
    >
      <h2 className="text-4xl font-bold text-black dark:text-white md:text-5xl">
        My <span className="text-red-500">Approach</span>
      </h2>
      <p className="absolute top-14 left-0 z-[9999] md:hidden text-zinc-500">
        {" "}
        &gt; Clickable
      </p>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 bg-white dark:bg-black lg:flex-row">
        {cardVariants.map(
          ({ title, description, icon, colors, containerClassName }, idx) => (
            <Card key={idx} title={title} description={description} icon={icon}>
              <CanvasRevealEffect
                key={idx * 10}
                animationSpeed={5}
                containerClassName={containerClassName}
                colors={colors}
              />
            </Card>
          ),
        )}
      </div>
    </section>
  );
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
