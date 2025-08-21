export function Card({ children, className = "" }) {
  return (
    <div
      className={[
        "rounded-2xl p-6 bg-[#F5F5F5] border border-white/60",
        "shadow-[10px_10px_20px_#d6d6d6,_-10px_-10px_20px_#ffffff]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }) {
  return <h3 className="text-lg font-semibold text-[#2E7D32]">{children}</h3>;
}

export function CardText({ children }) {
  return <p className="mt-2 text-sm text-[#333333]/80">{children}</p>;
}
