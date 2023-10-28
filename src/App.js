import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Productlist from "./components/productlist/Productlist";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";


function App() {

  const theme=useContext(ThemeContext);
  const darkmode=theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkmode? "#222":"white",color:darkmode && "white"}}>
    <Toggle/>
     <Intro/>
     <About/>
     <Productlist/>
     <Contact/>
    </div>
  );
}

export default App;
