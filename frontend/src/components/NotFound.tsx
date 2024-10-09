export default function NoBlogsFound() {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg shadow-md">
      <div className="text-6xl mb-4">
        <span
          role="img"
          aria-label="Smiling face"
          className="text-teal-500 text-9xl"
        >
          📝
        </span>
      </div>
      <p className="text-xl font-medium text-teal-900">No Blogs for now</p>
    </div>
  );
}
