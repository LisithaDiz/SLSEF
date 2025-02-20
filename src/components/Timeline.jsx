import { FaCheckCircle } from "react-icons/fa";

const Timeline = () => {
  const events = [
    { id: 1, title: "Project Submission", description: "Students submit their projects for preliminary selection." },
    { id: 2, title: "Initial Screening", description: "A panel of judges reviews and shortlists the best projects." },
    { id: 3, title: "Finalist Selection", description: "Top projects are selected to compete at SLSEF." },
    { id: 4, title: "SLSEF Competition", description: "Finalists present their projects at the national competition." },
    { id: 5, title: "International Fair", description: "Winners may qualify for the Regeneron International Science and Engineering Fair." }
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-3xl p-10 space-y-10 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center">Event Timeline</h2>
      <div className="relative w-full">
        <div className="absolute w-1 h-full transform -translate-x-1/2 bg-blue-500 left-1/2"></div>
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} items-center w-full mb-8`}
          >
            <div className="relative flex items-center max-w-xs p-5 bg-white rounded-lg shadow-md">
              <FaCheckCircle className="absolute text-2xl text-blue-500 -left-10" />
              <div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
