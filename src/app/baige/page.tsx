"use client";
import Navbar from "@/components/Navbar";
import { ethers } from "ethers";
import { useState } from "react";

const text1 =
  "她想起以前，上帝还没让岁月缩水如同土耳其商人丈量花布时偷减尺寸，那时候不像现在这样。如今孩子们不但长得快，连人的情感也变了...乌尔苏拉又不禁自问是否应当索性躺进坟墓让人埋土，并毫无顾忌地质询上帝是否人心如铁足以经受这许多痛苦的折磨。她问了又问，愈加惶惑，并感到无可抑制的强烈欲望涌上心头，想要和外乡人一样破口大骂，想要让自己最终能放任片刻，那是她渴求已久却反复拖延的时刻，在这一时刻她不再逆来顺受，而要痛一场，把整整一个世纪忍气吞声压在心底的无数污言秽语一吐为快。＂妈的！＂她叫了一声。";

const text2 =
  "年轻时靠着祖上留下的钱风光了一阵子，往后就越过越落魄了，这样反倒好，看看我身边的人，龙二和春生，他们也只是风光了一阵子，到头来命都丢了。做人还是平常点好，争这个争那个，争来争去赔了自己的命。像我这样，说起来是越混越没出息，可寿命长，我认识的人一个挨着一个死去，我还活着。";

const text3 =
  "为官的，家业凋零；富贵的，金银散尽。有恩的，死里逃生；无情的，分明报应。欠命的，命已还；欠泪的，泪已尽。冤冤相报实非轻，分离聚合皆前定。欲知命短问前生，老来富贵也真侥幸。看破的，遁入空门；痴迷的，枉送了性命。好一似食尽鸟投林，落了片白茫茫大地真干净。";

export default function Baige() {
  const [book, setBook] = useState<string>("");
  const [chosen, setChosen] = useState<boolean[]>(Array(120));
  const [loading, setLoading] = useState<boolean>(false);

  const chosenNum = chosen.filter((x) => x).length;

  const getText = (bookName: string) => {
    if (bookName === "百年孤独") return text1;
    else if (bookName === "活着") return text2;
    else if (bookName === "红楼梦") return text3;
    else return "";
  };

  const startGame = async (selected: number[]) => {
    setLoading(true);
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const abi = ["function startGame(uint256 amount, uint256[] words) public"];
    const contract = new ethers.Contract(
      "0xd18321420B9D9AdB69C80cD04e1dDb6A4e785FcF",
      abi,
      signer
    );
    try {
      const tx = await contract.startGame(
        ethers.parseEther("0.00001"),
        selected.map((num) => ethers.parseUnits(num.toString(), 1))
      );
      await tx.wait();
      alert("合约调用成功，请稍后查看钱包内资金变化。");
    } catch (e) {
      console.error(e);
      alert("交易失败或已取消，请重试。");
    } finally {
      setLoading(false);
    }
  };

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
            <h2>《红楼梦》</h2>
            <p className="leading-normal mt-4">
              百科全书式的长篇小说
              <br />
              描绘出 18 世纪中国封建社会的方方面面
            </p>
            <button className="button mt-8" onClick={() => setBook("红楼梦")}>
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
        <h2 className="mt-32">你选择了《{book}》</h2>
        <p className="mt-4">请在 120 个字中选择 15 个字。</p>
        <p className="mt-2 text-gray-500">
          <a className="underline cursor-pointer" onClick={() => setBook("")}>
            换一本书
          </a>
        </p>
        <div className="mt-8 grid grid-cols-12 grid-rows-10">
          {getText(book)
            .slice(0, 120)
            .split("")
            .map((char, index) => (
              <div
                key={index}
                className={`cursor-pointer m-2 p-2 text-2xl${
                  chosen[index] ? " bg-pink" : ""
                }`}
                onClick={() => {
                  if (chosenNum === 15 && chosen[index] !== true) {
                    return;
                  }
                  chosen[index] = !chosen[index];
                  setChosen([...chosen]);
                }}
              >
                {char}
              </div>
            ))}
        </div>
        {chosenNum === 15 ? (
          <>
            <button
              className="button my-8"
              onClick={() =>
                startGame(
                  chosen
                    .map((val, index) => (val ? index : -1))
                    .filter((x) => x !== -1)
                )
              }
              disabled={loading}
            >
              确认选择
            </button>
            {loading && <p>加载中，请稍候……</p>}
          </>
        ) : (
          <p className="my-8">请选择 15 个字符，已选 {chosenNum} 个。</p>
        )}
      </main>
    );
  }
}
