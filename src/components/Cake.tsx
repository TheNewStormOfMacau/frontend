import Image from "next/image";

const paths = [
  "",
  "/cake1.png",
  "/cake2.png",
  "/cake3.png",
  "/cake4.png",
  "/cake5.png",
  "/cake6.png",
];

export default function Cake(props: {
  // id: 1 | 2 | 3 | 4 | 5 | 6;
  id: number;
  unlocked: boolean;
}) {
  if (props.unlocked) {
    return (
      <div className="w-48 h-48 m-8 relative">
        <Image
          className="center drop-shadow-lg"
          height={192}
          width={192}
          src={paths[props.id]}
          alt="Cake"
        />
      </div>
    );
  } else {
    return (
      <div className="w-48 h-48 m-8 rounded-full relative bg-black shadow-lg">
        <i className="bi bi-lock text-gray-500 text-6xl center"></i>
      </div>
    );
  }
}
