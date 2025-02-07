import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import { BitcoinRatesPage } from "../pages/BitcoinRatesPage";
import PageNotFound from "../pages/PageNotFound";
import { LoginPage } from "../pages/LoginPage";

// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
function AppRoutes(props) {
    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route index element={<Homepage {...props} />} />

            <Route path="/about" element={<AboutPage {...props} />} />
            {/* nested routes, matches on /dash/tasks etc */}
            <Route
                path="/bitcoinRates"
                element={<BitcoinRatesPage {...props} />}
            />

            <Route path="/login" element={<LoginPage {...props} />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'
