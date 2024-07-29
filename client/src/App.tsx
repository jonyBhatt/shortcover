import "./App.css";
import { About } from "./components/HomePage/About";
import { Benefits } from "./components/HomePage/Benefits";
import { Calculator } from "./components/HomePage/Calculator";
import { CarCost } from "./components/HomePage/CarCost";
import { ExpertSay } from "./components/HomePage/ExpertSay";
import { FAQ } from "./components/HomePage/FAQ";
import { Hero } from "./components/HomePage/Hero";
import { InsuranceCover } from "./components/HomePage/InsuranceCover";
import { TempCalculator } from "./components/HomePage/TempCalculator";
import { TemporaryInsurance } from "./components/HomePage/TemporaryInsurance";
import { TestimonialSection } from "./components/HomePage/Testimonial";
import { WhatSetsUsApart } from "./components/HomePage/WhatSetsUsApart";
import { WhyUseShortCover } from "./components/HomePage/WhyUseShortCover";
import { useRouteContext } from "./context/NavLinkProvider";

function App() {
  const { currentRoute } = useRouteContext();
  console.log(currentRoute);

  return (
    <div>
      <Hero />
      <About />
      <Benefits />
      {currentRoute === "/cars" && <CarCost />}
      {currentRoute === "/cars" && <TempCalculator />}
      {currentRoute !== "/cars" && <WhatSetsUsApart />}
      {currentRoute !== "/cars" && <WhyUseShortCover />}
      {currentRoute !== "/cars" && <InsuranceCover />}
      <TemporaryInsurance />
      {/* {currentRoute !== "/cars" && <ShortTerm />} */}
      {currentRoute !== "/cars" && <Calculator />}
      <TestimonialSection />
      <FAQ />
      <ExpertSay />
    </div>
  );
}

export default App;
