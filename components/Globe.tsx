import Globe from "@/components/Utils/Globe";

export const GlobeContainer = () => {
  return (
    <div className="relative mt-10 flex flex-col items-center bg-transparent dark:bg-transparent">
      <Globe className="absolute -bottom-80 -right-10 md:-bottom-72 md:-right-10" />
    </div>
  );
};
