"use client";
import { useEffect, useState } from "react";

import { MultiStepLoader } from "@/components/ui/MultistepLoader";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { AllLoadingStates } from "@/data";

type LoadingStateType = {
  text: string;
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingStates, setLoadingStates] = useState<LoadingStateType[]>([]);

  let temparr: LoadingStateType[] = [];
  for (let i = 0; i < 4; i++) {
    temparr[i] =
      AllLoadingStates[Math.floor(Math.random() * AllLoadingStates.length)];
  }

  useEffect(() => {
    setLoadingStates(temparr);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6269); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  },[loading]);

  if (loading) {
    return (
      <MultiStepLoader
        loadingStates={loadingStates}
        loading={loading}
        loop={false}
        duration={2000}
      />
    );
  } else {
    return (
      <main id="main" className="h-full w-full">
        <Hero id="hero" />
        <Grid id="about" />
        <Projects id="projects" />
        <Approach id="approach" />
        <Footer id="contact" />
        <FloatingNav
          navItems={[
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            { name: "Approach", link: "#approach" },
            { name: "Contact", link: "#contact" },
          ]}
        />
      </main>
    );
  }
}
