import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
// import Experiences from "./components/Experiences";
import Contacts from "./components/Contacts"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
      </div>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contacts />
    </div>
  );
};

export default App;
