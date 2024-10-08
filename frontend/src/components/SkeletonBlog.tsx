export default function CardSkeleton() {
  return (
    <div className="border-b mt-4  bg-white border-slate-300 p-2 space-y-2 shadow-md  transition-all duration-200">
      <div className="flex items-center">
        <div
          className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"
          aria-hidden="true"
        />
        <div
          className="w-24 h-4 ml-1 bg-gray-200 rounded animate-pulse"
          aria-hidden="true"
        />
      </div>
      <div
        className="w-full h-6 bg-gray-200 rounded animate-pulse sm:h-8"
        aria-hidden="true"
      />
      <div
        className="w-full h-4 bg-gray-200 rounded animate-pulse sm:h-5"
        aria-hidden="true"
      />
    </div>
  );
}
