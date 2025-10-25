import { Route, Routes } from "react-router";
import { NAVIGATION } from "./config/navigation";

const Router = () => {
    return (
        <Routes>
            {NAVIGATION.main.map((item) => (
                <Route
                    key={item.path}
                    path={item.path}
                    element={<p>{item.title} Page</p>}
                />
            ))}
            {NAVIGATION.secondary.map((item) => (
                <Route
                    key={item.path}
                    path={item.path}
                    element={<p>{item.title} Page</p>}
                />
            ))}
        </Routes>
    );
};

export default Router;
