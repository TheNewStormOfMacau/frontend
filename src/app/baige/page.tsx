"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Baige() {
  const [book, setBook] = useState<string>("");
  if (book === "") {
    return (
      <main className="min-h-screen text-white">
        <Navbar account="" />
        <h1 className="text-gradient">请选择白鸽票的文字来源</h1>
        <div className="flex mt-16">
          <div className="border border-pink p-8 m-8 rounded-2xl">
            <h2>《百年孤独》</h2>
            <p className="leading-normal mt-4">
              魔幻现实主义巨著
              <br />
              描绘拉美家族七代传奇
            </p>
            <button className="button mt-8" onClick={() => setBook("百年孤独")}>
              选择
            </button>
          </div>
          <div className="border border-pink p-8 m-8 rounded-2xl">
            <h2>《活着》</h2>
            <p className="leading-normal mt-4">
              福贵坎坷人生
              <br />
              反映中国社会巨变
            </p>
            <button className="button mt-8" onClick={() => setBook("活着")}>
              选择
            </button>
          </div>
          <div className="border border-pink p-8 m-8 rounded-2xl">
            <h2>《一九八四》</h2>
            <p className="leading-normal mt-4">
              反乌托邦小说
              <br />
              描绘极权主义社会恐怖
            </p>
            <button className="button mt-8" onClick={() => setBook("一九八四")}>
              选择
            </button>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main className="min-h-screen text-white">
        <Navbar account="" />
        <h2>你选择了《{book}》</h2>
        <div className="grid grid-cols-12 grid-rows-8"></div>
      </main>
    );
  }
}
