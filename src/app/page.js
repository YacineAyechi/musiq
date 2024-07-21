import Navbar from "@/components/custom/Navbar";
import { SiteFooter } from "@/components/custom/F";
import HowToPlay from "@/components/custom/HowToPlay";
import Question from "@/components/custom/Question";
import React from "react";

export default async function HomePage() {
  return (
    <>
      <div>
        <Navbar />
        <Question />
        <HowToPlay />
        <SiteFooter />
      </div>
    </>
  );
}
