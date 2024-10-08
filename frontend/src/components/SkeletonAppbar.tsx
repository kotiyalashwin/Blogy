export default function AppbarSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="space-y-2">
        <div className="h-4 w-[100px] bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-[120px] bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
