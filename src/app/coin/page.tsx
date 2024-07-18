"use client";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import Circles from "@/components/Circles";
import Image from "next/image";
import { useState } from "react";

export default function Coin() {
  const [showPriorityModel, setShowPriorityModel] = useState<boolean>(false);
  return (
    <main className="text-white bg-purple min-h-screen justify-start">
      <Navbar account={""} />
      <section className="mt-32 flex flex-col items-center">
        <h2 className="text-center">剩余玫瑰币：123</h2>
        <button
          className="button button__primary my-8"
          onClick={() => setShowPriorityModel(true)}
        >
          设置赛道优先级
        </button>
      </section>
      <Model
        showModel={showPriorityModel}
        onClose={() => setShowPriorityModel(false)}
      >
        设置赛道优先级
      </Model>
      <Image
        className="fixed -left-64 top-32"
        src="/rc.png"
        width={640}
        height={640}
        alt="Rose Coin"
      />
      <Image
        className="fixed -right-64 top-32"
        src="/rc.png"
        width={640}
        height={640}
        alt="Rose Coin"
      />

      <Circles
        className="fixed -bottom-[28rem] left-1/2 -translate-x-1/2"
        text="玫瑰币"
      />
    </main>
  );
}
