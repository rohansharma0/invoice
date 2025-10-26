import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router";
import { NAVIGATION } from "./config/navigation";

const Router = () => {
    return (
        <Routes>
            {Object.values(NAVIGATION)
                .flat()
                .map((item) => (
                    <Route
                        key={item.path}
                        path={item.path}
                        element={item.element}
                    />
                ))}
            <Route path="*" element={<div>404 — Page Not Found</div>} />
            <Route path="/landing" element={<LandingPage />} />
        </Routes>
    );
};

export default Router;
