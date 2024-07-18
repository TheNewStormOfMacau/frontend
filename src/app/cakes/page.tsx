"use client";

import Cake from "@/components/Cake";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const data = [false, false, false, true, true, true];

export default function Cakes() {
  const [data, setData] = useState<any[]>([]);
  const flags = [1, 2, 3, 4, 5, 6].map((index) => data.includes(index));

  useEffect(() => {
    const url = new URL("http://30.201.208.33:8888/api/v1/getrewardinfo");
    url.search = new URLSearchParams({
      chain_addr: "0x610254d471e86114484087A65df9ea616428CfEe",
    }).toString();
    console.warn("requesting: ", url);
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.map((obj: any) => obj.reward_id)))
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <main className="text-white min-h-screen bg-purple justify-start">
      <Navbar account="" />
      <div className="mt-32 flex flex-col items-center">
        <h3>已收藏鲜花饼 {data.length} 个</h3>
        <h3 className="mt-2">其中专属鲜花饼 0 个</h3>
      </div>
      <div className="mt-8 grid grid-cols-3 grid-rows-2 justify-stretch min-w-4xl">
        {flags.map((val, index) => (
          <Cake unlocked={val} id={index + 1} key={index} />
        ))}
      </div>
    </main>
  );
}
