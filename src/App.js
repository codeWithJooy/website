import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/about" component={About}  exact/>
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
