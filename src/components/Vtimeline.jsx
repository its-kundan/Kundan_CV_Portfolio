// components/VerticalTimeline.js
import TimelineItem from './TimelineItem';

const timelineData = [
  {
    date: "May 1945",
    title: "Dunkirk",
    content: "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk. On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France.",
  },
  {
    date: "Jul 25, 1941",
    title: "The Battle of Britain",
    content: "RAF Spitfire pilots scramble for their planes after France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”.",
  },
  {
    date: "Jun 01, 1941",
    title: "Operation Barbarossa",
    content: "A column of Red Army prisoners taken during the first days of the German invasion since the 1920s, Hitler had seen Russia, with its immense natural resources.",
  },
  // Add more items as needed
];

export default function VerticalTimeline() {
  return (
    <div className="bg-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} data={item} position={index} />
        ))}
      </div>
    </div>
  );
}
