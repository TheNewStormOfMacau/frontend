// import { useState } from "react";

export default function StartButton(props: { onClick: Function }) {
  // const [hovering, setHovering] = useState<boolean>(false);

  return (
    <svg
      width="600"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      className="my-16"
    >
      {[300, 250, 200, 150, 100].map((r) => (
        <circle
          key={r}
          cx="300"
          cy="300"
          r={r.toString()}
          stroke="none"
          stroke-width="0"
          fill="rgb(255, 89, 128)"
          opacity="0.5"
          onClick={() => props.onClick()}
          className="cursor-pointer"
        />
      ))}
      <text
        x="300"
        y="305"
        font-size="24"
        text-anchor="middle"
        fill="white"
        onClick={() => props.onClick()}
        className="cursor-pointer"
      >
        开始游戏
      </text>
    </svg>
  );
}
