// components/TimelineItem.js
export default function TimelineItem({ data, position }) {
  const alignment = position % 2 === 0 ? 'flex-row' : 'flex-row-reverse';
  return (
    <div className={`flex ${alignment} items-start text-left mb-8`}>
      <div className="w-1/2 px-4">
        <div className={`text-lg font-bold ${position % 2 === 0 ? 'text-right' : 'text-left'}`}>{data.date}</div>
      </div>
      <div className="w-0 flex-shrink-0">
        <div className="h-full w-1 bg-blue-500"></div>
        <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center -mt-3 -mx-3 z-10">
          {/* Icon or marker can go here */}
        </div>
      </div>
      <div className="w-1/2 px-4">
        <h3 className="text-xl font-bold mb-1">{data.title}</h3>
        <p>{data.content}</p>
        <a href="#" className="text-blue-500 hover:text-blue-700 text-sm">read more</a>
      </div>
    </div>
  );
}
