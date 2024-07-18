"use client";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();
  return (
    <main className="text-white">
      <Navbar account={""} />
      <section
        className="min-h-screen flex flex-col justify-center items-center w-full"
        onClick={() => router.push("/games")}
      >
        <h2 className="my-2">您充值的金额</h2>
        <h1 className="my-2">
          <span className="text-8xl">100</span>
          <span className="text-4xl">%</span>
        </h1>
        <h2 className="my-2">将用于</h2>
        <h2 className="my-2">开源项目捐赠</h2>
        <p className="my-2">（除运营所需费用外）</p>
        <p className="fixed bottom-24 text-gray-500">点击任意位置进入主页面</p>
      </section>
    </main>
  );
}
