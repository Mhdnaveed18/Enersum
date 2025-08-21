export default function Hero({ title, subtitle }) {
  return (
    <section className="mb-10">
      <div className="rounded-3xl p-8 sm:p-12 bg-[#F5F5F5] shadow-[12px_12px_24px_#d6d6d6,_-12px_-12px_24px_#ffffff] border border-white/60">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2E7D32]">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#333333]/80 max-w-3xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
