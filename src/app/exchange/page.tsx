"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function Exchange() {
  const [loading, setLoading] = useState<boolean>(false);

  const exchange = async (amount: number) => {
    setLoading(true);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const abi = ["function exchangeToken() public"];
    const contract = new ethers.Contract(
      "0xd18321420B9D9AdB69C80cD04e1dDb6A4e785FcF",
      abi,
      signer
    );
    try {
      const tx = await contract.exchangeToken({
        value: ethers.parseEther(amount.toString()),
      });
      await tx.wait();
    } catch (e) {
      alert("交易失败或已取消，请重试。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="text-white min-h-screen bg-city">
      <Navbar account="" />
      <h1 className="text-gradient">兑换玫瑰币 RoseCoin</h1>
      <div className="flex mt-16">
        <div className="m-8 p-8 border-2 border-pink rounded-xl flex flex-col items-center justify-end">
          <Image
            src="/rc.png"
            alt="Single RoseCoin"
            width={100}
            height={100}
          ></Image>
          <button
            className="button mt-4"
            onClick={() => exchange(0.0001)}
            disabled={loading}
          >
            100 RCs
          </button>
          <p className="mt-2">0.0001 ETH</p>
        </div>
        <div className="m-8 p-8 border-2 border-pink rounded-xl flex flex-col items-center justify-end">
          <Image
            src="/some-rcs.png"
            alt="Some RoseCoins"
            width={200}
            height={200}
          ></Image>
          <button
            className="button mt-4"
            onClick={() => exchange(0.0005)}
            disabled={loading}
          >
            500 RCs
          </button>
          <p className="mt-2">0.0005 ETH</p>
        </div>
        <div className="m-8 p-8 border-2 border-pink rounded-xl flex flex-col items-center justify-end">
          <Image
            src="/many-rcs.png"
            alt="Some RoseCoins"
            width={100}
            height={100}
          ></Image>
          <button
            className="button mt-4"
            onClick={() => exchange(0.001)}
            disabled={loading}
          >
            1000 RCs
          </button>
          <p className="mt-2">0.001 ETH</p>
        </div>
      </div>
      {loading && <p>加载中，请稍候……</p>}
    </main>
  );
}
