'use client'

import { Lora, Playfair_Display } from "next/font/google";
import Profile from "@/components/molecules/Profile";
import SelfDescription from "@/components/molecules/SelfDescription";
import Header from "@/components/molecules/Header";
import Tech from "@/components/molecules/Tech";
import Projects from "@/components/molecules/Projects";
import Certificates from "@/components/molecules/Certificates";

const lora = Lora({ subsets: ["latin"] });

export default function Home() {

  return (
    <main id="home" className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 p-6 md:p-12 lg:p-16 justify-center">
        <SelfDescription project={4} years={"2+"} />
        <Profile title="Frontend Developer" />
      </div>
      <div className="flex justify-center p-6 md:p-8 lg:p-12 w-full">
        <div className="w-full max-w-[1280px]">
          <Tech />
        </div>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
    </main>
  );
}