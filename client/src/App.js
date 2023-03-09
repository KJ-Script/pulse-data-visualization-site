import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AdminPage/>}/>
        <Route exact path="/details" element={<DetailPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
