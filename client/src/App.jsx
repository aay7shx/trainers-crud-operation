import "./App.css";
// import JSX from "./components/complexElement";
// import FuncComponent from "./components/StatelessFuctionalComponent";
// import ReactComponent from "./components/ReactComponent";
// import ParentComponent from "./components/ParentComponent";
// import RComponent from "./components/FreeCodeCamp";

import Trainer from './components/getTrainer/Trainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Trainer />} />,
          </Routes>
        </div>
      </Router>

      {/* <ReactComponent />
      <ParentComponent />
      <RComponent />

      <JSX />
      <FuncComponent /> */}
    </>
  );
}


export default App;
