//this lets us display different components at different URI's.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//there has to be a better way of importing components that are stored in separate files.
import Home from "./components/Home";
import Hangman from "./components/hangman/Hangman";
import About from "./components/About";
import Cleverishbot from "./components/Cleverishbot";
import RockPaperScissors from "./components/RockPaperScissors";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    /*
      this is where we determine what to render at each uri, and also render components that are
      consistent among all pages. Notice that not the entire page is rerendered at each URI.
    */
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={() => <Home/>}/>
          <Route path="/hangman" exact component={() => <Hangman/>}/>
          <Route path="/cleverishbot" exact component={() => <Cleverishbot/>}/>
          <Route path="/about" exact component={() => <About/>}/>
          <Route path="/rockpaperscissors" exact component={() => <RockPaperScissors/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
