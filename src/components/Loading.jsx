export default function Loading({ displayItem = "Loading..." }) {
  return (
    <div
      className="flex h-screen w-screen justify-center items-center"
      role="status"
      aria-live="polite"
    >
      {displayItem}
    </div>
  );
}
