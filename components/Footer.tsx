import Button from "@/components/ui/Button";
import {FlipWords} from "@/components/ui/FlipWord"
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer({ id = "footer" }: { id?: string }) {
  const links = [
    {
      id: "github",
      icon: <FaGithub />,
      href: "https://github.com/kaushiksahu18",
    },
    {
      id: "twitter",
      icon: <FaXTwitter />,
      href: "https://x.com/kaushiksahu18_",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/kaushiksahu18/",
    },
  ];
  return (
    <section
      id={id}
      className="relative flex h-[80%] w-full flex-col items-center justify-center gap-4 bg-black p-4 md:gap-8 md:p-8 lg:gap-12"
    >
      <h2 className="md:x-28 text-center text-4xl font-bold text-white md:text-5xl lg:px-32 lg:text-6xl">
        Ready to take <span className="text-red-500">your</span> digital
        presence to the <FlipWords words={["next-level?","new-heights?"]} duration={6000}/>
      </h2>
      <a href="mailto:kaushiksahu18.dev@gmail.com" className="z-[999]">
        <Button icon={<FaLocationArrow />}>Let&apos;s get in touch</Button>
      </a>
      <div
        id="links"
        className="absolute bottom-0 flex w-full items-center justify-between p-4 md:p-12 lg:p-24"
      >
        <p>Copyright &copy; kaushik 2024</p>
        <div className="flex gap-2">
          {links.map((link, idx) => (
            <a
              target="_blank"
              rel="me"
              href={link.href}
              key={idx}
              id={link.id}
              className="cursor-pointer border-black-800 rounded-md border bg-transparent p-1 text-white md:p-2"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
