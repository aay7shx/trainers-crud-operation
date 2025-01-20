import "./App.css";
// import JSX from "./components/complexElement";
// import FuncComponent from "./components/StatelessFuctionalComponent";
// import ReactComponent from "./components/ReactComponent";
// import ParentComponent from "./components/ParentComponent";
// import RComponent from "./components/FreeCodeCamp";
import { Toaster } from "react-hot-toast";
import Trainer from './components/getTrainer/Trainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./components/addTrainer/Add";
import Edit from "./components/editTrainer/Edit";

function App() {
  return (
    <>
    <Toaster />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Trainer />} />,
            <Route path="/add" element={<Add />} />,
            <Route path="/edit/:id" element={<Edit />} />
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
