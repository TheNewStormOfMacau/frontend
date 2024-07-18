"use client";
import Navbar from "@/components/Navbar";
import Circles from "@/components/Circles";
import { useRouter } from "next/navigation";

export default function Property() {
  const router = useRouter();
  return (
    <main className="text-white">
      <Navbar account={""} />
      <div
        className="fixed left-[5%] top-[30%] flex flex-col items-start hover-bg-purple transition-all hover:cursor-pointer"
        onClick={() => router.push("/coin")}
      >
        <h3 className="bg-purple p-2">我的玫瑰币</h3>
        <p className="p-2 mt-2">
          玫瑰币是一种用现金兑换的游戏积分
          <br />
          可以下注用于参与游戏
          <br />
          游戏获胜可以获得更多玫瑰币，用于抽取鲜花饼
          <br />
          游戏失败时，平台将玫瑰币大部分用于公益
        </p>
      </div>
      <div
        className="fixed left-[40%] top-[20%] flex flex-col items-start hover-bg-purple transition-all hover:cursor-pointer"
        onClick={() => router.push("/cakes")}
      >
        <h3 className="bg-purple p-2">我的鲜花饼</h3>
        <p className="p-2 mt-2">
          鲜花饼是您用玫瑰币抽取的个人藏品
          <br />
          稀有度从低到高分为普通、珍贵、稀世三个等级
          <br />
          您可以选择将鲜花饼进行自由交易买卖
        </p>
      </div>
      <div className="fixed left-[80%] top-[35%] flex flex-col items-start hover-bg-purple transition-all hover:cursor-pointer">
        <h3 className="bg-purple p-2">交易市场与记录</h3>
        <p className="p-2 mt-2">暂未开放</p>
      </div>
      <Circles
        className="fixed -bottom-[28rem] left-1/2 -translate-x-1/2"
        text="我的资产"
      />
    </main>
  );
}
