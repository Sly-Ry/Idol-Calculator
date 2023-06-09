import { Routes, Route } from "react-router-dom";
import { Bts1 } from "./pages/BTS1/Bts1";
import { Home } from "./pages/HOME/Home";

function App() {
    return (
        <Routes>
            <Route path="/Idol-Calculator/" element={<Home />} />
            <Route path="/Idol-Calculator/bts" element={<Bts1 />} />
        </Routes>
    )
}

export default App;