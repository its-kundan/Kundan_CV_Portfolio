export default function SkeletonCard() {
  return (
    <div className="bg-black rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-700"></div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="h-6 bg-gray-700 rounded-full w-16"></div>
          <div className="h-6 bg-gray-700 rounded-full w-20"></div>
          <div className="h-6 bg-gray-700 rounded-full w-14"></div>
        </div>
        <div className="h-6 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="h-10 bg-gray-700 rounded w-24"></div>
      </div>
    </div>
  );
}
