import Login from "./layouts/login";
import fon from "./image/fon.png";
import { Route, Routes } from "react-router-dom";
import Exit from "./layouts/exit";

function App() {
    const fonStyle = {
        backgroundImage: `url(${fon})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh"
    };
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={fonStyle}
        >
            <Routes>
                <Route path="/exit" element={<Exit />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
