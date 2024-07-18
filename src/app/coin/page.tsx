"use client";
import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import Circles from "@/components/Circles";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Coin() {
  const [amount, setAmount] = useState<number>(0);
  const [showPriorityModel, setShowPriorityModel] = useState<boolean>(false);

  useEffect(() => {
    const url = new URL("http://30.201.208.33:8888/api/v1/getuserinfo");
    url.search = new URLSearchParams({
      chain_addr: "0x610254d471e86114484087A65df9ea616428CfEe",
    }).toString();
    console.warn("requesting: ", url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setAmount(res))
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <main className="text-white bg-purple min-h-screen justify-start">
      <Navbar account={""} />
      <section className="mt-32 flex flex-col items-center">
        <h2 className="text-center">剩余玫瑰币：{amount}</h2>
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
        暂未开放，敬请期待
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
