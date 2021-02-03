import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Tracker from "./pages/Tracker";
import Info from "./pages/Info";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/track" component={Tracker} />
          <Route path="/info" component={Info} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
