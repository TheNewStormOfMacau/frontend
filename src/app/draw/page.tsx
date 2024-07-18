"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const options = ["普通鲜花饼藏品", "稀有鲜花饼藏品", "传说鲜花饼藏品"];

export default function Draw() {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [target, setTarget] = useState<string>("普通鲜花饼藏品");

  const performDraw = () => {
    if (spinning) return;
    setSpinning(true);
    let count = 0;
    const interval = setInterval(() => {
      setTarget(options[count % options.length]);
      count++;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setSpinning(false);
    }, 3000);
  };

  return (
    <main className="text-white min-h-screen">
      <Navbar account="" />
      <div className="border-t border-b m-4 p-4">
        <h3>{target}</h3>
      </div>
      <button
        className="button button__big button__primary mt-8"
        onClick={performDraw}
      >
        抽奖
      </button>
    </main>
  );
}
