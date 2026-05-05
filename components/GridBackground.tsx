export default function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* dot grid */}
      <div className="absolute inset-0 bg-dots mask-radial-soft opacity-60" />
      {/* faint line grid */}
      <div className="absolute inset-0 bg-grid mask-radial opacity-50" />
      {/* purple glow */}
      <div
        className="glow-blob"
        style={{
          width: 700,
          height: 700,
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      {/* secondary glow */}
      <div
        className="glow-blob"
        style={{
          width: 400,
          height: 400,
          top: 300,
          right: -100,
          opacity: 0.25,
        }}
      />
    </div>
  );
}
