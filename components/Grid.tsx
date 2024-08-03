import { LayoutGrid, Card } from "./ui/LayoutGrid";

export default function Grid({ id }: { id?: string }) {
  return (
    <section id={id} className="relative h-[160%] md:h-[120%] w-full">
      <p className="absolute -top-6 left-0 z-[10] hidden text-zinc-500 md:-top-4 md:inline lg:top-0">
        {" "}
        &gt; Clickable
      </p>
      <LayoutGrid cards={cards} />
    </section>
  );
}

export const cards:Card[] = [
  {
    id: 1,
    title: "I prioritize client collaboration and open communication",
    description:
      "I prioritize client collaboration and open communication, ensuring that every project aligns with your goals and expectations. By fostering a collaborative environment and maintaining clear, transparent dialogue, I aim to deliver results that exceed your expectations and build lasting professional relationships.",
    className: "md:col-span-2 row-span-2 md:row-span-6",
    thumbnail: "/client.png",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    titleClassname: "text-2xl mr-32",
    description:
      "I'm very flexible with time zone communications, ensuring that we can connect at times that are convenient for you. Whether across different continents or varying schedules, I adapt to your needs to facilitate smooth and effective collaboration.",
    className: "col-span-1 row-span-2 md:row-span-3",
  },
  {
    id: 3,
    title: "My tech stack",
    titleClassname: "text-2xl bottom-0",
    description:
      "My stack includes JavaScript, TypeScript, Next.js, Tailwind CSS, Node.js, and MongoDB. I specialize in UI/UX and use these technologies to build dynamic and responsive web applications.",
    className: "col-span-1 row-span-2 md:row-span-3",
  },
  {
    id: 4,
    title: "Do you want to start a project together?",
    titleClassname: "text-2xl",
    description:
      "Interested in starting a project together? I'm excited to explore new ideas and collaborate to bring your vision to life.",
    className: "col-span-1 row-span-2 md:row-span-6",
  },
  {
    id: 5,
    title: "Currently building a Very Powerful Task Management System",
    titleClassname: "text-2xl",
    description:
      "I'm currently developing a very powerful task management system designed to streamline workflows and enhance productivity. This project aims to deliver advanced features and intuitive usability, clone of <b>todoist</b>",
    className: "md:col-span-2 row-span-2 md:row-span-6",
    thumbnail: "/b5.svg",
  },
];