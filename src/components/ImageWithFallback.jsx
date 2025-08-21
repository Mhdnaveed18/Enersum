import { useState, useMemo } from "react";

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  sizes,
  loading = "lazy",
  decoding = "async",
  fallback = "/fallback.svg",
  ...rest
}) {
  const [error, setError] = useState(false);

  // Prevent infinite loop if fallback also fails
  const effectiveSrc = useMemo(() => (error ? fallback : src), [error, fallback, src]);

  return (
    <img
      src={effectiveSrc}
      alt={alt}
      className={className}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      onError={() => setError(true)}
      {...rest}
    />
  );
}
