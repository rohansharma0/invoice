import { Routes, Route } from "react-router";
import { ROUTES } from "./Routes";
const AppRouter = () => {
    return (
        <Routes>
            {ROUTES.map((r) => (
                <Route key={r.path} path={r.path} element={r.element} />
            ))}
        </Routes>
    );
};

export default AppRouter;
