import { Routes, Route } from "react-router-dom";
import { Bts1 } from "./pages/BTS1/Bts1";
import { Home } from "./pages/HOME/Home";

function App() {
    return (
        <Routes basename='/Idol-Calculator' >
            <Route exact path="/Idol-Calculator" element={<Home />} />
            <Route exact path="/Idol-Calculator/bts" element={<Bts1 />} />
        </Routes>
    )
}

export default App;