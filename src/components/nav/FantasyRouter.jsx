import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import React, {useEffect } from 'react';

import FantasyForecast from "../FantasyForecast";
import FantasyLanding from "./pages/FantasyLanding";
import DraftRankings from "./pages/DraftRankings";
import RookiePreview from "./pages/RookiePreview";
import FantasyNoMatch from "./pages/FantasyNoMatch";
import LandingSpots from "./pages/LandingSpots";

export default function FantasyRouter() {
    const location = useLocation();

    useEffect(() => {
        // Google Analytics setup
        const sendPageView = (location) => {
            // console.log(location.pathname);
            window.gtag('config', 'G-CE4KYHDZN3', { page_path: location.pathname });
        };

        sendPageView(location);

    }, [location]);

    return (
    // <HashRouter>
        <Routes>
            <Route path="/" element={<FantasyForecast />}>
                <Route index element={<FantasyLanding />} />
                {/* TODO: Add your routes here! */}
                <Route path="/draft-rankings" element={<DraftRankings />} />
                <Route path="/rookie-preview" element={<RookiePreview />} />
                <Route path="/landing-spots" element={<LandingSpots />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    // </HashRouter>
    );
}