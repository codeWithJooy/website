import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import About from "./Pages/About";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/about" component={About}  exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
