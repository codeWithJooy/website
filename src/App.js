import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
