"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Henry-CV.pdf";
  link.setAttribute("download", "Henry-CV.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const skills = ["Next.js", "React", "TypeScript", "Laravel", "Tailwind CSS", "Node.js", "MySQL"];

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">

            {/* available badge */}
            <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs px-3 py-1 rounded-full w-fit mb-4 mx-auto xl:mx-0">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Available for work
            </div>

            <span className="text-sm uppercase tracking-widest text-white/50 mb-2 block">
              Software Developer
            </span>

            <h1 className="h1 mb-6">
              Hello, I'm <br />
              <span className="text-accent">Henry Mwangi</span>
            </h1>

            <p className="max-w-[480px] mb-9 text-white/70 leading-relaxed">
              I craft elegant digital experiences and build robust systems —
              from pixel-perfect frontends to scalable backends.
            </p>

            {/* actions */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>

            {/* skills strip */}
            <div className="flex flex-wrap gap-2 justify-center xl:justify-start">
              {skills.map((s) => (
                <span
                  key={s}
                  className="border border-white/10 text-white/50 text-xs px-3 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;