import { Route } from "react-router-dom";
import SignUp from "./components/profile/SignUp";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <>
      <Route path="/" exact>
        <SignUp />
      </Route>

      <Route path="/welcome">
        <Welcome />
      </Route>
    </>
  );
}

export default App;
