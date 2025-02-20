import { Button } from "../components";
import Timeline from "../components/Timeline";

const SuperQuality = () => {
  return (
    <section id="about-us" className="relative z-10 flex flex-col items-center w-full gap-10 max-container">
      <Timeline />
      <div className="flex flex-col flex-1 bg-[rgba(50,100,150,0.5)] p-20">
        <div className="w-full h-1 my-8 bg-gradient-to-r from-blue-500 via-green-500 to-red-500"></div>

        <h2 className="relative z-10 text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          What is <span className="text-coral-red">SLSEF</span>?
        </h2>
        <h4 className="mt-4 text-2xl">
          🧬 The Sri Lanka Science and Engineering Fair (SLSEF) is a national competition for student projects held by the Institution of Engineers, Sri Lanka (IESL).
          <br /><br />
          🧬 The fair selects student projects to participate in the {" "}
          <a href="https://www.societyforscience.org/isef/" className="text-blue-500 hover:underline">
          Regeneron International Science and Engineering Fair
          </a>{" "}
          in the US.
        </h4>

        <div className="w-full h-1 my-8 bg-gradient-to-r from-blue-500 via-green-500 to-red-500"></div>

        <h2 className="relative z-10 text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          How it <span className="text-coral-red">Works</span>?
        </h2>
        <ul className="mt-4 text-2xl">
          <li>🧬 The IESL conducts a preliminary selection process for student projects.</li>
          <br />
          <li>🧬 A panel of judges selects finalists from the projects.</li>
          <br />
          <li>🧬 The top finalists are selected to participate in the SLSEF.</li>
          <br />
          <li>🧬 Winners of the SLSEF may be selected to participate in the Intel International Science and Engineering Fair.</li>
        </ul>

        <div className="w-full h-1 my-8 bg-gradient-to-r from-blue-500 via-green-500 to-red-500"></div>

        <h2 className="relative z-10 text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
          Why it's <span className="text-coral-red">Important</span>?
        </h2>
        <ul className="mt-4 text-2xl">
          <li>🧬 The SLSEF motivates students to be creative and innovative.</li>
          <br />
          <li>🧬 The SLSEF showcases the achievements of Sri Lankan school children in the face of international competition.</li>
        </ul>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
