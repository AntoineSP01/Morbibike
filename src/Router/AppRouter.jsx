import Home from "../pages/App";
import Detail from "../pages/DetailBike";
import Error from "../pages/Error";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detailbike" element={<Detail />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;
