import logo from "./logo.svg";
import "./App.css";
import Formik from "./Formik";
import NotFound from "./NotFound";
import UnAuthorised from "./UnAuthorised";

function App() {
  return (
    <div className="App">
      <Formik />
      {/* <NotFound /> */}
      {/* <UnAuthorised /> */}
    </div>
  );
}

export default App;
