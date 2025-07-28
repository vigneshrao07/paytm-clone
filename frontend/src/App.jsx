import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin"></Route>
          <Route path="/dashboard"></Route>
          <Route path="/send"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
