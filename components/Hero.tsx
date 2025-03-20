import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Button from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa6";
import { BoxBackground } from "@/components/ui/BoxBackground";
import TypewriterEffectSmooth from "./ui/TypewriterEffect";

const words = [
  {
    text: "Hi, I'm ",
  },
  {
    text: "Kaushik Sahu, a Web Developer.",
    className: "text-red-500 dark:text-red-500",
  },
];

function Hero({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="z-[-99] h-[87vh] w-full overflow-x-hidden pl-8 pt-28 md:h-[80vh] md:pl-12 lg:h-[85vh]"
    >
      <div className="absolute left-0 top-0 z-[-99] h-full w-full overflow-x-hidden">
        <Spotlight fill="white" className="left-0" />
        <Spotlight fill="crimson" className="left-[20%]" />
        <Spotlight fill="crimson" className="left-[80%] md:left-[60%]" />
      </div>
      <div className="z-[10] overflow-x-hidden pr-16 md:pr-32 lg:pr-[30%]">
        <h2 className="text-start text-xs font-bold uppercase text-white md:text-sm">
          Innovative Designs with Web Technologies.
        </h2>
        <TextGenerateEffect
          duration={0.5}
          words="Turning Visions into Stunning Realities"
        />
        <h2 className="">
          <TypewriterEffectSmooth
            words={words}
            className="text-wrap text-start text-sm font-bold uppercase md:text-lg"
          />
        </h2>
      </div>
      <a href="mailto:kaushiksahu18.dev@gmail.com">
        <Button className="mt-12" icon={<FaLocationArrow />}>
          Contact Now
        </Button>
      </a>
      <BoxBackground className="z-[-9999] overflow-x-hidden" />
    </section>
  );
}

export default Hero;
