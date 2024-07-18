"use client";

import Model from "@/components/Model";
import Navbar from "@/components/Navbar";
import StartButton from "@/components/StartButton";
import { connectWallet } from "@/utils/web3";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Index() {
  const [showConnectModel, setShowConnectModel] = useState<boolean>(false);
  const [account, setAccount] = useState<string>("");
  const router = useRouter();

  return (
    <main className="text-white">
      <Navbar account={account} />
      <section className="flex flex-col min-h-screen mt-24">
        <h1 className="text-center leading-relaxed my-24">
          链上<span className="text-pink">公益</span>游戏平台
        </h1>
        <button className="button button__big button__primary my-8">
          游戏玩法
        </button>
        <button
          className="button button__big my-8"
          onClick={() => {
            setShowConnectModel(true);
          }}
        >
          链接钱包
        </button>
        <Model
          showModel={showConnectModel}
          onClose={() => setShowConnectModel(false)}
        >
          <h2 className="my-8 text-center">链接钱包</h2>
          <button
            className="button my-4"
            onClick={() => {
              connectWallet().then((res) => setAccount(res));
            }}
          >
            使用 MetaMask 连接
          </button>
          {account !== "" && <p className="my-4">钱包已连接</p>}
        </Model>
      </section>
      <section className="bg-city min-h-screen w-full flex flex-col p-16">
        <h1 className="text-8xl text-pink leading-normal drop-shadow-xl shadow-pink">
          透明
          <br />
          公开
        </h1>
        <div className="flex-1"></div>
        <h2 className="text-gray-500 font-bold">公平性保证：</h2>
        <h1 className="leading-normal mt-4 text-gradient">
          利用加密随机数生成器确保游戏的随机性
          <br />
          公开源代码，允许社区审核
          <br />
          区块链技术实现去中心化操作，游戏交易都在链上进行
          <br />
          智能合约来自动执行游戏规则和支付结算
        </h1>
      </section>
      <section className="min-h-screen w-full flex flex-col justify-center items-center">
        <StartButton onClick={() => router.push("/intro")} />
      </section>
    </main>
  );
}
