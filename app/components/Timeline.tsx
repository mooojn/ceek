import React from 'react';

const timelineEvents = [
  {
    year: "2016",
    description: "CEEK was launched, originally as a hospitality marketing agency in London.",
    id: 1
  },
  {
    year: "2017",
    description: "The first CEEK office was opened in London Victoria. CEEK adds first e-commerce clients and their first international projects.",
    id: 2
  },
  {
    year: "2018",
    description: "CEEK works with brands such as Subway, Lavazza & Disney across 4 continents and grows their digital offering across multiple services.",
    id: 3
  }
];

const TimelineItem = ({ event, index }: { event: typeof timelineEvents[0]; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center justify-between w-full mb-8 md:mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-5/12"></div>
      
      {/* Center Line Dot */}
      <div className="z-20 flex items-center bg-[#111111] border-2 border-gray-600 w-8 h-8 rounded-full justify-center text-xs font-bold shrink-0 mb-4 md:mb-0">
        {event.id}
      </div>

      {/* Content Card */}
      <div className="w-full md:w-5/12 bg-[#1A1A1A] p-6 rounded-lg border border-zinc-800 hover:border-zinc-600 transition-colors duration-300">
        <h3 className="text-3xl font-bold text-white mb-2">{event.year}</h3>
        <p className="text-gray-400 leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="bg-[#111111] text-white py-24 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            The CEEK Journey
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800 hidden md:block"></div>

          <div className="flex flex-col">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
