import "./wheel.scss";

export default function Wheel() {
  return (
    <main className="min-h-screen">
      <div className="wheel">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((i) => (
          <span key={i} className="segment bg-white">
            {i}
          </span>
        ))}
      </div>
    </main>
  );
}
