export default function Button({ children, variant = "primary", className = "", ...props }) {
  const styles =
    variant === "primary"
      ? "bg-[#2E7D32] text-white hover:bg-[#1b5e20]"
      : variant === "secondary"
      ? "bg-[#1565C0] text-white hover:bg-[#0d47a1]"
      : "bg-[#F5F5F5] text-[#333333] border border-white/60 hover:text-[#1565C0]";

  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold",
        "shadow-none",
        styles,
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
