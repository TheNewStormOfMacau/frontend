export default function Circles(props: { className: string; text: string }) {
  return (
    <svg
      width="800"
      height="800"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      {[400, 300, 200, 100].map((r) => (
        <circle
          key={r}
          cx="400"
          cy="400"
          r={r.toString()}
          stroke="none"
          strokeWidth="0"
          fill="rgb(255, 89, 128)"
          opacity="0.5"
        />
      ))}
      <text
        x="400"
        y="280"
        fontSize="64"
        textAnchor="middle"
        fill="white"
        fontWeight="bold"
      >
        {props.text}
      </text>
    </svg>
  );
}
